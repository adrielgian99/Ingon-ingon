import React from "react";
import "../assets/styles/product_card.css";

class ProductCard extends React.Component {
  render() {
    return (
      <div className="card product-card">
        <img
          src={
            "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/12/4/dc05443a-f66e-4e9b-9e50-3ffa3afb6176.jpg"
          }
          alt=""
        />
        <div className="mt-2">
          <div>
            <h6>Product Name Here</h6>
            <span className="text-muted">Rp. 25.000</span>
          </div>
          <div className="d-flex flex-row justify-content-end">
            <button className="btn btn-primary mt-2">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
