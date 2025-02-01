interface BlogItemProps {
  title: string;
  description: string;
  preview?: string;
}

function BlogItem({ title, description, preview }: BlogItemProps) {
  return (
    <>
      <hr className="w-100 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <img
        className="h-auto mb-2 w-100 rounded-lg"
        src={import.meta.env.BASE_URL + "assets/previews/" + preview}
        alt="blog image"
      />
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
        {description.split("\n").map((item) => {
          return (
            <p className="text-center font-light text-gray-500 dark:text-gray-400 w-100">
              {item}
            </p>
          )
          })
        }
    </>
  );
}

export default BlogItem;
