import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import LocationFilter from "../../components/filters/LocationFilter";
import CompanyFilter from "../../components/filters/CompanyFilter";
import SalaryFilter from "../../components/filters/SalaryFilter";
import JobTitleFilter from "../../components/filters/JobTitleFilter";
import JobList from "../../components/JobList";
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

  useEffect(() => {
    const fetchInformations = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobs");
        const data = await response.json();

        setJobs(data);

        const uniqueLocations = [...new Set(data.map(job => job.location))];
        setLocations(uniqueLocations);

        const uniqueCompanies = [...new Set(data.map(job => job.company))];
        setCompanies(uniqueCompanies);

      } catch (error) {
        console.log("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInformations();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const salary = job.salary || 0;

    const salaryMatch =
      selectedSalary === "" ||
      salaryRangeMatch(salary, selectedSalary);

    return (
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedCompany ? job.company === selectedCompany : true) &&
      (selectedTitle ? job.title.toLowerCase().includes(selectedTitle.toLowerCase()) : true) &&
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
            <LocationFilter locations={locations} onChange={setSelectedLocation} />
            <CompanyFilter companies={companies} onChange={setSelectedCompany} />
            <SalaryFilter onChange={setSelectedSalary} />
            <JobTitleFilter onChange={setSelectedTitle} />
          </div>

          <div className="jobs-list">
            <JobList jobs={filteredJobs} onBookmark={handleBookmark} />
          </div>

          {loading && (
            <p>Loading jobs...</p>
          )}
        </main>
      </div>

    </div>
  );
};

export default Jobs;

function salaryRangeMatch(salary, rangeString) {
  if (rangeString.includes("+")) {
    const min = parseInt(rangeString);
    return salary >= min;
  }

  const [min, max] = rangeString.split("-").map(n => parseInt(n));
  return salary >= min && salary <= max;
}
