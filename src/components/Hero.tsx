import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[600px] max-w-6xl flex-col items-center justify-center gap-12 px-4 py-16 lg:flex-row"
    >
      <div className="flex-1">
        <p className="mb-4 font-medium text-pink-500">
          Build Your Perfect Development Stack
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
          Discover the Best Tools for Your{" "}
          <span className="brand-gradient-text">
            Development Journey
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Explore modern technologies, frameworks, and tools to build your
          perfect development stack.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="brand-gradient rounded-lg px-6 py-3 font-medium text-white">
            Explore Technologies
          </button>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-100">
            View Projects
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img src={bannerStack} alt="Development technology stack" className="w-full"/>
      </div>
    </section>
  );
}

export default Hero;