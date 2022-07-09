import launchLandscape from "../images/image-launch-vehicle-landscape.jpg"
import launchPortrait  from "../images/image-launch-vehicle-portrait.jpg"
import capsuleLandscape from "../images/image-space-capsule-landscape.jpg"
import capsulePortrait  from "../images/image-space-capsule-portrait.jpg"
import spaceportLandscape from "../images/image-spaceport-landscape.jpg"
import spaceportPortrait  from "../images/image-spaceport-portrait.jpg"

type technology = {
  [key:string]: {img: {
      portraitSrc: string;
      landscapeSrc: string;
      alt: string;
    };
    contents: {
      name: string;
      description: string;
    };
  }
};

const technologies: technology = {
  "launch": {img: {
    portraitSrc: launchPortrait,
    landscapeSrc: launchLandscape,
    alt: "Launch vehicle",
  },
  contents: {
    name: "LAUNCH VEHICLE",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
  },
  "spaceport": {img: {
    portraitSrc: spaceportPortrait,
    landscapeSrc: spaceportLandscape,
    alt: "spaceport",
  },
  contents: {
    name: "spaceport",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
  },
  "capsule": {img: {
    portraitSrc: capsulePortrait,
    landscapeSrc: capsuleLandscape,
    alt: "space capsule",
  },
  contents: {
    name: "space capsule",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  }
}

export default technologies
export type { technology }