import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/Cart/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Adicione ao carrinho");

  /* Now we need a product id which is pass from the product page. */

  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id === proid.id);
  const product = proDetail[0];

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Adicione ao carrinho") {
      dispatch(addItem(product));
      setCartBtn("Remova do carrinho");
    } else {
      dispatch(delItem(product));
      setCartBtn("Adicione ao carrinho");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">R${product.price.toFixed(2)}/Kg</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-3"
            >
              <span className="fa fa-shopping-cart me-1 px-2"></span>
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
