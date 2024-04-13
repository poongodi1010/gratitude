/* eslint-disable react/jsx-key */
function showPepTalk({ para }) {
  return (
    <>
      <p className=" float-left   font-sans text-3xl">
        {para.split("\n").reduce((total, line) => [total, <br />, line])}
      </p>
    </>
  );
}
export default showPepTalk;
