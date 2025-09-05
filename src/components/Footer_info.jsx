
export default function Footer_info({img,sub}) {
  return (
    <section className="text-white bg-[#0F0D0D] flex justify-center ">
        <div className="bg-[#0F0D0D] grid place-items-center">
            <img src={img} alt={img} className="w-20 h-20 cursor-pointer rounded-md"/>
            <p onClick={() => window.open("https://x.com/JoshKingX_", "_blank")} className="capitalize font-inter underline decoration-red-500 underline-offset-8 mt-2 cursor-pointer">{sub}  𝕏</p>
        </div>
    </section>
  )
}
