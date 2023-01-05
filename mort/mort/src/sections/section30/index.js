const Section30 = () => {
  return (
    <div
      className=" bg-black text-white font-economica
        xxs:h-[95vh]
        xs:h-[85vh]
        sm:text-lg sm:h-[90vh]
        md:text-2xl md:h-[60vh]
        lg:h-[90vh] "
    >
      <div className="xl:w-[90vw] xl:mx-auto">
        <h3 className="text-center p-2">
          Media/Legal/Journalist queries please contact Ashley's mother Lynette
          Blignaut @ +27 83 458 9076 or her father Andre Dupree @ +27 83 442
          9968.
        </h3>

        {/* <div className="md:flex xxs:text-center items-center">
<h3 className="text-center p-2 mr-4">Please consider donating to Ashley's legal fund here:</h3>
<a href="https://www.gofundme.com/f/help-ashley-oosthuizen?member=17832103&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=social&utm_source=whatsapp"
className="text-center text-3xl bg-yellow-500 px-2 py-1 rounded-lg text-sky-900 hover:scale-110 transition-all active:scale-100 "
>DONATE NOW</a>
</div> */}

        <div className="md:flex md:flex-col xxs:text-center items-center">
          <h3 className="text-center p-2 xl:mb-4">
            Please consider purchasing a copy of 'The Shepherd - A Bronze Age
            Tale when it is published.' 100% of all author profits will go to
            Ashley's legal fund.
          </h3>
          <a
            href="https://www.theshepherdnovel.com"
            className="text-center text-3xl bg-yellow-500 px-2 py-1 rounded-lg text-sky-900 hover:scale-110 transition-all active:scale-100 mb-4"
          >
            Book for Ashley
          </a>
        </div>

        {/* <div className="flex flex-col">
<h3 className="text-center p-2">Please consider becoming a subscribing member to Ashley Capital & DeFi, a crypto consulting and wealth management company that is being started in her name and honor. 95% of all profits made will go to her legal fund.</h3>

<a href="www.ashleydefi.com" target="_blank" className="mx-auto underline-offset-4 underline cursor-pointer xl:mb-4">Ashley Capital & DeFi</a>
</div> */}

        <h3 className="text-center p-2">
          Please, for Ashley, do at least one of these many things to help
          spread her story and garner support for her cause.{' '}
        </h3>

        <h3 className="text-center p-2">
          With the help of people like you, we can get her free.
        </h3>
      </div>
    </div>
  );
};

export default Section30;
