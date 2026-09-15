import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top on route change, unless the new URL carries a hash (handled by the page itself). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
