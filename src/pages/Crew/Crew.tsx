import { useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import crewMembers from "./data/crewMembers";

const Crew = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { id } = useParams();
  
  const {
    img: { src, alt },
    contents: { name, role, description },
  } = crewMembers[id || "douglas"];
  
  return (
    <PageContainer id={"02"} title="Meet your crew">
      <div 
        ref={ref} 
        className={`mx-6 mt-8 mb-28 lg:overflow-hidden flex flex-col items-center text-center md:mb-0 md:mt-16 md:flex-col-reverse lg:mx-40 lg:flex-row-reverse lg:justify-between lg:text-left lg:h-auto lg:flex-grow`}
        >
        <div className="mt-10 flex flex-col lg:mt-auto">
          <img alt={alt} src={src} className="h-56 md:h-[532px] lg:h-auto" />
        </div>
        <div className="flex flex-col items-center md:mx-32 md:h-60 md:flex-col-reverse lg:mx-0 lg:mb-40 lg:h-full lg:items-start">
          <hr className="w-full border-primary/10 md:hidden" />

          <nav className="mt-8 flex h-4 w-min justify-center lg:mt-32">
            {Object.keys(crewMembers).map((key) => {
              return (
                <NavLink
                  to={"/crew/" + key}
                  className={({ isActive }) =>
                    "mx-2 inline-block h-2.5 w-2.5 rounded-full bg-primary/10 hover:bg-primary/50 lg:h-4 lg:w-4 " +
                    (isActive && " bg-primary/100")
                  }
                  key={key}
                />
              );
            })}
          </nav>

          <div>
            <h4 className="mt-8 uppercase text-primary/50">{role}</h4>
            <h3 className="uppercase">{name}</h3>
            <p className="mt-4 lg:max-w-md">{description}</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Crew;
