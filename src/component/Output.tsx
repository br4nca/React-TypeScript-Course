import { ReactNode, useState } from "react";

interface OutputProps {
  children: ReactNode;
}
const Output: React.FC<OutputProps> = (props) => {
  return <p>{props.children}</p>;
};
export default Output;
