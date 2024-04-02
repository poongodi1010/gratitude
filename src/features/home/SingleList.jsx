import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useParams } from "react-router-dom";

import SingleListDisplay from "./SingleListDisplay";

function SingleList() {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const client = createClient({
    space: "p4zypm6742ep",
    accessToken: "A7DMs_x2th8WoscQbwed3045b0zc0J8nr5art9a2T98",
  });

  const { id } = useParams();

  console.log(singleBlogPost);
  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entry) => {
          console.log("entry", entry);
          setSingleBlogPost(entry);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getEntryById(id);
  }, [id]);

  return <SingleListDisplay singleBlogPost={singleBlogPost} />;
}

export default SingleList;
