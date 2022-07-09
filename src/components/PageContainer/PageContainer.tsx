import { Outlet } from "react-router-dom";

type props = {
  title: string;
  children?: React.ReactNode;
  id: string;
  className?: string;
};

const PageContainer = ({ title, children, id, className = "" }: props) => {
  return (
    <>
      <h5 className="mr-auto text-center uppercase text-primary md:mt-10 md:ml-9 md:text-left lg:mt-14 lg:ml-40">
        <span className="my-7 mr-4 font-bold text-primary/25">
          {id}
        </span>
        {title}
      </h5>

      {children}
      <Outlet />
    </>
  );
};

export default PageContainer;
