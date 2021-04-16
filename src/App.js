import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Post extends Component {

  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
  };

  changeBody(){
    let editedBody = prompt ("Enter a new body:")
    this.setState({
      body: editedBody
    })
  };

  //BONUS//
  handleFormInput (e) {
      this.setState({
        body: e.target.value
      })
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <h4>{this.state.body}</h4>
        <p>
        <button onClick={(e) => this.changeBody(e)}>Click to Edit Body</button>
        </p>
        <input type="text" onChange={(e) => this.handleFormInput(e)} placeholder="or type to edit body..." />  {/*this was the bonus*/}
        <h2>Comments:</h2>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post;
