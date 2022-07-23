import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    document.title = "Explore";
  }, []);

  return (
    <div className="m-6 mt-24 flex flex-col items-center text-center lg:mx-40 lg:my-auto lg:flex-row lg:justify-between lg:flex-grow">
      <div className="md:w-[29rem]">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="text-secondary">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link to="/destination/">
        <motion.button
          className="mt-20 h-40 w-40 rounded-full bg-primary outline outline-0 outline-secondary/5 md:h-60 md:w-60"
          whileHover={{ outlineWidth: "3rem", scale: 1.1 }}
          whileFocus={{ outlineWidth: "3rem", scale: 1.1 }}
          transition={{ duration: 1 }}
          data-testid="explore-button"
        >
          <span className="relative top-1 z-0 text-xl tracking-[1.25px] md:text-3xl">
            EXPLORE
          </span>
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
