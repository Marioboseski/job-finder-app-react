import CustomDropdown from "./CustomDropdown";

const LocationFilter = ({ locations, onChange }) => {
  return (
    <CustomDropdown
    label="Location"
    items={locations}
    onSelect={onChange}/>
  );
}

export default LocationFilter;