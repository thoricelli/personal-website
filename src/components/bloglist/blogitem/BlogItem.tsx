import Blog from "../../../model/Blog.tsx";

interface BlogItemProps {
  id: string;
  blog: Blog;
}

function BlogItem({ id, blog }: BlogItemProps) {
  return (
    <div className="max-w-100 ps-5 pe-5">
      <a href={`#/blog/${id}`}>
        <article className="grid justify-items-center my-5 text-center p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {blog.Preview != null && (
            <img
              className="h-60 mb-2 rounded-lg object-cover"
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
    </div>
  );
}

export default BlogItem;
