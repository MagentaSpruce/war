const Section9 = () => {
  return (
    <div
      className=" bg-slate-700 text-white
        xxs:h-[165vh]
        xs:h-[145vh]
        sm:text-lg sm:h-[150vh]
        md:text-2xl md:h-[185vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h3
          className="text-center p-2 font-economica
xl:w-[90%] xl:mx-auto md:w-[80%] md:mx-auto"
        >
          Tristan led a double life. He never missed work or got into any
          trouble and his teaching was highly praised. His students had the
          highest IGCSE test scores in the school's history after his second
          year there.
        </h3>

        <h3 className="text-center p-2 font-economica">
          His teaching always remained a top priority and no young person was{' '}
          <b>ever</b> involved in his extracurricular affairs. He was the
          consumate professional.
        </h3>

        <img
          src="./images/lolly.jpg"
          alt="Some of Tristan's students after making lollipops in class"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
  lg:w-[42vw]"
        />
      </div>
      <div className="md:mt-2 ">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Panyadee International School gave Tristan a recommendation letter
          before he left to attend medical school in Europe due to his
          exlemparary service there.{' '}
        </h3>
        <img
          src="./images/rec-min.jpg"
          alt="Recommendation letter from Panyadee after three years service."
          className="xxs:w-[90vw]   xxs:mx-auto border-2
   lg:w-[27vw] "
        />
      </div>
    </div>
  );
};

export default Section9;
