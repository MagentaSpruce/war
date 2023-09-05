const Missing = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[180vh]
        xs:h-[105vh]
        sm:h-[105vh] sm:text-lg
        md:text-2xl md:h-[170vh]
        lg:flex lg:p-4 lg:h-[100vh]
        "
    >
      <div className="">
        <h1
          className="text-yellow-500 text-center text-2xl p-2

"
        >
          Ashley Oosthuizen is nearly four years into a life sentence in Thai
          prison.
        </h1>
        <img
          src="./images/Ashley_Oosthuizen.jpg"
          alt="Ashley Oosthuizen"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
  lg:w-[80vw]
  xl:w-[40vw]
  2xl:w-[50vw]"
        />
      </div>
      <div className="">
        <h3 className="text-center p-2 font-economica">
          She was arrested on the island of Koh Samui after being set up to take
          the fall for the man she loved.
        </h3>
        <img
          src="./images/ashnme.jpg"
          alt="Police documents showing photos of the MDMA Ashley was charged with receiving."
          className="xxs:w-[90vw]  xxs:mx-auto  border-2 
   lg:w-[40vw]
   xl:w-[50vw]"
        />
      </div>
    </div>
  );
};

export default Missing;
