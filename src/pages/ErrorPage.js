import React from "react";

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    console.log({self: this.state})
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log({delf: this.state})

    // You can also log error messages to an error reporting service here
  }
  handleCalm = () => {
    this.setState({ error: null, errorInfo: null })
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <p>Ooops, we ran into an error</p>
          <a
            className="App-link Error-reposition-hack"
            href="https://colorsciencestudios.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Somethings not right here...
          </a>
          <button onClick={this.handleCalm} >Restore Calm</button>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}
export default CustomErrorBoundary;