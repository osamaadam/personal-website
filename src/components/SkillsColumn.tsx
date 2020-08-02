import React from "react";

interface Props {
  columnTitle: string;
  highlighted?: string[];
  normal?: string[];
}

const SkillsColumn: React.FC<Props> = ({
  columnTitle,
  highlighted = [],
  normal = []
}) => {
  const Highlighted = highlighted.map((element, index) => (
    <li key={index}>
      <span className="highlight">{element}</span>
    </li>
  ));
  const Normal = normal.map((element, index) => <li key={index}>{element}</li>);

  return (
    <>
      <li className="stack__li">
        <h3>{columnTitle.toUpperCase()}</h3>
        <ul>
          {Highlighted}
          {Normal}
        </ul>
      </li>
    </>
  );
};

export default SkillsColumn;
