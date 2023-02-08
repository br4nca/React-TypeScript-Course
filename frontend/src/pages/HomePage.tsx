import React from "react";
import PageContent from "../components/PageContent";
interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <PageContent title="Welcome!">
      <p>Browse all our amazing events!</p>
    </PageContent>
  );
};

export default HomePage;
