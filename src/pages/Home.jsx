import React from "react";
import ProductCard from "../components/ProductCard";

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <strong>Filter Product</strong>
              </div>
              <div className="card-body">
                <label htmlFor="searchProductName">Product Name</label>
                <input
                  name="searchProductName"
                  type="text"
                  className="form-control mb-3"
                />
                <label htmlFor="searchCategory">Product Category</label>
                <select name="searchCategory" className="form-control">
                  <option value="">All Items</option>
                  <option value="">Arthropoda</option>
                  <option value="">Reptil</option>
                  <option value="">Mamalia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
