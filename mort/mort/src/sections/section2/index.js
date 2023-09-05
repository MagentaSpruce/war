const Section2 = () => {
  return (
    <div
      className="bg-slate-900 text-white
        xxs:h-[158vh] 
        xs:h-[128vh]
        sm:text-lg sm:h-[135vh]
        md:text-2xl md:h-[145vh]
        lg:p-4 lg:flex lg:text-xl lg:h-[100vh]
        "
    >
      <div className="lg: ">
        <h1 className="text-center  p-2 font-economica">
          Tristan Nettles was a medical school student, business owner and
          former high school science teacher at Panyadee International School on
          Koh Samui in Thailand from 2017 until the summer of 2020.
        </h1>
        <img
          src="./images/Seth.jpg"
          alt="Tristan Nettes"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2
  lg:h-[63vh] max-w-[500px]"
        />
      </div>
      <div className="lg:px-6 md:-mt-8 lg:pt-10">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Tristan has freely admitted to using bitcoin and the dark web to
          import party drugs to Panyadee International School's main office
          mailroom starting in 2017.
        </h3>
        <img
          src="./images/drugsmin.jpg"
          alt="Cocaine Being Ordered from Dream Market"
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
   lg:w-[36vw]
   "
        />
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Hundreds of packages were sent into the school before Ashley
          Oosthuizen ever lived in Thailand.
        </h3>
      </div>
    </div>
  );
};

export default Section2;
