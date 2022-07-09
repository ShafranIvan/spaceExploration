import { useState } from "react";
import icon from "../../images/icon.svg";
import { NavLink } from "react-router-dom";
import links from "../../links";

import type { link } from "../../links";

type HamburgerProps = {
  onClick: () => void;
  open: boolean;
  className?: string;
};

const Hamburger = ({ open, onClick, className }: HamburgerProps) => {
  const hamburgerLine =
    "bg-secondary ease-linear duration-150 group-focus:bg-primary group-hover:bg-primary justify-center w-6 h-1 my-1 mx-0 block ";
  return (
    <button
      aria-label="Open navigation menu"
      className={
        "group z-10 m-6 h-6 w-6 cursor-pointer items-center sm:hidden " +
        className
      }
      onClick={onClick}
    >
      <span className={hamburgerLine + (open && "translate-y-1 rotate-45")} />
      <span className={hamburgerLine + (open && "m-0 h-0 w-0")} />
      <span className={hamburgerLine + (open && "-translate-y-1 -rotate-45")} />
    </button>
  );
};

type NavigationMenuProps = {
  open: boolean;
  links: link[];
  className?: string;
};

const NavigationMenu = ({ open, links, className }: NavigationMenuProps) => {
  return (
    <div
      className={
        (open ? "w-2/3 " : "w-0 ") +
        "fixed right-0 top-0 flex h-screen flex-col bg-primary/5 py-28 backdrop-blur-3xl transition-all duration-150 " +
        "md:static md:h-full md:w-auto md:flex-row md:px-4 md:py-0 lg:pr-40 lg:pl-32 " +
        className
      }
    >
      {links.map(({ name, to, id }, i) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return (
                "my-3 ml-8 py-1 font-barlow-condensed uppercase tracking-nav text-primary hover:border-r-4 hover:border-primary/50 " +
                "md:py-auto md:mx-8 md:my-0 md:flex md:h-full md:items-center md:hover:border-r-0 md:hover:border-b-4 md:focus:border-b-4 md:focus:border-r-0 " +
                (isActive &&
                  "border-r-4 border-primary md:border-r-0 md:border-b-4")
              );
            }}
            to={to}
            key={id}
          >
            <span className="mr-3 inline font-bold md:hidden lg:block">
              {i.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex h-24 flex-row items-center justify-between lg:my-10">
        <img
          alt="Space exlporation logo"
          className="m-6 h-10 w-10 lg:mx-12 "
          src={icon}
        />
        <hr className="relative left-8 z-40 hidden w-full border-primary/25 pl-12 lg:inline" />

        <Hamburger
          className="z-30"
          open={open}
          onClick={() => setOpen(!open)}
        />

        <NavigationMenu className="z-20" open={open} links={links} />
      </header>
    </>
  );
};

export default Header;
