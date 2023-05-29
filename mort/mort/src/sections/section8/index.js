const Section8 = () => {
  return (
    <div
      className=" bg-slate-800 text-white
        xxs:h-[130vh]
        xs:h-[115vh]
        sm:text-lg sm:h-[120vh]
        md:text-2xl 
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h1
          className="text-center p-2 font-economica
xl:w-[80%] xl:mx-auto md:w-[80%] md:mx-auto"
        >
          By 2018 Tristan was a locally known dealer who worked as a teacher
          during the day and provided for parties around Koh Samui and Koh
          Phangan by night, weekends and holidays.
        </h1>
        <img
          src="./images/partyAtLukes.jpg"
          alt="Tristan supplying a villa party in Chaweng Noi"
          srcset=""
          className="xxs:w-[90vw] md:w-[50vw] xxs:mx-auto border-2
  lg:h-[80vh]"
        />
      </div>
      <div className="">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          When Tristan first met Ashley at a Halloween party in 2018 she was
          only 19 years old. He was 32.
        </h3>
        <img
          src="./images/halloween.jpg"
          alt="The Halloween party where Tristan met Ashley"
          className="xxs:w-[90vw]   xxs:mx-auto border-2
   lg:w-[40vw]
   "
        />
        <h3 className="text-center p-2 md:w-[80%] md:mx-auto ">
          Join the YouTube channel in support of Ashley Oosthuizen below: <br />
          <br />
          <button className="hover:scale-110 transition-all active:scale-100 ">
            <a
              href="https://www.youtube.com/@TristanNettlesFreeAshley"
              className="text-center text-3xl bg-red-600 shadow-lg shadow-red-500 px-2 py-1 rounded-lg text-white  mb-4"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel
            </a>
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Section8;
