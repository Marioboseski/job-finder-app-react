import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./bookmarks.css";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(stored);
  }, []);

  const handleRemoveBookmark = (jobId) => {
    const updatedBookmarks = bookmarks.filter(job => job.id !== jobId);

    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };


  return (
    <div className="layout">

      <aside className="sidebar">
        <Navbar />
      </aside>

      <div className="container">
        <main className="content">
          <h2 className="page-title">
            Saved Jobs ({bookmarks.length})
          </h2>

          {bookmarks.length === 0 && (
            <p>You haven't saved any jobs yet.</p>
          )}

          <div className="jobs-list">
            {bookmarks.map(job => (
              <div className="job-row" key={job.id}>
                <span className="job-title">{job.title}</span>
                <span className="job-company">{job.company}</span>
                <span className="job-location">{job.location}</span>
                <span className="job-salary">{job.salary}</span>
                <button className="remove-job" onClick={() => handleRemoveBookmark(job.id)}>Remove job</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );

};

export default Bookmarks;
