import React from 'react';
import Link from "next/link";

export const getStaticProps = async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/albums");
  const data=await res.json();

  return{
    props:{
      data,
    },
  };
};
const blog = ({data}) => {
  return (
    <>
      {data.map((currEle)=>{
         return(
           <div key={currEle.id} className="ssr-styles">
              <h3>{currEle.id}</h3>
              <Link href={`/blog/${currEle.id}`}>
              <h2>{currEle.title}</h2>
              </Link>
           </div>
         )
      })}
    </>
  )

};

export default blog;
