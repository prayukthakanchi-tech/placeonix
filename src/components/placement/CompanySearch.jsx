import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function CompanySearch() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCompanies() {
      const querySnapshot = await getDocs(
        collection(db, "companies")
      );

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setCompanies(data);
    }

    fetchCompanies();
  }, []);

  const filtered = companies.filter(company =>
    company.name.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{padding:"20px"}}>
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {filtered.map(company => (
        <div key={company.id}>
          <h3>{company.name}</h3>
          <p>{company.package}</p>
          <p>{company.roles}</p>
        </div>
      ))}
    </div>
  );
}