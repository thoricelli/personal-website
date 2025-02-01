import BlogItem from "./blogitem/BlogItem.tsx";
import blogs from "../../../assets/blogs.json" with { type: "json" };

function BlogList() {
  return (
    <>
      {blogs.map((item) => {
        return (
          <BlogItem
            title={item.Name}
            preview={item.Preview}
            description={item.Description}
          ></BlogItem>
        );
      })}
    </>
  );
}

export default BlogList;
