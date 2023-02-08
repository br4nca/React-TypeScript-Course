import { ReactNode } from "react";
import "./PageContent.css";
interface PageContentProps {
  title: string;
  children: ReactNode;
}
const PageContent: React.FC<PageContentProps> = ({ title, children }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
