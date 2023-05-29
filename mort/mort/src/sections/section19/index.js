const Section19 = () => {
  return (
    <div
      className="bg-slate-800 text-white
        xxs:h-[220vh] 
        xs:h-[205vh]
        sm:text-lg sm:h-[210vh]
        md:text-2xl
        lg:text-xl lg:p-4 lg:h-[100vh] lg:flex
        "
    >
      <div className="">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Neither of the lawyer's bothered to read her arrest report which
          clearly stated that bail was not recommended at that time.{' '}
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Due to their gross incompetance, Ashley's bail was denied and the
          chance for any future bail ruined after Mike Greene's Koh Samui
          associate Teeranan Chuaichai and the other lawyer K Aot tried
          repeatedly to ram it through anyway.{' '}
        </h3>

        <img
          src="./images/baildeny.png"
          alt="Copy of arrest report clearly recommending against bail"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto xxs:pt-2 
  lg:w-[43vw]"
        />
      </div>
      <div className="">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Tristan had left buried on his property in Koh Samui $60,000 USD in
          cash that he asked Sergey to go and dig up to use for Ashley's
          defense.
        </h3>

        <img
          src="./images/TEXT.jpg"
          alt="Sergei after digging up Tristan's buried funds and taking possession"
          className="xxs:h-[70vh] xxs:mb-2 md:mb-0  xxs:mx-auto border-2
   lg:h-[30vh]
   xl:h-[38vh]"
        />
        <img
          src="./images/sergeiPack.jpg"
          alt="Sergei providing accounting of the 2 million baht he dug up from Tristan's property"
          className="xxs:h-[60vh]   xxs:mx-auto border-2
   lg:h-[30vh]
   xl:h-[38vh]"
        />
      </div>
    </div>
  );
};

export default Section19;
