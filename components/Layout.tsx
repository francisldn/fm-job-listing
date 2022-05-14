import Navbar from "./Navbar";
import { ReactElement } from 'react';
import Head from 'next/head'


export const Layout = ({children}:{children:ReactElement}) => {
  return (
    <>
    <Head>
        <title>Job Listing Search</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      {children}
    </main>
    </>
  );
}

export default Layout;