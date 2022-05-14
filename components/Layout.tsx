import Navbar from "./Navbar";
import { ReactElement } from 'react';
import Head from 'next/head'


export const Layout = ({children}:{children:ReactElement}) => {
  return (

    <html lang="en">
        <Head>
            <title>Job Listing Search</title>
        </Head>
        <body>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </body>
    </html>
  );
}

export default Layout;