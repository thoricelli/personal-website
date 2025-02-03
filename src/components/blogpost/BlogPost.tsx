import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Blog from "../../model/Blog.tsx";
import blogs from "../../../assets/blogs.json" with { type: "json" };
import FourOFour from "../FourOFour.tsx";

function BlogPost() {
  const { id } = useParams();
  
  const blog = fetchBlog(id as string);

  if (blog != null) {
    const [blogText, setBlogText] = useState("");

    useEffect(() => {
      fetch(fetchBlogMarkdownPath(blog))
        .then((response) => response.text())
        .then((text) => {
          setBlogText(text);
      });
    }, [])

    return (
      <div className="grid justify-items-center w-full">
          <div className="grid justify-items-center p-5 max-w-xl">
              {blog.Preview != null && (<img
                className="h-45 mb-2 w-full rounded-lg object-cover"
                src={import.meta.env.BASE_URL + `assets/previews/${blog.Preview}`}
                alt="blog image"
              /> )}
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.Name}
            </h2>
            <hr className="w-full h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="font-light text-gray-500 ">
              <div className="mb-6">
                {blog.Description.split("\\n").map((item, index) => {
                  return <p key={index} className="dark:text-white w-full">{item}</p>;
                })}
              </div>
              <ReactMarkdown
                components={{
                      h1(props: { [x: string]: any; node: any }) {
                        const { node, ...rest } = props;
                        return (
                          <h1
                            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            {...rest}
                          />
                        );
                      },
                      code(props: { [x: string]: any; node: any }) {
                        const { node, ...rest } = props;
                        return (
                          <code
                            className="break-all text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6"
                            {...rest}
                          />
                        );
                      },
                      p(props: { [x: string]: any; node: any }) {
                        const { node, ...rest } = props;
                        return <p {...rest} />;
                      },
                      a(props: { [x: string]: any; node: any }) {
                        const { node, ...rest } = props;
                        return <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" {...rest} />
                      }
                    }}
                  className={"dark:text-white whitespace-pre-wrap"}
                >
                {blogText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
    );
  } else {
    return (<FourOFour></FourOFour>)
  }
}

function fetchBlog(id: string): Blog {
  // deno-lint-ignore no-explicit-any
  return (blogs as any)[id];
}

function fetchBlogMarkdownPath(blog: Blog): string {
  return `/assets/blogs/${blog.Blog}`
}

export default BlogPost;
