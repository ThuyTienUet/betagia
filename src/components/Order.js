import React, { Component } from "react";

class Order extends Component {

    __handleChangeStaus = (action) => {

    }
    render() {
        const { order, key } = this.props

        const { customerName, products, status } = order
        return (
            <tr>
                <td>{key}</td>
                <td>{customerName}</td>
                <td>
                    {
                        products.map(product => {
                            return product + ', '
                        })
                    }
                </td>
                <td>{status}</td>
                <td>
                    <button >Detail</button>
                    <button onClick={this.__handleChangeStaus('approve')}>Approve</button>
                    <button onClick={this.__handleChangeStaus('reject')}>Reject</button>
                </td>
            </tr>
        );
    }
}

export default Order;
