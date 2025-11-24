import { useState } from "react";
import styles from "../../styles/main/FilterMenu.module.css";
import FilterSelect from "./FilterSelect";

function FilterMenu({ filter, onClick }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const filters = [
    { label: "지역", key: "regions" },
    { label: "종목", key: "sports" },
    { label: "코치", key: "coach" },
  ];

  const handleToggle = (key) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };
  return (
    <div className={styles.menus}>
      {filters.map((item) => (
        <FilterSelect
          key={item.key}
          label={item.label}
          filter={filter}
          filterkey={item.key}
          onClick={onClick}
          isOpen={activeMenu === item.key}
          onToggle={() => handleToggle(item.key)}
        />
      ))}
    </div>
  );
}

export default FilterMenu;
