const Section17 = () => {
  return (
    <div
      className=" bg-black text-white
        xxs:h-[154vh]
        xs:h-[120vh]
        sm:text-lg sm:h-[135vh]
        md:text-2xl
        lg:text-xl lg:p-4 lg:flex lg:h-[100vh]"
    >
      <div className="">
        <h1 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          Ashley has been incarcerated since October 8, 2020 in Thai prison. She
          did not speak Thai.
        </h1>
        <img
          src="./images/love.jpg"
          alt="Ashley in Koh Samui Provencial Prison"
          srcset=""
          className="xxs:w-[90vw] xxs:mx-auto xxs:pt-2 border-2
  lg:w-[35vw]"
        />
        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          The instances of people in police custody being raped, tortured, and
          murdered on the islands in the Gulf of Thailand has been widely
          covered:
        </h3>
      </div>
      <div className="lg:w-[60%] lg:pt-16">
        <div className="p-4 border-2 w-[95vw] mx-auto flex flex-col font-thin lg:w-[50vw]">
          <a
            href="https://www.aljazeera.com/news/2021/8/31/drug-suspects-murder-ignites-calls-for-police-reform-in-thailand"
            className="mb-2 cursor-pointer"
          >
            1) Drug Suspect Filmed Being Suffocated to Death by Police - August
            2021
          </a>
          <a
            href="https://thethaiger.com/hot-news/crime/koh-samui-senior-police-officer-faces-charges-for-allegedly-raping-a-suspect"
            className="mb-2 cursor-pointer"
          >
            2) 21 Year Old Burmese Woman Raped by Senior Police Inside Koh Samui
            Police Station (
            <span className="text-yellow-400">
              the same jail Ashley was in!
            </span>
            ) - Jan 15, 2021
          </a>
          <a
            href="https://www.samuitimes.com/police-accused-of-corruption-extortion-and-kidnapping/"
            className="mb-2 cursor-pointer"
          >
            3) Thai Police Kidnap and Torture Innocent Civilians - Sept 10, 2020
          </a>
          <a
            href="https://www.reddit.com/r/ThailandTourism/comments/ly77e1/getting_away_with_crime_on_koh_tao_courtesy_of/"
            className="mb-2 cursor-pointer"
          >
            4) Koh Tao Police Help Cover Up Assaults and Murders - March, 2021
          </a>
          <a
            href="https://thethaiger.com/news/national/police-in-thailand-reward-snitch-with-drugs-gmt?fbclid=IwAR3ch1rO8q8Wjn_VJ6rSuLjt_LzjcVjwVW_KjdAFJuZzawpeHTcm4taHwQg"
            className="mb-2 cursor-pointer"
          >
            5) Thai Police Reward Snitches with Free Drugs - October, 2022
          </a>
        </div>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto">
          These few examples only touch the tip of the iceberg. Is it any wonder
          then that this 21 year old girl cooperated? They told her they knew it
          was not her. They told her they would help her if she signed.{' '}
        </h3>

        <h3 className="text-center p-2 font-economica md:w-[80%] md:mx-auto underline underline-offset-4">
          <b>Then she got handed a death sentence anyway</b>
        </h3>
      </div>
    </div>
  );
};

export default Section17;
