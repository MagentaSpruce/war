const Section32 = () => {
  return (
    <div
      className=" bg-slate-900 text-white font-economica
        xxs:h-[140vh]
        xs:h-[120vh]
        sm:text-lg sm:h-[145vh]
        md:text-2xl md:h-[125vh]
        lg:text-lg lg:p-4 lg:h-[105vh]"
    >
      <h3 className="text-center p-2 max-w-[90vw] mx-auto">
        Join our fight today! Ashley Oosthuizen is only 24 years old. Right now
        as you read these words she languishes in a Thai prison cell miserable
        and alone with more than three decades left on her current sentence. She
        has hardly been seen by anyone for over three years. It is in no one's
        best interest that she continues to suffer through such wretched
        circumstances like this.
      </h3>

      <h3 className="text-center p-2">
        Please join in with our growing army right now as we fight to{' '}
        <strong>
          free Ashley Oosthuizen from her life sentence in Thai prison!
        </strong>
      </h3>
      <img
        src="./images/Ashley5.jpg"
        alt="Ashley Oosthuizen sitting with her friends on a beach in happiness"
        srcset=""
        className="xxs:w-[95vw]  xxs:mx-auto xxs:pt-2 lg:w-[27vw]"
      />

      <h3 className="text-center p-2 lg:pt-10">
        <br />
        <br />
        #FreeAshley
        {/* <a
          className="underline underline-offset-4"
          href="https://www.bendingbars.org/"
        >
          {' '}
          Bending the Bars
        </a>
        , under the control of Ashley's lawyer, Lizelle Martin. Please donate
        now. */}
      </h3>
      <div className="flex justify-around">
        {/* <a
          href="https://www.gofundme.com/f/help-ashley-oosthuizen?member=17832103&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=social&utm_source=whatsapp"
          className="text-center text-3xl bg-yellow-500 px-2 py-1 rounded-lg text-sky-900 hover:scale-110 transition-all active:scale-100 xxs:mt-5 xs:mt-14
lg:mt-6"
        >
          DONATE NOW
        </a> */}
      </div>

      {/* <h3  className="text-center p-2 lg:pt-10">If you cannot use GoFundMe to make a donation, please consider sending an Ethereum donation to this Ethereum address: <span className="text-yellow-500
xxs:text-sm md:text-base
 ">0x7bDE2b0B4499c7206fB2A3AB437DF250203281ce</span></h3> */}

      <h1
        className="text-center text-5xl text-yellow-500 xxs:pt-5 xs:pt-14
lg:pt-1"
      >
        FREE ASHLEY!
      </h1>
    </div>
  );
};

export default Section32;
