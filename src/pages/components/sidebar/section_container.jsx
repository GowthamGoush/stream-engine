import React from "react";
import { Link } from "react-router-dom";

const SectionContainer = ({ section }) => {
  const { title, items } = section;

  return (
    <section className="flex flex-col p-4">
      {title && <h3 className="p-2 font-semibold">{title}</h3>}
      {items.map((item) => (
        <Link to={item?.path}>
          <button className="w-full flex items-center p-2 rounded-md hover:bg-gray-100 text-sm">
            {item?.name}
          </button>
        </Link>
      ))}
    </section>
  );
};

export default SectionContainer;
