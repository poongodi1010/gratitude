import { useEffect, useState } from "react";
import { createClient } from "contentful";
//import { useState } from "react";
import { NavLink } from "react-router-dom";
//import HomeListDisplay from "./HomeListDisplay";

function HomeList() {
  const [blogPost, setBlogPost] = useState([]);
  const client = createClient({
    space: "p4zypm6742ep",
    accessToken: "A7DMs_x2th8WoscQbwed3045b0zc0J8nr5art9a2T98",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  //const navigate = useNavigate();
  //const arrayOfContent = post.fields.blogSummary.trim().split(/\s+/);
  console.log(blogPost);
  // const arrayOfContent = grat.gratitude.trim().split(/\s+/);
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log("entries", entries);
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

        {/* {blogPost?.items?.map((post) => (
          <HomeListDisplay post={post} key={post.sys.id} />
        ))} */}
        {blogPost?.items?.map((post) => (
          <section
            key={post.sys.id}
            className="  m-auto grid grid-cols-1  pb-2  "
          >
            <div className=" sm:-z-50 sm:w-full sm:items-start lg:relative lg:-z-50 lg:m-auto lg:grid lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
              <header>
                <img
                  src={post.fields.blogImage.fields.file.url}
                  title=""
                  alt={post.fields.blogTitle}
                  // width="578"
                  // height="291"
                  className="h-full w-full "
                />

                <p>
                  {/* By <a href="https://thecodeangle.com/">author</a> Date{" "} */}
                  <span></span>
                  <small>
                    {new Intl.DateTimeFormat("en-GB", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(post.fields.blogDate))}
                  </small>
                </p>
                <h2 className="my-2 text-3xl text-black">
                  {post.fields.blogTitle}
                </h2>
              </header>
              <div className="mb-2">
                <p>
                  <span>
                    {isExpanded
                      ? post.fields.blogSummary
                      : post.fields.blogSummary
                          .split(" ")
                          .slice(0, 15)
                          .join(" ")}
                  </span>
                </p>
                {/* <button
            className="cursor-pointer bg-red-900 p-2 text-white "
            onClick={
              (console.log("clicked"),
              setIsExpanded((exp) => !exp),
              navigate(`/blogDetails/${post.sys.id}`))
            }
          > */}

                <NavLink
                  to={`/blogDetails/${post.sys.id}`}
                  onClick={() => setIsExpanded((exp) => !exp)}
                  className="lg:cursor-pointer"
                >
                  {post.fields.blogSummary.trim().split(/\s+/).length > 14
                    ? isExpanded
                      ? "Show less "
                      : "Read More "
                    : ""}
                </NavLink>
                {/* </button> */}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>

    // </div>
  );
}

export default HomeList;
