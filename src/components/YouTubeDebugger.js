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

  handleClick = () => {
    this.setState({
      
    })
  }

  render() {
    return (
      <div>
        <button class = "bitrate" onClick={this.bitClick}>Click me!</button>
      </div>
    );
  }
}
