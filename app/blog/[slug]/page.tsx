import BlogDetailPage from "@/app/components/pageComponents/BlogPage/BlogDetailPage";
import Header from "@/app/components/pageComponents/Header/Header";
import { Blog } from "@/lib/common.types";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params: { slug } }: BlogPageProps) {
  const blogResponse = await fetch(`http://localhost:3001/blogs/${slug}`, {
    cache: "no-cache",
  });

  if (blogResponse.status !== 200) {
    return <h1 className="text-center">No Blog Found for that slug.</h1>;
  }

  const blog: Blog = await blogResponse.json();

  if (!blog?.id) {
    return <h1 className="text-center">No Blog Found for that slug.</h1>;
  }

  return (
    <div className="p-[5%] bg-white text-gray-800 min-h-screen">
      <Header />
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogDetailPage blog={blog} />
      </div>
    </div>
  );
}
