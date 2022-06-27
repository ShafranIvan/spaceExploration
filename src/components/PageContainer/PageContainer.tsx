import { Outlet } from "react-router-dom"

type props = {
  title?: string,
  children?: React.ReactNode
}

const PageContainer = ({title, children}:props) => {
  return (
    <div className="mx-6 md:mx-24 lg:mx-40 md:mt-10 lg:mt-14">
    <h5 className="uppercase text-primary mr-auto md:text-left md:ml-9">
      <span className="my-7 mr-4 font-bold text-primary/25">01</span>
      {title}
    </h5>

    {children}
    <Outlet/>

    </div>
  )
}

export default PageContainer