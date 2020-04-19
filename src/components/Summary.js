import React, { Component } from 'react';
import Popup from './Popup';

class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = { promoteCode: 0, showPopup: false };

    this.onChangePromoteCode = this.onChangePromoteCode.bind(this);
    this.props.onCheckout.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });

    if (this.state.showPopup) {
      this.props.onCheckout();
    }
  }

  setTotal(items) {
    let sum = 0;
    if (items.length) {
      for (let i = 0; i < items.length; i++) {
        sum += items[i].price * items[i].volume * (1 - items[i].discount / 100);
      }
    }

    return sum;
  }

  numberWithCommas(x) {
    if (!x) return;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  onChangePromoteCode(e) {
    this.setState({
      promoteCode: parseFloat(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <div className="bg-white mb-3">
          <div className="border-bottom">
            <div className="d-flex justify-content-between px-3 pt-3">
              <div className="text-muted">Tạm tính:</div>
              <div className="font-weight-bold">{this.numberWithCommas(this.setTotal(this.props.obj))}đ</div>
            </div>
            <div className="d-flex justify-content-between px-3 pb-3">
              <div className="text-muted">Mã giảm giá:</div>
              <div className="font-weight-bold">{this.state.promoteCode}%</div>
            </div>
          </div>
          <div className="d-flex justify-content-between p-3">
            <div className="text-muted">Thành tiền:</div>
            <div className="font-weight-bold text-right">
              <div className="text-danger h5 mb-0">{this.numberWithCommas(this.setTotal(this.props.obj) * (1 - this.state.promoteCode / 100))}đ</div>
              <small className="text-muted">(Đã bao gồm VAT nếu có)</small>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-danger btn-sm mb-3 w-100" onClick={() => this.togglePopup()}>Tiến hành đặt hàng</button>
        <div className="bg-white">
          <div className="font-weight-bold border-bottom p-3">Mã giảm giá / Quà tặng</div>
          <div className="p-3">
            <div className="form-group mb-0">
              <select className="form-control" value={this.state.promoteCode}
                onChange={this.onChangePromoteCode}>
                <option value="0">Không dùng mã</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          {
            this.state.showPopup
            ? <Popup text='Đặt hàng thành công' closePopup={this.togglePopup.bind(this)} />
            : null
          }
        </div>

      </div>
    );
  }
}

export default Summary;