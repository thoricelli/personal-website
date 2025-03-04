import BlogItem from "./blogitem/BlogItem.tsx";
import blogs from "../../../assets/blogs.json" with { type: "json" };
import categories from "../../../assets/categories.json" with { type: "json" };
import { useState } from "react";

function BlogList() {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      <div className="mt-2">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="cursor-pointer flex flex-wrap -mb-px">
            {categories.map((category) => {
              return (
                <li onClick={() => setActiveId(category.Id)} className="me-2">
                  <a
                    className={
                      activeId == category.Id
                        ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    {category.Name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {(() => {
        const filteredBlogs = Object.entries(blogs)
          .filter(([_id, item]) => item.Category === activeId)
          .sort((a, b) => b[1].Date - a[1].Date);

        return filteredBlogs.length > 0 ? (
          filteredBlogs.map(([id, item]) => (
            <BlogItem key={id} id={id} blog={item} />
          ))
        ) : (
          <p className="p-5 text-gray-600">Nobody here but us chickens!</p>
        );
      })()}
    </>
  );
}

export default BlogList;
