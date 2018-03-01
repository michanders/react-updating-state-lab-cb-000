import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked++
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
