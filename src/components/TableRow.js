import React, { Component } from 'react';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.props.delete.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    return (
      <tr>
        <td style={{ width: 150 + 'px' }}>
          <img src={this.props.obj.image} style={{ maxHeight: 120 + 'px' }}/>
        </td>
        <td>
          <div className="font-weight-bold">TIKINOW | <span className="text-capitalize">{this.props.obj.name}</span></div>
          <small className="text-success d-block">>> {this.props.obj.ship}</small>
          <small className="d-block">Cung cấp bởi <span className="text-primary">{this.props.obj.supplier}</span></small>
          <small className="d-flex text-primary">
            <span className="mr-4 clickable" onClick={() => this.props.delete(this.props.obj.id)}>Xóa</span>
            <span className="clickable">Để dành mua sau</span>
          </small>
        </td>
        <td>
          <div className="font-weight-bold text-right">
            {this.numberWithCommas(this.props.obj.price*this.props.obj.volume*(1 - this.props.obj.discount/100))}{this.props.obj.unit}
          </div>
          <div className="text-right">
            <small className="text-muted"><del>{this.numberWithCommas(this.props.obj.price*this.props.obj.volume)}{this.props.obj.unit}</del></small> | <small className="font-weight-bold">-{this.props.obj.discount}%</small>
          </div>
        </td>
        <td>
          <div className="d-flex alight-items-center">
            <button type="button" className="btn btn-outline-dark" disabled={this.props.obj.volume === 1}
              onClick={() => this.props.update(this.props.obj.id, 'sub')}>-</button>
            <div className="px-3 py-2">{this.props.obj.volume}</div>
            <button type="button" className="btn btn-outline-dark"
              onClick={() => this.props.update(this.props.obj.id, 'add')}>+</button>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableRow;