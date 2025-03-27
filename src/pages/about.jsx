import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-light mt-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-purple">Sobre nós</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              molestiae earum rem doloremque, nihil delectus ullam error
              consectetur? Dicta, non exercitationem in consectetur totam
              dolorum at voluptate laudantium aliquam, officiis perspiciatis
              molestias reiciendis consequuntur ullam perferendis velit
              blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
              eius rerum distinctio, a illo earum, optio molestias nostrum
              maxime quibusdam delectus, adipisci impedit? Nam corporis
              reiciendis minus quod eaque, laborum veritatis voluptatibus id
              maiores tempore accusantium recusandae perspiciatis, officia cum
              ad maxime fuga repellendus a magni consequatur. Unde adipisci hic
              provident est sint corporis, dolorem esse autem soluta molestiae
              optio quisquam eligendi obcaecati minima?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Entre em contato
            </NavLink>
            <a href="https://github.com/BelleNerissa/frameFruit" className="link-dark px-3 text-purple">FrameFruit 🤍 by Belle Nerissa</a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://mercadoeconsumo.com.br/wp-content/uploads/2019/12/colheita-de-alimentos-orgânicos.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
