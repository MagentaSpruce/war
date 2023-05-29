const Section16 = () => {
  return (
    <div
      className=" bg-slate-800 text-white
        xxs:h-[188vh]
        xs:h-[160vh]
        sm:text-lg sm:h-[170vh]
        md:text-2xl md:h-[220vh]
        lg:text-xl lg:h-[100vh] lg:p-4 lg:flex"
    >
      <div className="lg:w-[60%] lg:tracking-widest xl:pt-24">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Following the setup Ashley was then taken to a government black house
          where she was interrogated without a lawyer or interpreter present.
          She was forced to sign documents that were written in Thai against her
          will under threat of rape and death. A far too common occurence for
          suspects in Thai police custody, as shown further below.
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Ashley was only 21 years old at this time. She had never been in
          trouble with the police before in her life and was now all alone in an
          unmarked location surrounded by 15 men threatening her with bodily
          harm or worse if she did not cooperate.
        </h3>
      </div>
      <div className="lg:pl-10 lg:0">
        <img
          src="./images/report1.png"
          alt="Litany of injustices listed from court submitted documents pg 1"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto xxs:pt-2 
  lg:w-[18vw]"
        />
        <img
          src="./images/report2.png"
          alt="Litany of injustices listed from court submitted documents pg 2"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto xxs:pt-2 border-2
  lg:w-[18vw]"
        />
        <img
          src="./images/report3.png"
          alt="Litany of injustices listed from court submitted documents pg 3"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto xxs:pt-2 border-2
  lg:w-[18vw]"
        />
      </div>
    </div>
  );
};

export default Section16;
