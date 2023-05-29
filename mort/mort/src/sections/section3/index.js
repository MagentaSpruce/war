const Section3 = () => {
  return (
    <div
      className=" bg-slate-800 text-white
        xxs:h-[190vh]
        xs:h-[180vh]
        sm:text-lg sm:h-[145vh]
        md:text-2xl md:h-[145vh]
        lg:flex lg:p-4 lg:text-xl lg:h-[100vh]"
    >
      <div className="lg:w-[100vw] ">
        <h1 className="text-center  p-2 font-economica md:w-[90%] md:mx-auto">
          By the time Tristan met Ashley at a Halloween party in 2018 many
          people knew that he was dealing, including Ashley. That was part of
          the charm.
        </h1>
        <img
          src="./images/ashley&meJimi.jpg"
          alt="Ashley and Tristan together inside of Jimi Hendrix Bar in downtown Chaweng, Koh Samui, Thailand."
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2 
  lg:w-[20vw]"
        />
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          Tristan showed Ashley an entire new world which all people should have
          access to. There is absolutely <b>nothing</b> wrong with it. They had
          a multitude of beautiful and wonderous times together and fell in love
          deeply as a result.
        </h3>
      </div>
      <div className="lg:pt-4">
        <img
          src="./images/drugsmin.jpg"
          alt="250 g of MDMA and 50 g of Ketamine being ordered from NamasteLSD"
          className="xxs:w-[90vw]  xxs:mx-auto  border-2
   lg:w-[38vw]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          When Tristan first began importing drugs to Panyadee he never knew
          Ashley. What began as small amounts became kilograms per month by the
          end.{' '}
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Tristan provided non-addictive medicines to consenting adults. Neither
          he nor Ashley were ever responsible for harming a single person.{' '}
        </h3>
      </div>
    </div>
  );
};

export default Section3;
