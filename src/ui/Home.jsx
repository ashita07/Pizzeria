import CreateUser from "../features/User/CreateUser";

function Home() {
  return (
    <div className="my-10 sm:my-16 text-center">
      <h1
        className="text-2xl text-stone-700 font-semibold  mb-8 "
      >
        The best pizza.
        <br />
        <span className="text-yellow-500">
          
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
