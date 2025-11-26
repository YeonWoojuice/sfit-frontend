import { useState } from "react";

export function useFilterToggle() {
  const [toggle, setToggle] = useState("");

  return { toggle, setToggle };
}
