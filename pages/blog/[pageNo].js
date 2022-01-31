import React from 'react';
import {useRouter} from 'next/router';

export const  getStaticPaths=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/albums");
  const data=await res.json();
   
  const paths=data.map((currEle)=>{
     return{
       params:{
         pageNo : currEle.id.toString(),
        }
     }
  })

  return{
    paths,
    fallback:false,
  }

}

export const getStaticProps = async(context) => {
  const id=context.params.pageNo;
  const res=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const data=await res.json();

  return{
    props:{
      data,
    },
  };
};

const pageNo = ({data}) => {
    // const router = useRouter();
    // const pageNumber=router.query.pageNo;
  // return <>
  // <h1>my {pageNumber} content</h1>
  // </>
  return(
    <>
     <div className="ssr-styles ssr-styles-inside">
              <h3>{data.id}</h3>
             <h2>{data.title}</h2>
             <p>{data.body}</p>
           </div>
    </>
  )
};

export default pageNo;
