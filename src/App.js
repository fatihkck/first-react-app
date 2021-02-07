import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.categoryID);
  };

  getProducts = (categoryId) => {
    var url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryID=" + categoryId;
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  };



  render() {
    let categoryInfo = { title: "Kategori Listesi" };
    let productInfo = { title: "Ürün Listesi" };

    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                currentCategory={this.state.currentCategory}
                info={productInfo}
                products={this.state.products}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
