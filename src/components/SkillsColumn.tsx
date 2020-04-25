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
  const Highlighted = highlighted.map((element) => (
    <li>
      <span className="highlight">{element}</span>
    </li>
  ));
  const Normal = normal.map((element) => <li>{element}</li>);

  return (
    <li className="stack__li">
      <h4>{columnTitle}</h4>
      <ul>
        {Highlighted}
        {Normal}
      </ul>
    </li>
  );
};

export default SkillsColumn;
