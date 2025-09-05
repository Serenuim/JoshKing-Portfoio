export default function Cards({ title, text, side = "l" }) {
  return (
    <section
      className={`
        relative mt-6 cursor-pointer shadow-xl px-6 py-4 bg-[#1A1A1A]
        text-white rounded-lg transition
        w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]
        ${side === "l" ? "border-l-2 border-red-600 ml-0 md:ml-16 lg:ml-32 xl:ml-60 mr-auto" : ""}
        ${side === "r" ? "border-r-2 border-red-600 mr-0 md:mr-16 lg:mr-32 xl:mr-60 ml-auto" : ""}
      `}
    >
      {/* hover overlay */}
      <div className="absolute inset-0 bg-red-600 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>

      {/* content */}
      <h2 className="font-inter capitalize text-lg md:text-xl lg:text-2xl relative z-10">
        {title}
      </h2>
      <p className="font-inter text-sm md:text-base lg:text-lg relative z-10">
        {text}
      </p>
    </section>
  );
}
