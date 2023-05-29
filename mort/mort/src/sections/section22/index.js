const Section22 = () => {
  return (
    <div
      className=" bg-slate-900 text-white
        xxs:h-[170vh]
        xs:h-[173vh]
        sm:text-lg sm:h-[180vh]
        md:text-2xl md:h-[115vh]
        lg:text-xl lg:flex lg:p-4 lg:h-[100vh]"
    >
      <div
        className="lg:w-[50%]
xl:pt-5"
      >
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          The Koh Samui Police department was contacted and provided evidence as
          well. The very same police department that was found to be raping
          prisoners on film in the same jail as Ashley was held.
        </h3>

        <img
          src="./images/police1.jpg"
          alt="A Koh Samui Police Officer agreeing to accept evidence that he then ignores"
          srcset=""
          className="xxs:h-[70vh]  xxs:mx-auto xxs:pt-2
  lg:h-[65vh]"
        />
      </div>

      <div className="lg:pl-10 lg:pt-4">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          The evidence was covered up and ignored.
        </h3>

        <img
          src="./images/police2.jpg"
          alt="The Koh Samui Police Department being notified of the drug importation ring that was run out of Panyadee with Sergey still working there"
          className="xxs:h-[70vh]   xxs:mx-auto
   lg:h-[80vh] "
        />
      </div>
    </div>
  );
};

export default Section22;
