import React from "react";

const SectionContainer = (props) => {
  const { items } = props;

  return (
    <section className="flex flex-col p-4">
      {items.map((item) => (
        <button className="flex items-center p-2 rounded-md hover:bg-gray-100">
          {item}
        </button>
      ))}
    </section>
  );
};

export default SectionContainer;
