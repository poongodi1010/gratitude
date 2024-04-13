import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function AppFooter() {
  return (
    <>
      <div className=" flex items-center justify-center p-2 ">
        <a
          href="https://www.instagram.com/doodleprincesss/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram className="h-10 w-16 max-[767px]:h-6 max-[767px]:w-10 " />
        </a>
        <a
          href="https://www.linkedin.com/in/poongodi-r-a81988234/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="h-10 w-16 max-[767px]:h-6 max-[767px]:w-10" />
        </a>
        <a
          href="https://twitter.com/doodleprincesss"
          rel="noreferrer"
          target="_blank"
        >
          <FaXTwitter className="h-10 w-16 max-[767px]:h-6 max-[767px]:w-10" />{" "}
        </a>
      </div>
      <p className="text-center max-[767px]:text-[1rem]">
        &copy; 2024 by The Gratify. All rights reserved.
      </p>
    </>
  );
}

export default AppFooter;
