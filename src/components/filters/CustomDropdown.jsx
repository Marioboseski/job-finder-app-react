import { useState } from "react";
import "./dropdown.css";

const CustomDropdown = ({ label, items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggle}>
        {selected || label}
      </button>

      {open && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(item);
                setOpen(false);
                onSelect(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
