/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
function SingleListDisplay({ singleBlogPost }) {
  return (
    <div className=" mx-auto my-4  ">
      <div>
        {/* <div> */}
        {/* <h1>Web Dev Blog</h1> */}
        {/* {singleBlogPost?.items?.map((post) => ( */}
        {/* //eslint-disable-next-line react/prop-types */}
        <section
          key={singleBlogPost?.sys?.id}
          className="  m-auto grid grid-cols-1  pb-2  "
        >
          <Link to="/home" className="m-4 w-fit p-4">
            <HiArrowLeft className="float-left mx-2 my-1 text-3xl font-bold " />
            Back
          </Link>
          {/* <div className=" relative m-auto grid h-full w-1/2 items-center justify-center sm:w-full sm:items-start"> */}
          <div className=" relative m-auto grid h-full w-1/2 items-center justify-center">
            <header>
              <img
                src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                title=""
                alt={singleBlogPost?.fields?.blogTitle}
                // width="578"
                // height="291"
                className="h-full w-full "
              />

              <p>
                {/* By <a href="https://thecodeangle.com/">author</a> Date{" "} */}
                <span></span>
                <small>
                  {singleBlogPost?.fields?.blogDate === undefined
                    ? "loading"
                    : new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(singleBlogPost?.fields?.blogDate))}
                </small>
              </p>
              <h2 className="my-2 text-3xl text-black">
                {singleBlogPost?.fields?.blogTitle}
              </h2>
            </header>
            <div>
              <p>{singleBlogPost?.fields?.blogSummary}</p>
            </div>
          </div>
        </section>
        {/* // ))} */}
      </div>

      {/* <div>
    <div>
      <div>
        <a href="http://twitter.com/thecodeangle">Twitter</a>
      </div>
    </div>
  </div> */}
      {/* </div> */}
    </div>
  );
}

export default SingleListDisplay;
