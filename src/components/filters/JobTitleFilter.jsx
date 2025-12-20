const JobTitleFilter = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search job title"
      onChange={(e) => onChange(e.target.value)}
      className="job-title-input"
    />
  );
};

export default JobTitleFilter;
