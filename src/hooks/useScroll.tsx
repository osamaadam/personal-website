import React from "react";

const useScroll = (
  ref?: React.RefObject<HTMLDivElement>,
  pos: number = 0,
  behavior: ScrollOptions["behavior"] = "smooth"
) =>
  window.scrollTo({
    top: ref?.current?.offsetTop ? ref.current.offsetTop - 70 : pos,
    behavior
  });

export default useScroll;
