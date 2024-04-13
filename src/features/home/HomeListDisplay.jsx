/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
function HomeListDisplay({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const arrayOfContent = post.fields.blogSummary.trim().split(/\s+/);
  return (
    <section key={post.sys.id} className="  m-auto grid grid-cols-1  pb-2  ">
      <div className=" relative m-auto grid h-full w-1/2 items-center justify-center max-[767px]:w-full max-[767px]:px-4">
        <header>
          <img
            src={post.fields.blogImage.fields.file.url}
            title=""
            alt={post.fields.blogTitle}
            className="h-full w-full "
          />

          <p>
            <span></span>
            <small>
              {new Intl.DateTimeFormat("en-GB", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(post.fields.blogDate))}
            </small>
          </p>
          <h2 className="my-2 text-3xl text-black">{post.fields.blogTitle}</h2>
        </header>
        <div className="mb-2">
          <p>
            <span>
              {isExpanded
                ? post.fields.blogSummary
                : post.fields.blogSummary.split(" ").slice(0, 15).join(" ")}
            </span>
          </p>

          <Link
            to={`/blogDetails/${post.sys.id}`}
            onClick={() => setIsExpanded((exp) => !exp)}
            className="cursor-pointer"
          >
            {arrayOfContent.length > 14
              ? isExpanded
                ? "Show less "
                : "Read More "
              : ""}
          </Link>

        </div>
      </div>
    </section>
  );
}

export default HomeListDisplay;
