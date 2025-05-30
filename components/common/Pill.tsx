import React from "react";

type Filter = {
  label: string;
  value: string | number;
};

type PillProps = {
  filters: Filter[];
  onClick?: (filter: Filter) => void;
  selectedValue?: string | number;
};

const Pill: React.FC<PillProps> = ({ filters, onClick, selectedValue }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isSelected = selectedValue === filter.value;
        return (
          <button
            key={filter.value}
            onClick={() => onClick?.(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              isSelected
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            type="button"
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default Pill;
