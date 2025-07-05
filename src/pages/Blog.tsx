import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogImage from "../assets/blogImage.jpg";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Post = {
  id: string;
  title: string;
  content: string;
  category: string;
  imageURL: string;
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];
        setPosts(data);
      } catch (error) {
        console.error("Erreur lors du chargement des articles :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getPlainTextSummary = (html: string, maxLength = 150) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const handleCardClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${blogImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Blog
          </h1>
        </div>
      </header>

      {/* Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-black">
        <div className="text-center px-4 max-w-4xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Nos Articles
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {loading ? (
            <p className="text-center col-span-full">Chargement...</p>
          ) : posts.length === 0 ? (
            <p className="text-center col-span-full">Aucun article trouvé.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleCardClick(post.id)}
              >
                {/* Image section with overlay */}
                <div className="relative h-48 overflow-hidden">
                  {post.imageURL && (
                    <img
                      src={post.imageURL}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 z-10"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-emerald-700 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  {/* Title with icon */}
                  <div className="flex items-start mb-3">
                    <BookOpen
                      size={20}
                      className="text-emerald-600 mt-1 mr-3 flex-shrink-0"
                    />
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                      {post.title}
                    </h3>
                  </div>

                  {/* Content preview */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {getPlainTextSummary(post.content, 120)}
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                    <span>Lire plus</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
