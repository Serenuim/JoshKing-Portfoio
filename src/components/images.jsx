export default function Images({ img, para, sub }) {
  return (
    <section className="text-white flex flex-col items-center text-center">
      <img
        src={img}
        alt={img}
        className="w-[70%] max-w-xs h-auto cursor-pointer mx-auto"
      />
      <p className="font-inter text-sm w-[80%] mt-3">{para}</p>
      {sub && (
        <p
          onClick={() =>
            window.open(
              "https://x.com/JoshKingX_/status/1937773811664892243",
              "_blank"
            )
          }
          className="capitalize font-inter underline decoration-red-500 underline-offset-8 cursor-pointer mt-2"
        >
          {sub}
        </p>
      )}
    </section>
  );
}
