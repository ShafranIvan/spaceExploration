import douglas from "../images/douglas-hurley.webp"
import mark from "../images/mark-shuttleworth.webp"
import victor from "../images/victor-glover.webp"
import anousheh from "../images/anousheh-ansari.webp"

type crewMembersType = {
  [key:string]: 
    { img: {
      src: string;
      alt: string;
    };
    contents: {
      name: string;
      description: string;
      role: string;
    }
  }
};

const crewMembers: crewMembersType = {
  douglas: {
    img: {
      src: douglas,
      alt: "commander Douglas Harley",
    },
    contents: {
      name: "Douglas Harley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      role: "Comander",
    }
  },
  mark: {
    img: {
      src: mark,
      alt: "Mark Shuttleworth",
    },
    contents: {
      name: "MARK SHUTTLEWORTH",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      role: "Mission Specialist ",
    }
  },
  victor: {
    img: {
      src: victor,
      alt: "Victor Glover",
    },
    contents: {
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      role: "PILOT",
    }
  },
  anousheh: {
    img: {
      src: anousheh,
      alt: "Anousheh Ansari",
    },
    contents: {
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      role: "Flight Engineer",
    }
  },
}

export default crewMembers