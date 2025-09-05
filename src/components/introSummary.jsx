export default function IntroSummary() {
  return (
    <section
      id="about"
      className="relative p-6 md:px-10 w-full min-h-[40vh] grid place-items-center overflow-hidden"
    >
      {/* background mask effect */}
      <div
        className="absolute inset-0 bg-[#0D0D0D] 
        [mask-image:radial-gradient(circle_at_left,black_80%,transparent_500%)] 
        [mask-repeat:no-repeat] [mask-size:cover]"
      ></div>

      {/* Content */}
      <p
        className="
          relative text-center text-white font-inter
          text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
          leading-relaxed
          w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%]
        "
      >
        HI, I’m Josh King, I help Web3 founders in gaming, DeFi, blockchain,
        and RWA turn followers into active users using copy that builds trust
        and drives action. My words don’t just convert — they save your budget and boost your ROI.
        Whether it's email campaigns, ad copy, or landing pages, I craft
        high-converting messages your audience can’t scroll past.
      </p>
    </section>
  );
}
