import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function AppFooter() {
  return (
    <>
      <div className=" flex items-center justify-center p-2">
        <a
          href="https://www.instagram.com/doodleprincesss/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram className="h-10 w-16" />
        </a>
        <a
          href="https://www.linkedin.com/in/poongodi-r-a81988234/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="h-10 w-16" />
        </a>
        <a
          href="https://twitter.com/doodleprincesss"
          rel="noreferrer"
          target="_blank"
        >
          <FaXTwitter className="h-10 w-16" />{" "}
        </a>
      </div>
      <p className="text-center">
        &copy; 2024 by The Gratitute. All rights reserved.
      </p>
    </>
  );
}

export default AppFooter;
