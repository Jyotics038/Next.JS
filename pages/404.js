import React from 'react';
import Link from "next/link"
const Errorpage = () => {
  return(
      <>
        <div>
            <div>
                <div>
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>
                    The page you are looking for might have been removed.
                </p>
                <li>
                <Link href="/">
                <a>Back to the homepage</a>
                </Link>
                </li>
            </div>
        </div>
      </>
  );
};

export default Errorpage;
