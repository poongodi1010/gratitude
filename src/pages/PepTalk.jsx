import { useUsers } from "../features/authendication/useUsers";
import { capitalCheck } from "../utils/constants";
//import ShowPepTalk from "../features/pepTalk/ShowPepTalk";

function PepTalk() {
  const { user } = useUsers();
  console.log("user", user);
  const name = user.user_metadata.fullName;
  const words = name.split(" ");

  const isCapital = capitalCheck(words[0]);
  let userName;

  if (isCapital === true) {
    userName = words[0];
  } else {
    userName = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  }

  //   const pepTalkPara = ` ${userName}, meet ${userName} - an really important person.
  //   ${userName}, you're a big thinker so always thonk big.Think big about everything.
  //   You've got an plenty of ability to do first class job so always do first class job

  //   ${userName} you born with lot of talents , you are an achiever, you are an
  //   motivator, you are an inspiration,You always thinks positively.

  //   ${userName} You always believe in happiness , progress, prosperity. So,
  //   talk only happiness,
  //   talk only progress,
  //   talk only prosperity

  //  You have lots of drive ${userName} lots of drive so put that drive to work .
  //  Nothing can stop you ${userName}, nothing

  //   ${userName} you are an enthusiastic,let your enthusiasm show through.
  //   you look good ${userName} and you feel good stay that way

  //  ${userName} you were a great fellow yesterday and you are going to be an even
  //   greater fellow today.
  //   Now go to it  ${userName}.
  //   Go forward...!!!`;

  return (
    <div className="h-1/2 w-full rounded-xl  py-4 text-black  md:max-lg:py-1 md:max-lg:backdrop-blur-none">
      <div>
        <h1 className="font-[Bree Serif] my-4 text-center text-3xl font-semibold  md:max-lg:my-2">
          PEP TALK
        </h1>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-2 h-2 w-screen  rounded border-0 bg-gray-200 pl-8 dark:bg-gray-800" />
          <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900">
            <svg
              className="h-4 w-full text-gray-900 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
        <div className="font-[Bree Serif] m-auto whitespace-pre-line pt-8 text-justify max-[767px]:px-8 max-[767px]:text-[1.2rem] lg:pl-24">
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span>, meet
            <span className="font-bold"> {userName} </span> - an really
            important person.
          </h3>
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span>, you&apos;re a big
            thinker.So, always think big. Think big about everything.
            You&apos;ve got an plenty of ability to do first class job so always
            do first class job
          </h3>
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span> you born with lot of
            talents , you are an achiever, you are an motivator, you are an
            inspiration,You always thinks positively.
          </h3>
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span> You always believe
            in happiness , progress, prosperity. So, talk only happiness, talk
            only progress, talk only prosperity
          </h3>
          <h3 className="py-4">
            You have lots of drive
            <span className="font-bold"> {userName} </span> lots of drive so put
            that drive to work . Nothing can stop you
            <span className="font-bold"> {userName} </span>, nothing
          </h3>
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span> you are an
            enthusiastic,let your enthusiasm show through. you look good
            <span className="font-bold"> {userName} </span> and you feel good
            stay that way
          </h3>
          <h3 className="py-4">
            <span className="font-bold"> {userName} </span>you were a great
            fellow yesterday and you are going to be an even greater fellow
            today. Now go to it <span className="font-bold"> {userName} </span>.
          </h3>
          <span className=" flex items-center justify-center py-2 font-bold">
            {" "}
            Go forward...!!!
          </span>
        </div>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-2 h-2 w-screen  rounded border-0 bg-gray-200 pl-8 md:max-lg:my-1 dark:bg-gray-800" />
          <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900">
            <svg
              className="h-4 w-full text-gray-900 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PepTalk;

{
  /* {pepTalkPara.split("\n\n").map((paragraph) => (
            <ShowPepTalk para={paragraph} key={name} />
          ))} */
}
