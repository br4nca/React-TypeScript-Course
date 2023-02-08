import React, { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import "./NewsletterSignup.css";

interface NewsletterSignupProps {}
const NewsletterSignup: React.FC<NewsletterSignupProps> = (props) => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" action="/newsletter" className="newsletter">
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
};

export default NewsletterSignup;
