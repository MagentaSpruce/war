const Missing = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[190vh]
        xs:h-[165vh]
        sm:h-[165vh] sm:text-lg
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
          She was arrested by the Bophut Police Department after signing her
          name on a package containing MDMA.
        </h3>
        <img
          src="./images/ashleyDrugsHITB1.jpg"
          alt="Police documents showing photos of the MDMA Ashley was charged with receiving."
          className="xxs:w-[90vw]  xxs:mx-auto  border-2 
   lg:w-[20vw]
   xl:w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Missing;
