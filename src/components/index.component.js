import React, { Component } from 'react';
import TableRow from './TableRow';
import Summary from './Summary';

const cartData = [
  {
    id: 1, name: 'Dụng cụ hút mũi Nosefrida', price: 390000, unit: 'đ', discount: 40,
    ship: 'Giao hàng 2h', supplier: 'ARUM', volume: 1,
    image: process.env.PUBLIC_URL + '/logo192.png'
  },
  {
    id: 2, name: 'Loa Soundbar Samsung', price: 2208000, unit: 'đ', discount: 24,
    ship: 'Giao hàng 2h', supplier: 'Tiki Trading', volume: 1,
    image: process.env.PUBLIC_URL + '/a.jpg'
  }
]

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { business: [] };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {
    this.setState({ business: cartData });
  }

  tabRow() {
    if (this.state.business.length) {
      return this.state.business.map((object, i) => {
        return <TableRow obj={object} key={i} delete={this.handleDelete} update={this.handleUpdate} />;
      });
    } else {
      return <tr><td>Bạn không còn sản phẩm nào cần thanh toán</td></tr>
    }

  }

  handleDelete(id) {
    this.setState({ business: this.state.business.filter(b => b.id !== id) });
  }

  handleUpdate(id, op) {
    let items = this.state.business.map(b => {
      if (b.id === id) {
        if (op === 'sub' && b.volume > 1) b.volume--;
        if (op === 'add') b.volume++;
      }
      return b;
    });

    this.setState({ business: items });
  }

  handleCheckout() {
    this.setState({ business: [] });
  }

  render() {
    return (
      <div>
        <div className="border border-warning rounded-lg px-3 mb-4">
          Bạn ơi hãy chon địa chỉ nhận hàng để xem sản phẩm - <span className="text-primary">Nhập địa chỉ</span>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <h3 className="text-uppercase mb-0 mr-3">Giỏ hàng</h3>
            <div className="text-muted">({this.state.business.length} sản phẩm)</div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <table className="table table-borderless bg-white">
                <tbody>
                  {this.tabRow()}
                </tbody>
              </table>
            </div>
            { 
              this.state.business.length 
              ? <div className="col-3"><Summary obj={this.state.business} onCheckout={this.handleCheckout} /></div>
              : null 
            }
          </div>
        </div>
      </div>
    );
  }
}