import { useEffect, useState } from "react";
import { createClient } from "contentful";
//import { useState } from "react";
//import { NavLink } from "react-router-dom";
import HomeListDisplay from "./HomeListDisplay";

function HomeList() {
  const [blogPost, setBlogPost] = useState([]);
  const client = createClient({
    space: "p4zypm6742ep",
    accessToken: "A7DMs_x2th8WoscQbwed3045b0zc0J8nr5art9a2T98",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPost(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);
  return (
    // <div className="  mt-8">
    <div className=" mx-auto my-4  ">
      <div>
        {/* <div>
        {/* <h1>Web Dev Blog</h1> */}

        {blogPost?.items?.map((post) => (
          <HomeListDisplay post={post} key={post.sys.id} />
        ))}
      </div>
    </div>

    // </div>
  );
}

export default HomeList;
