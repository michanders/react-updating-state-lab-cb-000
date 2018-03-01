import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  bitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  resClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        },
      }
    })
  }
  
  render() {
    return (
      <div>
        <button class = "bitrate" onClick={this.bitClick}>Click me!</button>
        <button class = "resolution" onClick={this.resClick}>Click me!</button>
      </div>
    );
  }
}
