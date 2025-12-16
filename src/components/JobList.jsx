import { useState } from "react";
import "./job-list.css";

const JobList = ({ jobs, onBookmark }) => {

  const [ toastJob, setToastJob ] = useState(null)
  const [toastMessage, setToastMessage] = useState("");

  const handleSave = (job) => {
    const alreadySaved = onBookmark(job);

    setToastJob(job.id);
    setToastMessage(alreadySaved ? "Saved" : "already saved");

    setTimeout(() => {
      setToastJob(null);
      setToastMessage("")      
    }, 2000);
  }

  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={job.id} className="job-card">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
          <p className="job-location">{job.location}</p>
          <p className="job-salary">{job.salary || "No salary info"}</p>

          <button onClick={() => handleSave(job)}>Save job</button>

          {toastJob === job.id && (
            <span className="toast-notification show">{toastMessage}</span>
          )}          
        </li>
      ))}
    </ul>
  );
};

export default JobList;