import CustomDropdown from "./CustomDropdown";

const CompanyFilter = ({ companies, onChange }) => {
  return (
    <CustomDropdown
      label="Company"
      items={companies}
      onSelect={onChange}
    />
  );
};

export default CompanyFilter;
