import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormTextField from "../components/Fields/form-text-field";
import { Button, InputGroup } from "react-bootstrap";
import FormSelectField from "../components/Fields/form-select-field";
import { EmptyCart } from "../components/EmptyCart";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  nameCard: yup.string().required(),
  numberCard: yup.number().required(),
  exDateCard: yup.date().required(),
  cvvCard: yup.number().required(),
});

const Checkout = () => {
  const [submited, SetSubimited] = useState(false);
  const [checkoutData, SetCheckoutData] = useState({});

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const state = useSelector((state) => state.addItem);

  var total = 0;
  useEffect(() => {
    setIsCartEmpty(state.length <= 0 ? true : false);
  }, []);

  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">R${item.price.toFixed(2)}/Kg</span>
      </li>
    );
  };

  const printCheckout = (checkoutData) => {
    SetCheckoutData(checkoutData);
  };

  return (
    <>
      <div className="col-12 text-center mt-4 text-purple">
        <h1>
          <span className="fa fa-shopping-bag me-1 px-2"></span>
          Checkout
        </h1>
        <hr />
      </div>
      {!isCartEmpty ? (
        <div className="container my-5">
          {!submited ? (
            <div className="row g-5">
              {/* Lista carrinho ------------------------------------ */}
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-purple">Seu carrinho</span>
                  <span className="badge bg-primary rounded-pill">
                    {state.length}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  {state.map(itemList)}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (R)</span>
                    <strong>R${total.toFixed(2)}</strong>
                  </li>
                </ul>

                <form className="p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="código promocional"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Resgate
                    </button>
                  </div>
                </form>
              </div>
              {/* ------------------------------------ */}
              <div className="col-md-7 col-lg-8">
                <Formik
                  validationSchema={schema}
                  onSubmit={(e) => {
                    printCheckout(e);
                    SetSubimited(true);
                  }}
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    address: "",
                    zip: "",
                    city: undefined,
                    country: undefined,
                    state: undefined,
                    nameCard: "",
                    numberCard: undefined,
                    exDateCard: undefined,
                    cvvCard: undefined,
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    isValid,
                    isSubmitting,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <h4 className="mb-3">Endereço de envio</h4>

                      <div className="row g-3">
                        <div className="col-sm-6">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="firstName"
                            label="Primeiro Nome"
                            type="text"
                            name="firstName"
                          />
                        </div>

                        <div className="col-sm-6">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="lastName"
                            label="Último Nome"
                            type="text"
                            name="lastName"
                          />
                        </div>

                        <div className="col-12">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="username"
                            label="Nome de úsuario"
                            type="text"
                            name="username"
                          />
                        </div>

                        <div className="col-12">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="username"
                            label="Email"
                            type="email"
                            name="email"
                          />
                        </div>

                        <div className="col-6">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="address"
                            label="Endereço"
                            type="address"
                            name="address"
                          />
                        </div>
                        <div className="col-6">
                          <FormSelectField
                            sm="4"
                            controlId="city"
                            label="Cidade"
                            type="text"
                            name="city"
                          >
                            <option value="">Escolha...</option>
                            <option>Belo Horionte</option>
                            <option>Salvador</option>
                            <option>São Paulo</option>
                          </FormSelectField>
                        </div>

                        <div className="col-md-5">
                          <FormSelectField
                            sm="4"
                            controlId="country"
                            label="País"
                            type="text"
                            name="country"
                          >
                            <option value="">Escolha...</option>
                            <option>Brasil</option>
                            <option>Argentina</option>
                            <option>Paraguai</option>
                          </FormSelectField>
                        </div>

                        <div className="col-md-4">
                          <FormSelectField
                            sm="4"
                            controlId="state"
                            label="Estado"
                            type="text"
                            name="state"
                          >
                            <option value="">Escolha...</option>
                            <option>MG</option>
                            <option>BA</option>
                            <option>SP</option>
                          </FormSelectField>
                        </div>

                        <div className="col-md-3">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="zip"
                            label="CEP"
                            type="zip"
                            name="zip"
                          />
                        </div>
                      </div>
                      <hr className="my-4" />

                      <h4 className="mb-3">Pagamento</h4>

                      <div className="row gy-3">
                        <div className="col-md-6">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="nameCard"
                            label="Nome do cartão"
                            type="text"
                            name="nameCard"
                          />
                          <small className="text-muted">
                            Nome completo conforme exibido no cartão
                          </small>
                        </div>

                        <div className="col-md-6">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="numberCard"
                            label="Número do Cartão"
                            type="number"
                            name="numberCard"
                          />
                        </div>

                        <div className="col-md-3">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="exDateCard"
                            label="Data de expiração"
                            type="date"
                            name="exDateCard"
                          />
                        </div>

                        <div className="col-md-3">
                          <FormTextField
                            className="form-control"
                            sm="4"
                            controlId="cvvCard"
                            label="CVV"
                            type="number"
                            name="cvvCard"
                          />
                          <div className="invalid-feedback">
                            CVV é obrigatório
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <Button
                        disabled={!isValid || isSubmitting}
                        variant="success"
                        as="input"
                        size="lg"
                        type="submit"
                        value="Checkout (impressão recibo)"
                      />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <>
              <div className="Post" ref={ref}>
                <ul className="mt-3">
                  <h2>Recibo de Compra</h2>
                  <hr />
                  <h4>Dados da entrega</h4>
                  <p>Usuário: {checkoutData.username}</p>
                  <p>
                    Nome: {checkoutData.firstName} {checkoutData.lastName}
                  </p>
                  <p>Email: {checkoutData.email}</p>
                  <p>
                    Endereço: {checkoutData.address}, {checkoutData.city} ,
                    {checkoutData.state} , {checkoutData.country},{" "}
                    {checkoutData.zip}
                  </p>
                  <h4>Lista de Compra</h4>
                  <div style={{ width: "60%" }}>
                    <ul className="list-group">
                      {state.map(itemList)}
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total (R)</span>
                        <strong>R${total.toFixed(2)}</strong>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div className="text-center mt-5">
                <Pdf targetRef={ref} filename="recibo.pdf">
                  {({ toPdf }) => (
                    <Button className="mx-2" onClick={toPdf}>
                      Baixar PDF
                    </Button>
                  )}
                </Pdf>
                <Button
                  onClick={() => {
                    SetSubimited(false);
                  }}
                >
                  Clique para voltar
                </Button>
              </div>
            </>
          )}
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Checkout;
