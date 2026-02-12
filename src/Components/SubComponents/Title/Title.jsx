import React from "react";

const Title = ({ title, bottomSpace }) => {
  return (
    <div>
      <h1 className="section-title" style={{ marginBottom: bottomSpace }}>
        {title}
      </h1>
    </div>
  );
};

export default Title;
