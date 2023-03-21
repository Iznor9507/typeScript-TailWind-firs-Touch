interface ErrorMEssage {
  error: string;
}

function Errors({ error }: ErrorMEssage) {
  return <h1 className="text-4xl text-red-600">{error}</h1>;
}

export default Errors;
