import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { db, storage } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const CreateBlogPage = () => {
  const { user, logout } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const categoryOptions = [
    "Langue",
    "Culture",
    "Éducation",
    "Actualité",
    "Autre",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !category || !imageFile) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    try {
      const imageRef = ref(storage, `posts/${Date.now()}-${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageURL = await getDownloadURL(imageRef);

      await addDoc(collection(db, "posts"), {
        title,
        content,
        category,
        imageURL,
        createdAt: serverTimestamp(),
      });

      toast.success("Article publié avec succès !");
      setTitle("");
      setContent("");
      setCategory("");
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Erreur lors de la publication :", error);
      toast.error("Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pt-28 pb-12 min-h-screen bg-gray-50">
      {user && (
        <div className="absolute top-6 right-6 z-50" ref={menuRef}>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              {user.email}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Créer un article de blog
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Entrez le titre ici..."
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Catégorie
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-150"
              >
                <option value="" disabled>
                  Choisissez une catégorie
                </option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-600"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Aperçu"
                  className="mt-3 max-h-64 rounded-lg shadow"
                />
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Contenu
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="bg-white rounded-lg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary px-6 py-2 rounded-md"
                disabled={loading}
              >
                {loading ? "Publication en cours..." : "Publier l'article"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateBlogPage;
