export const EmptyCart = () => {
  return (
    <div className="px-4 my-3 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3 className="col-md-4 pt-5">Seu carrinho está vazio.</h3>
          <img
            className="col-md-8"
            src="/assets/images/emptycart.png"
            alt="carrinho vazio"
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
