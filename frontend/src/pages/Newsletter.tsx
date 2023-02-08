import React from "react";
import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";
interface NewsletterPageProps {}
const NewsletterPage: React.FC<NewsletterPageProps> = (props) => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
};

export default NewsletterPage;

export async function action({ request }: any) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
