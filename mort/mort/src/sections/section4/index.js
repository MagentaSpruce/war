const Section4 = () => {
  return (
    <div
      className="bg-slate-700 text-white
        xxs:h-[130vh]
        xs:h-[130vh]
        sm:text-lg sm:h-[135vh]
        md:text-2xl md:h-[130vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]
        "
    >
      <div className="">
        <h1 className="text-center  p-2 font-economica md:w-[80%] md:mx-auto">
          Tristan wasn't alone however, he had help. A Russian math teacher at
          his school named Sergei Rumyantsev worked with him from the very
          beginning.
        </h1>
        <img
          src="./images/sergei.jpg"
          alt="Sergei Rumyantsev, Current Math Teacher at Panyadee International School, Koh Samui, Thailand"
          srcset=""
          className="xxs:h-[40vh]  xxs:mx-auto border-2
  lg:h-[75vh] "
        />
      </div>
      <div className="md:-mt-4 lg:mt-0">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Sergei would receive hundreds of thousands of baht per week that he
          would then use to buy BTC so that Tristan could continue importing
          party drugs to the school.
        </h3>
        <img
          src="./images/Drugs2.jpg"
          alt="Sergey Helping Tristan Purchase Drugs with Bitcoin"
          className="xxs:h-[40vh]   xxs:mx-auto border-2
   lg:h-[65vh]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          They met and did deals weekly. There are hundreds more messages
          between them showing more of the same.
        </h3>
      </div>
    </div>
  );
};

export default Section4;
