import React from "react";

import "./CourseGoalItem.css";
interface CourseGoalItemProps {
  id: string;
  onDelete: (id: string) => void;
  children: string;
}
const CourseGoalItem: React.FC<CourseGoalItemProps> = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
