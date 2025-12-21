import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import LocationFilter from "../../components/filters/LocationFilter";
import CompanyFilter from "../../components/filters/CompanyFilter";
import SalaryFilter from "../../components/filters/SalaryFilter";
import JobTitleFilter from "../../components/filters/JobTitleFilter";
import JobList from "../../components/JobList";
import mockJobs from "../../../backend/mockData";
import "./jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ CORRECT useEffect
  useEffect(() => {
    try {
      setJobs(mockJobs);

      const uniqueLocations = [
        ...new Set(mockJobs.map(job => job.location))
      ];
      setLocations(uniqueLocations);

      const uniqueCompanies = [
        ...new Set(mockJobs.map(job => job.company))
      ];
      setCompanies(uniqueCompanies);
    } catch (error) {
      console.error("Jobs loading error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredJobs = jobs.filter(job => {
    const salary = job.salary || 0;

    const salaryMatch =
      selectedSalary === "" ||
      salaryRangeMatch(salary, selectedSalary);

    return (
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedCompany ? job.company === selectedCompany : true) &&
      (selectedTitle
        ? job.title.toLowerCase().includes(selectedTitle.toLowerCase())
        : true) &&
      salaryMatch
    );
  });

  const handleBookmark = (job) => {
    const stored = JSON.parse(localStorage.getItem("bookmarks")) || [];

    const alreadySaved = stored.find(item => item.id === job.id);
    if (alreadySaved) return false;

    const updated = [...stored, job];
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    return true;
  };

  return (
    <div className="jobs-layout">
      <aside className="sidebar">
        <Navbar />
      </aside>

      <div className="container">
        <main className="jobs-content">
          <div className="filters-content">
            <LocationFilter
              locations={locations}
              onChange={setSelectedLocation}
            />
            <CompanyFilter
              companies={companies}
              onChange={setSelectedCompany}
            />
            <SalaryFilter onChange={setSelectedSalary} />
            <JobTitleFilter onChange={setSelectedTitle} />
          </div>

          {loading ? (
            <p>Loading jobs...</p>
          ) : (
            <div className="jobs-list">
              <JobList
                jobs={filteredJobs}
                onBookmark={handleBookmark}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Jobs;

// ================= HELPER =================
function salaryRangeMatch(salary, rangeString) {
  if (!rangeString) return true;

  if (rangeString.includes("+")) {
    const min = parseInt(rangeString);
    return salary >= min;
  }

  const [min, max] = rangeString.split("-").map(Number);
  return salary >= min && salary <= max;
}
