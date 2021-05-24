import React, { Component } from "react";
import { render } from "react-dom";



class Demo extends Component {
  state = { loading: false };

  handleClick = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidUpdate(prevProps, props) {
    if(prevProps !== props){
      console.log('reached')
      if(this.state.loading){
        throw new Error('I crashed!');
      }
      else {
        console.log('no error here')
      }
    }
  }
  render() {
    return (
     <div>
      <h2>
        Home Page, will list the paths of all standard sections of this react application.
      </h2>
      <ul >
      </ul>
      <button onClick={this.handleClick}>
        Create Error
      </button>
    </div>
    );
  }
}
export default Demo