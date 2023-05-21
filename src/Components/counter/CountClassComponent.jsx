import React, { Component } from 'react';
import './Count.css';
export default class CountClassComponent extends Component {
  constructor () {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {

    // if (this.state.count <= 0) return;
    // this.setState({ count: this.state.count - 1 });

    !this.state.count <= 0 ?
      this.setState({ count: this.state.count - 1 })
      :
      this.setState({ count: this.state.count });
  };

  render() {
    return (
      <>
        <div className="section">
          <h1 className='heading'>Counter App</h1>
          <p className='counter'>{this.state.count}</p>
          <div className='btn__section'>
            <button type='button' className='btn' onClick={this.handleIncrement} >+</button>
            <button type='button' className='btn' onClick={this.handleDecrement}>-</button>
          </div>
        </div>
      </>
    );
  }
}
