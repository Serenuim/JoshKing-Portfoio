import Images from "./images";

export default function Result() {
  return (
    <section
      id="projects"
      className="px-6 py-16 md:py-20 text-white bg-[#0D0D0D] grid place-items-center"
    >
      {/* Section heading */}
      <h1 className="relative capitalize font-grotesk text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center underline decoration-red-500 underline-offset-8">
        proven result
      </h1>

      {/* Projects grid */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
        gap-8 sm:gap-10 lg:gap-12
        mt-12 sm:mt-16 md:mt-20
        max-w-6xl
        mx-auto
        place-items-center
        "

      >
        <Images
          img={"img-l-1.png"}
          para={
            "Drove 60% more visibility and signups for a DeFi project with just one promo content"
          }
        />
        <Images
          img={"img-r-2.png"}
          para={
            "Took a GameFi project from 7k to 1500k monthly engagement"
          }
        />
        <Images
          img={"img-b-1.png"}
          para={"Drove a 35%+ visibility jump through thread"}
          sub={"Check Thread"}
        />
      </div>
    </section>
  );
}
