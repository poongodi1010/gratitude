/* eslint-disable react/jsx-key */
function showPepTalk({ para }) {
  return (
    <>
      <p className=" float-left   font-sans text-3xl">
        {para.split("\n").reduce((total, line) => [total, <br />, line])}
      </p>
      {/* <img
        className=" w-[40%]"
        src="positive.jpg"
        alt="Yes You Can Positive image"
      /> */}
    </>
  );
}
export default showPepTalk;
