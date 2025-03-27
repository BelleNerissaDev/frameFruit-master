import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function PDF(props) {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props}</h1>
      </div>
      <Pdf targetRef={ref} filename="recibo.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Baixar PDF</button>}
      </Pdf>
    </>
  );
}
export default PDF;
