const Home = () => {
  return (
    <div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl ">
              <img src={'cake.svg'} width={85} height={85} />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Birthday Wisher
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            Send magical birthday wishes to your loved ones — just with a link.
          </p>

          <div>
            <button variant="hero" size="xl" className="group">
              Create a Birthday Wish
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Free to use
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              No sign-up required
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
