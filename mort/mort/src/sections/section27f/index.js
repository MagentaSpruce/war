const Section27f = () => {
  return (
    <div
      className="bg-slate-700 text-white
        xxs:h-[175vh] 
        xs:h-[139vh]
        sm:text-lg sm:h-[130vh]
        md:text-2xl md:h-[100vh]
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]
        "
    >
      <div className="lg:w-[60%] xl:pt-0">
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          After more than 2,000 emails sent in country, Tristan finally got a
          major news outlet to agree to run a story on Ashley.{' '}
        </h3>
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          After a particularly violent mission in which multiple men were lost,
          including an American, the reporter named Seth Harp from Rollingstone
          magazine finally became interested in Tristan's repeated messages
          about Ashley.
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Tristan sent Seth Harp everything about Miss Oosthuizen. Yet when the
          piece was finished, Ashley had barely been mentioned at all. The
          entire focus was on the second American to be killed in action in
          Ukraine instead.
        </h3>
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          <span className="text-red-400">
            "It's too bad she's not American." - <b>Seth Harp, Rollingstone</b>
          </span>
        </h3>
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto mb-8">
          <a
            href="https://www.rollingstone.com/politics/politics-news/stephen-zabielski-russia-ukraine-conflict-1371094/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Read: Rollingstone Story
          </a>
        </h3>
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          {' '}
          Without the medias attention, know one ever heard about Tristan's
          ongoing war for Ashley. After seven months in country and losing all
          but two guys from the starting thirteen he left.{' '}
          {/* <b>There is no rest when you sleep with a hook in you.</b> */}
        </h3>
      </div>

      <div className="">
        <img
          src="./images/zeb2.jpg"
          alt="Stephen 'Zeb' Zabielski after having his body recovered outside the Russian held village of Dorashanka"
          className="xxs:w-[70vw]   xxs:mx-auto 
          lg:w-[35vw]"
        />
      </div>
    </div>
  );
};

export default Section27f;
