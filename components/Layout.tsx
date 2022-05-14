import Navbar from "./Navbar";
import { ReactElement } from 'react';


export const Layout = ({children}:{children:ReactElement}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;