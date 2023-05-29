const Section21 = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[225vh]
        xs:h-[219vh]
        sm:text-lg sm:h-[225vh]
        md:text-2xl md:h-[140vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="xl:pt-10 xl:w-[80%] xl:mx-auto">
        <img
          src="./images/liam2.jpg"
          alt="CEO of Panyadee Liam Capone being given evidence of Sergeys involvement in the drug ring"
          srcset=""
          className="xxs:h-[70vh]  xxs:mx-auto xxs:pt-2 
  lg:h-[55vh]"
        />

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Everything was going according to Liam's wishes until the unexpected
          news of Sergei's involvement became known.
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Liam however decided to cover for him because,{' '}
          <span className="text-sky-500">"He is terrified." </span>
          Meanwhile Ashley's nightmare was ignored entirely.{' '}
        </h3>
      </div>

      <div className="xl:w-[80%] xl:mx-auto xl:pt-8">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Panyadee, with the help of Mr. Big and the Bophut Police continue even
          now to keep this underwraps so that the community does not know the
          truth - that millions of baht worth of party drugs were imported into
          the school between 2017-2020 by two teachers of high-standing.
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Reputation is everything for a private school which was already
          hemmoraging money due to COVID. For all these reasons and more Sergey
          was protected while Ashley got hung out to dry.
        </h3>

        <img
          src="./images/giles.jpg"
          alt="Headmast of Panyadee Giles Larkman being given evidence of Sergeys involvement in the drug ring"
          className="xxs:h-[70vh]   xxs:mx-auto 
   lg:h-[45vh]"
        />
      </div>
    </div>
  );
};

export default Section21;
