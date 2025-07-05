import { useEffect, useState } from "react";
import { onAuthStateChanged, User,  signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

    const logout = () => signOut(auth);

  return { user, loading, logout };
};
