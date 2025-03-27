import React, { useState, useContext } from "react";
import StoreContext from "../redux/Login/Context";
import { useHistory } from "react-router-dom";

function initialState() {
  return { email: "", password: "" };
}
// Login estático
function ValidateValues({ email, password }) {
  if (email === "framefruit@ff.com" && password === "ff123456") {
    return { token: "123456" };
  }
  return { error: "Usuário ou senha inválido" };
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();


  function onChange(event) {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  }
  function onSubmit(event) {
    event.preventDefault();

    const { token } = ValidateValues(values);

    if (token) {
      setToken(token);
      return history.goBack();
    } else {
      setValues(initialState);
    }
  }
  return (
    <>
      <div>
        <div className="text-dark col-7 m-auto m-5">
          <div className="content ">
          <div className="row mt-4">
          <div className="col-12 text-center">
            <h1 className="text-purple">Login</h1>
            <hr />
          </div>
        </div>
            <div className="modal-body text-center">
              <button className="btn btn-primary mx-2 mb-4">
                <span className="fa fa-google me-2"></span> Entre com Google
              </button>
              <button className="btn btn-primary  mb-4">
                <span className="fa fa-facebook me-2"></span> Entre com Facebook
              </button>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1 "
                    className="col-form-label fs-5"
                  >
                    Endereço Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={values.email}
                    autoComplete="off"
                  />
                  <div id="emailHelp" className="form-text">
                    Não se preocupe seus dados estão seguros.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="col-form-label fs-5"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5 "
                >
                  Envie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
