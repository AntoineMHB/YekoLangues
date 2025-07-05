import React, { useState } from "react";
import ReactQuill from "react-quill";
import { db, storage } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

const CreateBlogPage = () => {
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

  return (
    <div className="pt-28 pb-12 min-h-screen bg-gray-50">
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
