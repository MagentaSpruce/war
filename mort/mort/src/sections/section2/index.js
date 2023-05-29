const Section2 = () => {
  return (
    <div
      className="bg-slate-900 text-white
        xxs:h-[158vh] 
        xs:h-[138vh]
        sm:text-lg sm:h-[155vh]
        md:text-2xl md:h-[145vh]
        lg:p-4 lg:flex lg:text-xl lg:h-[100vh]
        "
    >
      <div className="lg: ">
        <h1 className="text-center  p-2 font-economica">
          Tristan Nettles was an international dark web drug dealer, business
          owner and high school science teacher at Panyadee International School
          on Koh Samui in Thailand from 2017 until the summer of 2020.
        </h1>
        <img
          src="./images/shirtless.jpg"
          alt="Tristan Nettes"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2
  lg:h-[68vh]"
        />
      </div>
      <div className="lg:px-6 md:-mt-8 lg:pt-10">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Tristan has freely admitted to using BTC and the dark web to import
          party drugs to Panyadee International School's main office mailroom
          starting in 2017.
        </h3>
        <img
          src="./images/darkwebScreenshot.jpg"
          alt="Cocaine Being Ordered from Dream Market"
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
   lg:w-[36vw]
   "
        />
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Hundreds of packages were sent into Panyadee International School
          before Ashley Oosthuizen ever lived in Thailand. The local police
          department continues working hard to cover this up.
        </h3>
      </div>
    </div>
  );
};

export default Section2;
