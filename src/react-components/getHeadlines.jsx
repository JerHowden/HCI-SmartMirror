import React, { Component } from 'react'
import axios from 'axios'
import USNews from './USNews'

export default class getHeadlines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headlines: [],
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4c9b83f8f8804ae3a674087f446bb422',
        }; 
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(response => {
                console.log(response);
                this.setState({ headlines: response.data.articles }) //may be response.data.articles
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const { headlines } = this.state

        return (
            <div>
                {
                    headlines.length ?
                    <USNews headlines={ headlines }/> :
                    null
                }
            </div>

        )
    }
}




                        // headlines.map(headlines => <div key={headlines.author}>{headlines.title}</div>) :
