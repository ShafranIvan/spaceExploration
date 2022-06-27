import { NavLink } from "react-router-dom";
import type { destination } from "./data/destanations";
import destinations from "./data/destanations";

type props = {
  dest: destination
}

const Destination = ({dest:{img:{alt, src}, contents:{name, description, distance, travelTime}}}:props) => {
  return ( 
    <div className="mt-8 flex flex-col items-center text-center md:mt-16 lg:flex-row lg:justify-around lg:text-left">
      <img alt={alt} src={src} className="h-44 w-44 md:w-80 md:h-80 lg:w-[445px] lg:h-[445px]" />
      <div className="lg:w-[445px]">
        <div className="my-6 h-7 flex w-min mx-auto lg:mx-0">
          {destinations.map((dest) => {
            return (
              <NavLink
              className={({ isActive }) => {
                return (
                  "uppercase mx-4 py-1 font-barlow-condensed tracking-nav text-primary focus:border-b-4 hover:border-b-4 hover:border-secondary " +
                  "md:py-auto md:flex md:h-full md:items-center " +
                  (isActive &&
                    "border-b-4 border-primary")
                );
              }}
              to={"/destination/" + dest.url}
              key={dest.url}
            >
              {dest.contents.name}
              </NavLink>
            )
          })}
        </div>
        <h1>{name}</h1>
        <p>
          {description}
        </p>
        <hr className="mt-8 h-2 w-full border-primary/25" />
        <div className="uppercase flex flex-col w-full mx md:flex-row justify-around pb-14 mt-8">
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
  );
};

export default Destination;
