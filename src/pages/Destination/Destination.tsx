import { NavLink, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import destinations from "./data/destanations";


const Destination = () => {
  const {id} = useParams();
  
  const {img: {src, alt}, contents: {name, travelTime, distance, description}} = destinations[id || "moon"];

  return (
    <PageContainer id={"01"} title="Pick your destination" >
      <div className="mt-8 mx-6 flex flex-col items-center text-center md:mt-16 md:mx-24 lg:flex-row lg:justify-around lg:text-left lg:mx-40">
        <img
          alt={alt}
          src={src}
          className="h-44 w-44 md:h-80 md:w-80 lg:h-[445px] lg:w-[445px] mx-auto justify-self-start"
        />
        <div className="lg:w-[445px]">
          <div className="my-6 mx-auto flex h-7 w-min lg:mx-0">
            {Object.keys(destinations).map((key) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return (
                      "mx-4 py-1 font-barlow-condensed uppercase tracking-nav text-primary hover:border-b-4 hover:border-primary/50 focus:border-b-4 " +
                      "md:py-auto md:flex md:h-full md:items-center " +
                      (isActive && "border-b-4 border-primary")
                    );
                  }}
                  to={"/destination/" + key}
                  key={key}
                >
                  {destinations[key].contents.name}
                </NavLink>
              );
            })}
          </div>
          <h2>{name}</h2>
          <p>{description}</p>
          <hr className="mt-8 h-2 w-full border-primary/25" />
          <div className="mx mt-8 flex w-full flex-col justify-around pb-14 uppercase md:flex-row">
            <div>
              <h5 className="sh2">AVG. DISTANCE</h5>
              <h3 className="sh1">{distance}</h3>
            </div>
            <div className="mt-8 md:mt-0">
              <h5 className="sh2">EST. TRAVEL TIME</h5>
              <h3 className="sh1">{travelTime}</h3>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Destination;
