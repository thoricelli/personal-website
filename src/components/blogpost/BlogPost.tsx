import ReactMarkdown from "react-markdown";
import blog from "../../assets/blogs/Hello_World.MD";
import { useState } from "react";

function BlogPost() {
  const [blogText, setBlogText] = useState("");

  fetch(blog)
    .then((response) => response.text())
    .then((text) => {
      setBlogText(text);
    });

  return (
    <ReactMarkdown className={"dark:text-white"}>{blogText}</ReactMarkdown>
  );
}

export default BlogPost;
