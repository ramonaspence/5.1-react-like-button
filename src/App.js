import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); //according to React Docs you should always pass props in for a class constructor, but I don't know why

    this.state = {likes: 0} //this.state can only be assigned in the constructor, outside of the constructor, .setState() must be used
    this.addLike = this.addLike.bind(this);
}
  addLike(event) { //this method is fired onClick of our button
    this.setState((state, num) => { //.setState() can take an object or a function in this case
      return {likes: state.likes + 1}
    });
  }

      render() {
        // const single = (this.state.likes = 1);
        return (
          <div className='App'>
            <button className='like' onClick={this.addLike} type='button'><span>{this.state.likes} {this.state.likes === 1 ? 'like':'likes'}</span></button>
          </div> );
}}
export default App;
