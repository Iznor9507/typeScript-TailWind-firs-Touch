import React from "react";
import CreateProduct from "./components/createProduct";
import Errors from "./components/Errors";
import Loader from "./components/loader";
import Modal from "./components/modal";
import Product from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, products, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {error && <Errors error={error} />}
      {loading && <Loader />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Modal title="Create Product">
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
