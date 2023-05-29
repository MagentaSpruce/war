const Section10 = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[230vh]
        xs:h-[220vh]
        sm:text-lg sm:h-[195vh]
        md:text-2xl md:h-[190vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="div">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto">
          When Tristan begin talking to Ashley she was working as a kindgarden
          teacher at Oonrak International School. She was forced to be let go
          after another teacher there named Tamarin complained about Ashley's
          lack of a four year degree.{' '}
        </h3>
        <h3 className="text-center p-2 font-economica">
          They had both been in competition for the same promotion.
        </h3>
        <img
          src="./images/kids.jpg"
          alt="Ashley teaching kindergarden at Oonrak International School, Koh Samui, Thailand"
          srcset=""
          className="xxs:w-[90vw]  xxs:mx-auto border-2
  lg:w-[23vw]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          After Ashley was laid off she tried working many odd jobs around the
          island as a nanny, tutor, and even as an aerial yoga instructor.
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          However none of these positions afforded Ashley a work permit and
          without a work permit she would eventually have to return back to
          South Africa.
        </h3>
      </div>

      <div className="md:-mt-3">
        <h3 className="text-center p-2 font-economica md:w-[90%] md:mx-auto md:text-base lg:pt-6">
          One day at Tristan's house on Coral Hill Tristan proposed an idea that
          could solve both of their problems. Tristan wanted to go to medical
          school and Ashley needed a work permit and so Hot in the Biscuit was
          born.
        </h3>
        <a
          href="https://www.hotinthebiscuit.com"
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/HITB.jpeg"
            alt="Logo for Hot in the Biscuit that Ashley created"
            className="xxs:w-[90vw] border-2  xxs:mx-auto 
   lg:w-[25vw]"
          />
        </a>

        <h3 className="text-center p-2 font-economica xl:text-base md:w-[90%] md:mx-auto">
          With medical school lasting for six years Tristan knew that he needed
          a long-term revenue source. A new location would be needed to import
          packages into after he left since Panyadee would no longer be an
          option. Tristan also knew by then that he could trust Ashley to run
          the operation.{' '}
        </h3>

        <h3 className="text-center p-2 font-economica xl:text-base md:w-[90%] md:mx-auto">
          Hot in the Biscuit was set up from the beginning with the intention of
          being a front that would eventually become legitimate once finances
          allowed. After that it would only be used for personal orders so that
          Tristan, Ashley and their friends would always have access to party
          supplies.
        </h3>
      </div>
    </div>
  );
};

export default Section10;
