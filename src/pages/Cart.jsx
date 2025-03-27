import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/Cart/actions/index";
import { NavLink } from "react-router-dom";
import { EmptyCart } from "../components/EmptyCart";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div
        className="px-4 my-3 m-auto bg-light rounded-3"
        key={cartItem.id}
      >
        <div className="container py-3 w-50">
          <div className="row justify-content-center">
            <button
              onClick={() => handleClose(cartItem)}
              className="btn-close float-end"
              aria-label="Close"
              title="Remover Item"
            ></button>
            <div className="col-md-4">
              <img src={cartItem.img} alt={cartItem.title} width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold text-secondary">
                R${cartItem.price.toFixed(2)}/Kg
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Prossiga para o checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="col-12 text-center mt-5 text-purple">
        <h1>
          <span className="fa fa-shopping-cart me-1 px-2"></span>Seu Carrinho
        </h1>
        <hr />
      </div>
      {state.length === 0 && <EmptyCart/>}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
