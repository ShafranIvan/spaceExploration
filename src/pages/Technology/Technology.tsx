import { NavLink, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import technologies from "./data/technologies";

const Technology = () => {
  const { id = "launch" } = useParams();

  const {
    img: { landscapeSrc, portraitSrc, alt },
    contents: { name, description },
  } = technologies[id] || technologies["launch"];

  return (
    <PageContainer id={"03"} title="Space launch 101" className="mx-0" >
    <div className="mt-8 flex flex-col lg:ml-40 lg:flex-row-reverse">
      <picture className="w-screen lg:h-[527px] grow">
        <source srcSet={portraitSrc} media={"(min-width: 1440px)"} />
        <img alt={alt} src={landscapeSrc} className="mx-auto lg:ml-auto lg:mr-0"></img>
      </picture>
      <div className="flex flex-col items-center lg:flex-row grow-0 shrink">
        <nav className="mt-9 flex lg:flex-col">
          {Object.keys(technologies).map((key, i) => {
            return (
              <NavLink
                to={"/technology/" + key}
                className={({ isActive }) =>
                  "mx-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid  border-primary/10 bg-transparent text-center text-primary hover:border-primary md:h-16 md:w-16 lg:mt-4 lg:h-20 lg:w-20 " +
                  (isActive && " border-primary/100 bg-white text-black")
                }
                key={key}
              >
                <span className="text-base md:text-2xl lg:text-h4">{i + 1}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mx-6 mt-7 text-center md:mx-40 lg:mx-20 lg:text-left">
          <h5 className="uppercase">the terminology...</h5>
          <h3 className="mt-4 uppercase">{name}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
    </PageContainer>
  );
};

export default Technology;
