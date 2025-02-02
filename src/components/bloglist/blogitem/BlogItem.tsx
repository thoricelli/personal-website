import Blog from "../../../model/Blog.tsx";

interface BlogItemProps {
  id: string;
  blog: Blog;
}

function BlogItem({ id, blog }: BlogItemProps) {
  return (
    <>
      <hr className="w-100 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <a href={`#/blog/${id}`}>
        <article className="w-100 text-center p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {blog.Preview != null && (
            <img
              className="h-60 mb-2 w-100 rounded-lg object-cover"
              src={import.meta.env.BASE_URL + "assets/previews/" + blog.Preview}
              alt="blog image"
            />
          )}
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.Name}
          </h2>
          {blog.Description.split("\n").map((item, index) => {
            return (
              <p
                key={index}
                className="font-light text-gray-500 dark:text-gray-400"
              >
                {item}
              </p>
            );
          })}
        </article>
      </a>
    </>
  );
}

export default BlogItem;
