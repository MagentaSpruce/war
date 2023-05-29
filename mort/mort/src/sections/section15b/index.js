const Section15b = () => {
  return (
    <div
      className="bg-black text-white
        xxs:h-[167vh] 
        xs:h-[158vh]
        sm:text-lg sm:h-[160vh]
        md:text-2xl md:h-[120vh]
        lg:text-xl lg:flex lg:p-4 lg:h-[100vh]
        "
    >
      <div className="lg:w-[60%]">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          On October 8th, 2020 in the late morning a package arrived. Ashley was
          working a busy shift when a police sent package man approached and
          ordered her to sign for a package. With guest behind her waiting
          Ashley unfortunately signed as directed despite the delivery man
          knowing that she was not a man named Dave. Ashley then placed the
          package on the ground, unopened, and went back to work as before.{' '}
        </h3>

        <h3 className="text-center p-2 font-economica">
          Within ten minutes the police arrived.
        </h3>

        <img
          src="./images/policeTest.jpg"
          alt="From police file, showing Ashley being confronted with the package of MDMA's contents."
          className="xxs:h-[70vh] xxs:mb-2 md:mb-0  xxs:mx-auto border-2
   lg:h-[50vh] "
        />
      </div>
      <div className="lg:pt-14 lg:ml-10">
        <img
          src="./images/Ashley2.jpg"
          alt="Ashley being confronted two."
          className="xxs:h-[50vh]   xxs:mx-auto border-2
   lg:h-[80vh] "
        />
      </div>
    </div>
  );
};

export default Section15b;
