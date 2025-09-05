import {motion} from "framer-motion"

const Intro = () => {
  
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  return (
    <section className="relative w-screen h-[80vh] bg-[#0D0D0D] overflow-hidden">
        {/* circular faded background div */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-red-500 opacity-30 rounded-full blur-[150px] pointer-events-none z-0"></div>
      {/* content of the intro page */}
      <div className="grid place-items-center text-center text-white font-grotesk ">
        <img
          src="/home_.jpg"
          alt="home"
          className="hover:scale-105 transition-transform duration-300 cursor-pointer rounded-sm mt-20"
          width={200}
          height={200}
        />
        <motion.h1 
        initial='hidden'
        animate='visible'
        variants={{
            visible:{
                transition:{
                    staggerChildren: 0.3
                },
            },
        }}
        className="font-medium capitalize text-[70px] leading-[100%] hover:scale-105 transition-transform duration-300 cursor-pointer">
        <motion.span
          variants={{
            hidden: { opacity: 0, x: 0, y: 0, scale: 0 },
            visible: { opacity: 1, x: 40, y: 0, scale: 1 },
          }}
          transition={{duration: 0.8, ease: "easeOut"}}
          >
          josh king
          </motion.span>
          </motion.h1>

      </div>
      {/* bouncing arrow */}
      <img src="Frame20.png" alt="Frame20.png"className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce" width={30} height={30} onClick={() => handleScroll("about")}/>

    </section>
  );
};

export default Intro;



