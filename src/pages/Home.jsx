const Home = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 h-screen place-items-center gap-4">
      <div className="">CSS Cake Goes here</div>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl">Birthday Wisher</h1>
        <p className="text-2xl">Send birthday wishes to your loved ones</p>
        <button>Create a Wish</button>
      </div>
    </div>
  );
};

export default Home;
