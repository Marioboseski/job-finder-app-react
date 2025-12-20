import CustomDropdown from "./CustomDropdown";

const SalaryFilter = ({ onChange }) => {
  const salaryRanges = [
    "500-1000",
    "1000-2000",
    "2000-3000",
    "3000-5000",
    "5000-7000",
    "7000-9000",
    "10000+"
  ];

  return (
    <CustomDropdown
      label="Salary range"
      items={salaryRanges}
      onSelect={onChange}
    />
  );
};

export default SalaryFilter;
