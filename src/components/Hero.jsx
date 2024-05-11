import HeroImg from "./../assets/icon-scroll.svg";
function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 md:h-[60vh] md:mt-20">
      <div className="text-3xl text-center p-6 font-extrabold md:max-w-96 text-white">
        Get paid for the work you <span className="text-primary">love </span>
        to do.
      </div>
      <p className="text-grey text-center  md:max-w-96">
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you’re looking to escape the rat race or set up a side
        hustle, we’ve got you covered.
      </p>
      <img className="w-7 " src={HeroImg}></img>
    </div>
  );
}

export default Hero;
