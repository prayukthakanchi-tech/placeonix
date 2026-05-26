import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getCompanies() {
  const querySnapshot = await getDocs(
    collection(db, "companies")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}