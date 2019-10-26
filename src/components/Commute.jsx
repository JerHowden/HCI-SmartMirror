import React, { Component } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';

export default class Commute extends Component {

    constructor(props) {
        super(props)

        this.state = {
            commutes: {
                Jeremiah: {

                },
                Elias: {

                },
                Haroon: {

                },
                JP: {

                }
            }
        }
    }

    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken={'pk.eyJ1IjoiamVyZW1pYWhob3dkZW4iLCJhIjoiY2sxdG02dHA3MDg0ajNicWZzcDlscGhjdyJ9.j2t6Mr4EpeTpm-4Uz7kszg'}
                mapStyle='mapbox://styles/mapbox/dark-v10'

                width={400}
                height={400}
                latitude={33.5779}
                longitude={101.8552}
                zoom={10}
                onViewportChange={(viewport) => {
                    const { width, height, latitude, longitude, zoom } = viewport;
                    this.setState({
                        width, height, latitude, longitude, zoom
                    })
                }}
            >
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
            </ReactMapGL>
        )
    }

}