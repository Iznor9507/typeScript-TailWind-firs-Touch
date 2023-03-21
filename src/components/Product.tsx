import React from "react";
import { Iproduct } from "../models";

interface ProductProps {
  product: Iproduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = React.useState(false);

  const btnClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnClassName];

  return (
    <>
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img className="w-1/4" src={product.image} alt="a" />
        <h1>{product.title}</h1>
        <p>{product.price}P</p>
        <button
          onClick={() => setDetails((details) => !details)}
          className={btnClasses.join(" ")}
        >
          {details ? "Скрыть" : "Показать"} описание
        </button>
        <div>{details && <h3>{product.description}</h3>}</div>
      </div>
    </>
  );
}

export default Product;
