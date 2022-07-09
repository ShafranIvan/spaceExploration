type link = {
  imageClasses: string;
  name: string;
  to: string;
  id: number;
};

const links: link[] = [
  {
    name: "Home",
    imageClasses: "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
    to: "/",
    id: 0,
  },
  {
    name: "Destination",
    imageClasses:
      "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop",
    to: "/destination",
    id: 1,
  },
  {
    name: "Crew",
    imageClasses: "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop",
    to: "/crew",
    id: 2,
  },
  {
    name: "Technology",
    imageClasses:
      "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop",
    to: "/technology",
    id: 3,
  },
];

export default links;
export type { link };
