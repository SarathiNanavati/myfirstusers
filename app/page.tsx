import { Blog, Catagory } from "@/lib/common.types";
import Header from "./components/pageComponents/Header/Header";
import MainSection from "./components/pageComponents/HomePage/MainSection";

const BlogListPage = async () => {
  const categoriesResponse = await fetch("http://localhost:3001/categories", {
    cache: "no-store",
  });
  const categories: Catagory[] = await categoriesResponse.json();
  const blogsResponse = await fetch("http://localhost:3001/blogs", {
    cache: "no-store",
  });
  const blogs: Blog[] = await blogsResponse.json();

  return (
    <div className="p-[5%] bg-white text-gray-800 min-h-screen">
      <Header />
      <MainSection categories={categories} blogs={blogs} />
    </div>
  );
};
export default BlogListPage;
