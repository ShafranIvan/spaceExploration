import moon from "../images/moon.webp";
import mars from "../images/mars.webp";
import europa from "../images/europa.webp";
import titan from "../images/titan.webp";

type destination = {
  [key:string]: {img: {
      src: string;
      alt: string;
    };
    contents: {
      name: string;
      description: string;
      distance: string;
      travelTime: string;
    };
  }
};


const destinations: destination = {
  "moon": {
    img: {
      src: moon,
      alt: "moon",
    },
    contents: {
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
    },
  },
  "mars": {
    img: {
      src: mars,
      alt: "mars",
    },
    contents: {
      name: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      travelTime: "9 months",
    },
  },
  "europa": {
    img: {
      src: europa,
      alt: "europa",
    },
    contents: {
      name: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      travelTime: "3 years",
    },
  },
  "titan": {
    img: {
      src: titan,
      alt: "titan",
    },
    contents: {
      name: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      travelTime: "7 years",
    },
  },
};

export default destinations;
export type { destination };
