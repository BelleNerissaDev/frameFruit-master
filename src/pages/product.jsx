import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
  const [data, setData] = useState(DATA);
  const [filter, setFilter] = useState(data);

  const getFilterByTerm = (term) => {
    const updatedList = DATA.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilter(updatedList);
  };

  const cardItem = (item) => {
    return (
      <div
        class="card col-lg-4 col-md-3 px-0 my-3 mx-3"
        key={item.id}
        style={{ width: "18rem" }}
      >
        <img
          height="250px"
          src={item.img}
          class="card-img-top"
          alt={item.title}
        />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">R${item.price.toFixed(2)}/Kg</p>
          <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">
            Adicione ao carrinho
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-light mt-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-12 text-center ">
            <h1 className="text-purple">
              <span className="fa fa-shopping-basket px-2"></span>Produtos
            </h1>
            <hr />

            <div class="input-group d-flex mt-3 w-50 mx-auto">
              <input
                type="text"
                class="form-control"
                placeholder="Pesquisar..."
                onChange={(event) => {
                  getFilterByTerm(event.target.value);
                }}
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <span className="fa fa-search me-1"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">{filter.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
