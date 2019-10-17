import React, { Component } from 'react'

import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.getWebcam = this.getWebcam.bind(this)

        this.state = {
            profile: "",
            profiles: ['Jeremiah', 'Elias', 'Haroon', 'JP']
        }
    }

    componentDidMount() {
        this.getWebcam()
    }

    async getWebcam() {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function onSuccess(stream) {
                var video = document.getElementById('Webcam');
                video.autoplay = true;
                video.srcObject = stream;
            })
            .catch(function onError() {
                alert('There has been a problem retreiving the streams - are you running on file:/// or did you disallow access?');
            });
        } else {
            alert('getUserMedia is not supported in this browser.');
        }
    }

    render() {
        return(
            <div id="MainContainer">
                <video 
                    id="Webcam" 
                    width={window.innerWidth} 
                    //height={window.innerHeight}
                    style={{
                        marginTop: window.innerHeight * -0.25
                    }}
                />
            </div>
        );
    }
};
