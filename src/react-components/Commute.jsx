import React, { Component } from 'react';
import { Fade } from '@material-ui/core'

import ReactMapGL, { Marker } from 'react-map-gl';
import Routes from './Commutes';

export default class Commute extends Component {

    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                latitude: 33.5779,
                longitude: -101.8552,
                zoom: 11
            },
            commutes: {
                Jeremiah: '-101.880274,33.568672;-101.876897,33.586717',
                Elias: '',
                Haroon: '',
                JP: ''
            }
        }
    }

    componentDidMount() {
        console.log(Routes)
    }

    async componentWillReceiveProps(nextProps){
        if(nextProps.profile) {
            const map = this.reactMap.getMap();
            // map.on('load', () => { map.addLayer({...}) })
            map.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: Routes[nextProps.profile].routes[0].geometry.coordinates
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#F44",
                    "line-width": 4
                }
            });

            let viewport;
            switch(nextProps.profile) {
                case "Jeremiah":
                    viewport = {
                        latitude: 33.577843,
                        longitude: -101.881055,
                        zoom: 12
                    }
                break;

                case "Elias":
                    viewport = {

                    }
                break;

                default:
                    console.error("No Profile")
            }
            this.setState({ viewport })
        }
    }

    render() {
        let style = {}
        if(this.props.style && this.props.style.left === 0 && this.props.style.right === 0)
            style = {margin: '0 auto'}
        else if(this.props.style && this.props.style.top === 0 && this.props.style.bottom === 0)
            style= {margin: 'auto 0'}

        return (
            <Fade in={this.props.fade} timeout={{ enter: 1000, exit: 500 }}>
                <div id="CommuteContainer" className="widget" style={this.props.style}>
                    <ReactMapGL
                        mapboxApiAccessToken={'pk.eyJ1IjoiamVyZW1pYWhob3dkZW4iLCJhIjoiY2sxdG02dHA3MDg0ajNicWZzcDlscGhjdyJ9.j2t6Mr4EpeTpm-4Uz7kszg'}
                        mapStyle='mapbox://styles/mapbox/dark-v10'

                        style={style}
                        ref={(reactMap) => this.reactMap = reactMap}
                        width={200}
                        height={200}
                        latitude={this.state.viewport.latitude}
                        longitude={this.state.viewport.longitude}
                        zoom={this.state.viewport.zoom}
                        onViewportChange={(viewport) => {
                            this.setState({
                                viewport
                            })
                        }}
                    >
                    {/*
                        <Marker
                            latitude={this.state.geometry.location.lat()}
                            longitude={this.state.geometry.location.lng()}
                            offsetLeft={-25}
                            offsetTop={-50}
                        >
                            <img 
                                src="https://img.icons8.com/plasticine/100/000000/map-pin.png" 
                                alt="X"
                                width="50"
                                height="50"
                                style={{backgroundColor: 'white'}}
                            />
                        </Marker>
                    */}
                    </ReactMapGL>
                </div>
            </Fade>
        )
    }

}