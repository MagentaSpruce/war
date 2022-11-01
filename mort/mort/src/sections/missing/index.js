const Missing = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[145vh]
        xs:h-[145vh]
        sm:h-[145vh] sm:text-lg
        md:text-2xl md:h-[170vh]
        lg:flex lg:p-4 lg:h-[100vh]
        "
    >
      <div className="">
        <h1
          className="text-yellow-500 text-center text-3xl p-2

"
        >
          Ashley Oosthuizen has not been seen in over one year...
        </h1>
        <img
          src="./images/Ashley_Oosthuizen.jpg"
          alt="Ashley Oosthuizen"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
  lg:w-[80vw]
  xl:w-[70vw]
  2xl:w-[57vw]"
        />
      </div>
      <div className="">
        <h3 className="text-center p-2 font-economica">
          Ashley was arrested and charged in Koh Samui, Thailand for a crime
          that this man and his friends committed.
        </h3>
        <img
          src="./images/shirtless.jpg"
          alt="Tristan Nettles"
          className="xxs:w-[90vw]  xxs:mx-auto  border-2 
   lg:w-[43vw]
   xl:w-[42vw]"
        />
      </div>
    </div>
  );
};

export default Missing;
