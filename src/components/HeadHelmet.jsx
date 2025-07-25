import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function HeadHelmet({ title }) {
  if (title === "/my-portfolio/") {
    title = "Home";
  } else {
    title = useLocation().pathname;
    title = title.replace("/my-portfolio/", "");
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content="About Me!" />
        </Helmet>
      </HelmetProvider>
    </>
  );
}
