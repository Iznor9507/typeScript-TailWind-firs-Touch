function CreateProduct() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" />
        <button
          type="submit"
          className="py-2 px-4 border bg-yellow-400 hover:text-white"
        >
          Добавить
        </button>
      </form>
    </>
  );
}

export default CreateProduct;
