import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import icon from "../../images/icon.svg"
import { Link } from "react-router-dom"

type HamburgerProps = {
  children?: React.ReactNode
}

const links = [
  {name: "Home", to: "#", id: 0},
  {name: "Destination", to: "#", id: 1},
  {name: "Crew", to: "#", id: 2},
  {name: "Technology", to: "#", id:3},
]

const Hamburger = ({ children }: HamburgerProps) => {
  const hamburgerLine = "bg-secondary ease-linear duration-150 group-hover:bg-primary justify-center w-6 h-1 my-1 mx-0 block "
  const [isOpen, setIsOpen] = useState(false);

  return <>
      <div className="h-6 w-6 group cursor-pointer items-center m-6 z-10" onClick={_ => setIsOpen(!isOpen)}>
        <span className={hamburgerLine + (isOpen ? "rotate-45 translate-y-1": "")}/>
        <span className={hamburgerLine + (isOpen ? "w-0 h-0 m-0": "")}/>
        <span className={hamburgerLine + (isOpen ? "-rotate-45 -translate-y-1": "")}/>
      </div>
      <AnimatePresence>
        {isOpen && <motion.aside className={
          "fixed flex flex-col items-center justify-center backdrop-blur-3xl h-screen right-0"
          } 
          initial={{width:0}} 
          animate={{ width:"66.6%" }} 
          exit={{width:0}} 
          transition={{duration: 0.15}}
        >
          {links.map(({name, to, id}, i) => {
            
            return <Link 
            className="text-primary"
            to={to} key={id}>
              {i.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              }) + " " + name.toUpperCase()}
            </Link>
          })}

        </motion.aside>}
      </AnimatePresence>
  </> 
}

const Header = () => {


  return (
      <>
      <header className="h-16 flex flex-row justify-between">
        <img alt="Space exlporation logo" className="h-10 w-10 m-6" src={icon}></img>
        <Hamburger/>
      </header>
      
      </>
  )
}

export default Header