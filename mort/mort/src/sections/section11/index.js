const Section11 = () => {
  return (
    <div
      className=" bg-slate-900 text-white
        xxs:h-[315vh]
        xs:h-[298vh]
        sm:text-lg sm:h-[310vh]
        md:text-2xl 
        lg:text-lg lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h1 className="text-center p-2 font-economica md:w-[95%] md:mx-auto">
          Ashley was Tristan's lover, best friend and protoge for over two
          years. He taught her everything he knew but sadly she was caught off
          guard.
        </h1>
        <img
          src="./images/extraEvidence.jpg"
          alt="Ashley pointing at previous packages which had been sent to HITB and were not disposed of."
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2
  lg:w-[19vw]"
        />
      </div>

      <div className="xl:pt-2">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          In addition to her signature, previous package decoys, like the one
          containing the 250 g MDMA, were found in the back of HITB. Ashley's
          cell phone also contained incriminating texts between her and Tristan.
        </h3>

        <div className="lg:flex lg:pl-[12%] ">
          <img
            src="./images/tele1.jpg"
            alt="Screenshot 1 from police showing Telegram secret chat between Tristan and Ashley"
            className="xxs:h-[80vh] xxs:mb-2 md:mb-0  xxs:mx-auto border-2
   lg:h-[75vh] lg:mx-1"
          />
          <img
            src="./images/tele3.jpg"
            alt="Screenshot 2 from police showing Telegram secret chat between Tristan and Ashley"
            className="xxs:h-[80vh]   xxs:mx-auto border-2
   lg:h-[75vh] lg:mx-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Section11;
