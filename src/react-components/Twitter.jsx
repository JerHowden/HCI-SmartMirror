import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Twitter.css';

export default class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Jeremiah: 'https://twitter.com/buffer/lists/the-buffer-team',
      Elias: 'https://twitter.com/mashable/lists/social-media'
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('CWRP:', nextProps, this.state[nextProps.profile]);
    if (
      nextProps.profile &&
      document.getElementById('twitter-widget-0') &&
      document.getElementById('twitter-widget-0').contentWindow
    ) {
      console.log(
        'IFRAME:',
        document.getElementById('twitter-widget-0').contentWindow.document
      );
      if (
        document
          .getElementById('twitter-widget-0')
          .contentWindow.document.querySelector('.timeline-Header')
      )
        document
          .getElementById('twitter-widget-0')
          .contentWindow.document.querySelector(
            '.timeline-Header'
          ).style.display = 'none';
      if (
        document
          .getElementById('twitter-widget-0')
          .contentWindow.document.querySelector('.timeline-Footer')
      )
        document
          .getElementById('twitter-widget-0')
          .contentWindow.document.querySelector(
            '.timeline-Footer'
          ).style.display = 'none';
    }
  }

  render() {
    return (
      <div className="centerContent widget" style={this.props.style}>
        <div className="selfCenter">
          <TwitterTimelineEmbed
            sourceType="url"
            url="https://twitter.com/buffer/lists/the-buffer-team"
            options={{ height: 300 }}
            theme="dark"
          />
        </div>
      </div>
    );
  }
}
