export default function Images({img,para,sub}){
    return(
         <section className="text-white">
            <img src={img} alt={img} className="w-[70%] h-50 cursor-pointer"/>
            <p className="font-inter text-sm w-[50%]">{para}</p>
            <p onClick={() => window.open("https://x.com/JoshKingX_/status/1937773811664892243", "_blank")} className="capitalize font-inter underline decoration-red-500 underline-offset-8 cursor-pointer">{sub}</p>
         </section>
    )
}