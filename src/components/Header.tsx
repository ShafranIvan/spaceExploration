import { useState } from "react"
import icon from "../images/icon.svg"

const hamburgerLine = "bg-secondary ease-linear duration-150 group-hover:bg-primary justify-center w-6 h-1 my-1 mx-0 block "

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <header className="h-16 flex flex-row justify-between p-6">
        <img alt="Space exlporation logo" className="h-10 w-10" src={icon}></img>
        
        <div className="h-6 w-6 group cursor-pointer items-center" onClick={_ => setIsOpen(!isOpen)}>
          <span className={hamburgerLine + (isOpen ? "rotate-45 translate-y-1": "")}/>
          <span className={hamburgerLine + (isOpen ? "w-0 h-0 m-0": "")}/>
          <span className={hamburgerLine + (isOpen ? "-rotate-45 -translate-y-1": "")}/>
        </div>
      </header>
  )
}

export default Header