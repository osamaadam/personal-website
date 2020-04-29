import React from "react";

const useScroll = (ref?: React.RefObject<HTMLDivElement>) =>
  window.scrollTo({
    top: ref?.current?.offsetTop ? ref.current.offsetTop - 70 : 0,
    behavior: "smooth"
  });

export default useScroll;
