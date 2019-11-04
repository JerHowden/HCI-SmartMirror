import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Webcam from 'react-webcam';
import { loadModels, getFullFaceDescription, createMatcher } from '../api/face-api_call';

const JSON_PROFILE = require('../descriptors/descriptors.json');

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const inputSize =   160;

class VideoInput extends Component {

    constructor(props) {
        super(props);
        this.webcam = React.createRef();
        this.state = {
            fullDesc: null,
            detections: null,          
            descriptors: null,
            faceMatcher: null,
            match: null,
            goneCount: 0,
            facingMode: null
        };
    }

    componentWillMount = async () => {
        await loadModels();
        this.setState({ faceMatcher: await createMatcher(JSON_PROFILE) });
        this.setInputDevice();
    };

    setInputDevice = () => {
        navigator.mediaDevices.enumerateDevices().then(async devices => {
            let inputDevice = await devices.filter(
                device => device.kind === 'videoinput'
            );
            if (inputDevice.length < 2) {
                this.setState({
                    facingMode: 'user'
                }, () => this.startCapture());
            } else {
                this.setState({
                    facingMode: { exact: 'environment' }
                }, () => this.startCapture());
            }
        });
    };

    startCapture = () => {
        this.interval = setInterval(() => {
            this.capture();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    capture = async () => {
        if (this.webcam.current) {
            await getFullFaceDescription(
                this.webcam.current.getScreenshot(),
                inputSize
            ).then(fullDesc => {
                if (fullDesc) {
                    this.setState({
                        detections: fullDesc.map(fd => fd.detection),
                        descriptors: fullDesc.map(fd => fd.descriptor)
                    });
                }
            });

            if (this.state.descriptors && this.state.faceMatcher) {
                let match = await this.state.descriptors.map(descriptor =>
                    this.state.faceMatcher.findBestMatch(descriptor)
                );
                this.setState(prevState => {
                    if(match.length === 0)
                        return { match, goneCount: prevState.goneCount + 1 }
                    else
                        return { match, goneCount: 0 }
                }, () => {
                    console.log("VI-State:", this.state.match[0] ? this.state.match[0]._label : "")
                    if(this.state.match[0] && this.state.match[0]._label !== 'unknown' && this.state.match[0]._label !== this.props.profile)
                        this.props.setProfile(this.state.match[0]._label)
                    if(this.state.goneCount >= 10 && this.props.profile)
                        this.props.setProfile("")
                });
            }
        }
    };

    render() {
        const { facingMode } = this.state;
        let videoConstraints = null;
        if (!!facingMode) {
            videoConstraints = {
                width: WIDTH,
                height: HEIGHT,
                facingMode: facingMode
            };
        }

        return (
            <div
                className="Camera"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
            
                <div
                    style={{
                        width: WIDTH,
                        height: HEIGHT
                    }}
                >
                    <div style={{ position: 'relative', width: WIDTH }}>
                        {!!videoConstraints ? (
                            <div style={{ position: 'absolute' }}>
                                <Webcam 
                                    id='Webcam'
                                    audio={false}
                                    width={WIDTH}
                                    height={HEIGHT}
                                    ref={this.webcam}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoInput;