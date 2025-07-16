import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from "lucide-react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

type Post = {
  id: string;
  title: string;
  content: string;
  category: string;
  imageURL: string;
  createdAt: Date;
  readingTime?: string;
};

const BlogPostDetail = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("Identifiant d'article manquant");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = {
            id: docSnap.id,
            ...docSnap.data(),
          } as Post;
          setPost(postData);
        } else {
          setError("Article non trouvé");
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error);
        setError("Erreur lors du chargement de l'article");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.title,
          url: window.location.href,
        });
      } catch {
        console.log("Partage annulé");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  const formatDate = (createdAt: any) => {
    if (!createdAt) return "";

    const date =
      createdAt.seconds != null
        ? new Date(createdAt.seconds * 1000)
        : new Date(createdAt);

    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Article non trouvé"}
          </h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="relative">
        <header
          className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${post.imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        ></header>

        <div className="absolute bottom-[1rem] left-0 right-0 p-6 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500 text-white">
                <Tag size={14} className="mr-1" />
                {post.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-200 space-x-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {formatDate(post.createdAt)}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readingTime || "5 min"} de lecture
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-500/10 text-primary-700 hover:bg-primary-500/25 transition-colors rounded-md font-medium text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour au blog
          </button>

          <button
            onClick={handleShare}
            className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-500/10 text-primary-700 hover:bg-primary-500/25 transition-colors rounded-md font-medium text-sm sm:text-base"
          >
            <Share2 size={14} className="mr-2" />
            Partager
          </button>
        </div>

        <div className="py-6 sm:py-10 lg:py-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <CallToAction />
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostDetail;
