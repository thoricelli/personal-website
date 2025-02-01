import ReactMarkdown from "react-markdown";
import blog from "../../../assets/blogs/Hello_World.MD";
import { useState } from "react";

interface BlogPostProps {
  title: string;
  intro: string;
}
function BlogPost({title, intro} : BlogPostProps) {
  const [blogText, setBlogText] = useState("");

  fetch(blog)
    .then((response) => response.text())
    .then((text) => {
      setBlogText(text);
    });

  return (
    <div className="grid justify-items-center mt-5">
      <img
        className="h-auto mb-2 w-100 rounded-lg"
        src={import.meta.env.BASE_URL + "assets/previews/default.jpg"}
        alt="blog image"
      />
      <div>
      <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      <hr className="w-100 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="font-light text-gray-500 ">
          <div className="mb-3">
            {intro.split("\\n").map((item) => {
                return (
                    <p className="dark:text-white w-100">
                      {item}
                    </p>
                  )
                })
            }
          </div>
          <ReactMarkdown
          components={{
            h1(props: { [x: string]: any; node: any; }) {
              const {node, ...rest} = props
              return <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" {...rest} />
            },
            code(props: { [x: string]: any; node: any; }) {
              const {node, ...rest} = props
              return <code className="break-all mb-3 w-100 text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6" {...rest} />
            },
            p(props: { [x: string]: any; node: any; }) {
              const {node, ...rest} = props
              return <p className="mb-3" {...rest} />
            }
          }}
          className={"dark:text-white w-100 whitespace-pre"}>{blogText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
