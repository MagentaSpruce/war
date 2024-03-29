const Section7 = () => {
  return (
    <div
      className="bg-slate-900 text-white
        xxs:h-[160vh] 
        xs:h-[140vh]
        sm:text-lg sm:h-[155vh]
        md:text-2xl md:h-[190vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h1 className="text-center  p-2 font-economica md:w-[80%] md:mx-auto">
          Sergey handled the bitcoin for cash, Tristan handled the bitcoin for
          drugs. This went on for almost three years.
        </h1>
        <img
          src="./images/xtc.jpg"
          alt="Ordering 500 XTC pills and 100 grams of S-Ketamine"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2
  lg:w-[32vw]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto xxs:mb-10 md:mb-0">
          Thai weed, Canadian chronic, Dutch MDMA crystals & XTC pills, S-Type
          ketamine, LSD from the UK, 2-CB, Cocaine from Bolivia - Tristan
          supplied it all. On the Darkweb he was known as Clams88.
        </h3>
      </div>
      <div className="lg:pt-14 ">
        <img
          src="./images/comp.jpg"
          alt="Laptop used for Dark Web Purchases - over $200,000 USD in purchases"
          className="xxs:w-[90vw] rotate-90  xxs:mx-auto border-2 xxs:mb-10
   lg:w-[25vw]"
        />
        <h3
          className="text-center p-2 font-economica
xl:w-[80%] xl:mx-auto md:w-[80%] md:mx-auto"
        >
          This is the laptop that he used to purchase all of his drugs from. He
          used many darkweb markets including Dream, Empire, NamasteLSD,
          Cannazone, WhiteHouse and DeepBlueSea to name only some that he has
          accounts with under the moniker Clams88 or Rutherford21.
        </h3>
      </div>
    </div>
  );
};

export default Section7;
