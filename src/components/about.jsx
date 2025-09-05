import Cards from "./cards";

export default function About(){
    return(
        <section id="service" className="relative bg-[#0D0D0D] text-white px-5 py-5">
            {/* mask div */}

            <div className="absolute inset-0 bg-[#0D0D0D] 
            [mask-image:radial-gradient(circle_at_right,black_80%,transparent_100%)] 
            [mask-repeat:no-repeat] [mask-size:cover]">
            </div>

            <h1 className="relative capitalize  font-grotesk text-4xl text-center underline decoration-red-500  underline-offset-8">what i do</h1>
            <Cards title={"Email Marketing"} 
            text={`I craft high converting email campaigns 
            that consistently land in the inbox and 
            drive measurable engagement.`}/>
            <Cards title={"Ghost Writing"}
              text={`Need content that sounds unmistakably 
                    like you, I specialize in ghostwriting that captures your unique voice 
                    so perfectly, your audience will never know the difference.
                    Trusted by CEOs and founders.`}
                side="r"/>
            <Cards title={" Landing Page Copy"}
                  text={`Is your landing page underperforming? You’re
                         losing leads (and revenue) every day. Let’s fix that.
                         Helped 20+ brands boost sales by up to 30%.`}/>
            <Cards title={"Ad Copy"}
                   text={`I’ve decoded the exact ad strategies brands like 
                         Solfare and Jupiter use to 3X their conversions and 
                         I can tailor same tactics to help triple yours.`}
                         side="r"/>
        </section>
    )
}