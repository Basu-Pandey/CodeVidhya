import React, { useEffect, useState } from "react";
import Card from "./Card";
// import list from "../../public/list.json";
import axios from "axios";
const CoursePaid = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook =async ()=>{
      try {
        const res =await axios.get("https://code-vidhya.vercel.app/book");
        console.log(res.data)
        setBook(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Some Paid Courses
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            doloribus veniam dignissimos iste odio eaque, impedit explicabo nemo
            molestias eum, eius perferendis provident sapiente repellendus.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePaid;
