import React, { Component } from 'react';

class Popup extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup__inner text-center p-5'>
          <h1 className="text-success text-uppercase">{this.props.text}</h1>
          <button type="button" className="btn btn-danger btn-sm" onClick={this.props.closePopup}>Đóng</button>
        </div>
      </div>
    );
  }
}

export default Popup;