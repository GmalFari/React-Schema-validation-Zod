import Form from "./Form";

function App() {
  return (
    <div className="flex mt-20 text-center justify-center w-full">
      <div className="flext justify-center text-center w-3/4 my">
        <div className="flext justify-center">
          <h3 className=" font-bold text mb-3 text-lg ">
            Create New Account
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;