import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.currentCategory} {this.props.info.title} </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Adı</th>
              <th>Miktar</th>
              <th>Birim Miktar</th>
              <th>Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.productID}>
                <th scope="row">{p.productID}</th>
                <td>{p.name}</td>
                <td>{p.unitsInStock}</td>
                <td>{p.quantityPerUnit}</td>
                <td>{p.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
