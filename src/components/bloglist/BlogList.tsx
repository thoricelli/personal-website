import BlogItem from "./blogitem/BlogItem.tsx";
import blogs from "../../../assets/blogs.json" with { type: "json" };

function BlogList() {
  return (
    <>
      {(Object.entries(blogs)).map(([id, item]) => {
        return (
          <BlogItem key={id} id={id} blog={item}/>
        );
      })}
    </>
  );
}

export default BlogList;
