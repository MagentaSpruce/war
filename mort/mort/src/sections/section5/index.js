const Section5 = () => {
  return (
    <div
      className="bg-black text-white
        xxs:h-[205vh]
        xs:h-[195vh]
        sm:text-lg sm:h-[185vh]
        md:text-2xl md:h-[170vh]
        lg:h-[100vh] lg:flex lg:text-xl"
    >
      <div className="lg:pt-4 xl:w-[90%]">
        <h1 className="text-center  p-2 font-economica md:w-[80%] md:mx-auto">
          Sergei was paid a commission for every exchange.
        </h1>
        <img
          src="./images/sergey2.jpg"
          alt="Sergey Requesting Payment"
          srcset=""
          className="xxs:h-[40vh]  xxs:mx-auto border-2
  lg:h-[60vh]"
        />
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          He was then given cash during school hours. Transfers were usually
          made during lunch and all transactions can be traced back to his
          bitkub account.
        </h3>
      </div>

      <div className="lg:pt-8">
        <img
          src="./images/drugsmin.jpg"
          alt="Part of a dark web order from NamasteLSD"
          className="xxs:h-[40vh]   xxs:mx-auto 
   lg:h-[30vh]"
        />

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          The IP address used for the blockchain transactions shows TX's
          happening both from his home computer and school office computer. The
          same BTC was then used to import party drugs into the school as shown
          below.
        </h3>
        <img
          src="./images/sergey3.jpg"
          alt="BTC confirmation TX details between Tristan and Sergei"
          className="xxs:h-[40vh]   xxs:mx-auto 
   lg:h-[25vh]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          All of the transactions between Tristan and Sergei going back to 2017
          are still publicly available on the Bitcoin blockchain providing
          undeniable evidence of a partnership between the pair. One which
          continues to be knowingly covered up by Panyadee Intl School and the
          Bophut Police Dept.
        </h3>
      </div>
    </div>
  );
};

export default Section5;
