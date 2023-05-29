const Section16 = () => {
  return (
    <div
      className=" bg-slate-900 text-white
        xxs:h-[345vh]
        xs:h-[345vh]
        sm:text-lg sm:h-[350vh]
        md:text-2xl md:h-[130vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Ashley's lawyers all proved to be scoundrels. Micheal Greenberg out of
          Bangkok promised to fly to Koh Samui directly to get Ashley out on
          bail after he was paid 95,000 Baht. He was paid but never got on a
          plane.{' '}
        </h3>
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          He then forged a document which he claimed to be from the provencial
          court demanding a 2 million baht bail be delivered in cash, plus his
          fee.
        </h3>
        <div className="lg:flex lg:justify-center">
          <img
            src="./images/payMike.jpg"
            alt="Proof of payment between Tristan and Micheal Greenberg AKA Mike Green"
            srcset=""
            className="xxs:h-[70vh]  xxs:mx-auto xxs:pt-2 lg:mx-1
  lg:h-[60vh] "
          />
          <img
            src="./images/fakeBail.jpg"
            alt="Forged bail request"
            srcset=""
            className="xxs:h-[70vh]  xxs:mx-auto xxs:pt-2
  lg:h-[60vh] lg:mx-1"
          />
        </div>
      </div>
      <div className="">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Another lawyer by the name of K Aot promised that for 150,000 he could
          further guarentee that the bail would be granted. Each were duly paid
          their fee.
        </h3>

        <div className="lg:flex lg:justify-center">
          <img
            src="./images/kaot1.jpg"
            alt="Lies and false promises from K Aot, after already being paid 150,000 baht."
            className="xxs:h-[70vh]   xxs:mx-auto xxs:mb-2 md:mb-0 border-2
   lg:h-[75vh] lg:mx-1"
          />
          <img
            src="./images/kaot2.jpg"
            alt="Evidence presented against Ashley from K Aot."
            className="xxs:h-[70vh]   xxs:mx-auto  border-2
   lg:h-[75vh] lg:mx-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Section16;
