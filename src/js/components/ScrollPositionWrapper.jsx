import { useEffect } from "react";

function ScrollPositionWrapper(props) {
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition !== null) {
      const scrollY = parseInt(storedScrollPosition);
      window.scrollTo(0, scrollY);
    }
  }, []);

  return <>{props.children}</>;
}

export default ScrollPositionWrapper;
