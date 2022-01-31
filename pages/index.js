import React from 'react';
import Link from "next/link";

const index = () => {
  return (<>
  <nav>
    <ul className="menu-bar">
      <li>
      <Link href="/">
         <a>Home</a>
      </Link>
      </li>
      <li>
      <Link href="/about">
         <a>About</a>
      </Link>
      </li>
      <li>
      <Link href="/contact">
         <a>Contact</a>
      </Link>
      </li>
    </ul>
  </nav>
  </>);
};

export default index;
