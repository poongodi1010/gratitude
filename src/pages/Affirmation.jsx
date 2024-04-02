// import { useEffect } from "react";
// import { getAffirmations } from "../services/apiAffirmations";

// import { useQuery } from "@tanstack/react-query";
// import { getAffirmations } from "../services/apiAffirmations";
import GetAffirmations from "../features/affirmations/GetAffirmations";

function Affirmation() {
  // useEffect(function () {
  //   getAffirmations().then((data) => console.log(data));
  // }, []);
  return <GetAffirmations />;
}
export default Affirmation;
