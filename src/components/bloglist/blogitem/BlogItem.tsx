interface BlogItemProps {
  title: string;
  preview?: string;
}

function BlogItem({ title, preview }: BlogItemProps) {
  return (
    <>
      <hr className="w-100 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <img
        className="h-auto mb-2 w-100 rounded-lg"
        src={import.meta.env.BASE_URL + "assets/previews/" + preview}
        alt="image description"
      />
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {"This should probably be the ACTUAL first line of the blogpost..."}
      </p>
    </>
  );
}

export default BlogItem;
