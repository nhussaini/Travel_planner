import { useState } from "react";

function useTest() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: [],
  });

  return { state };
}

export { useTest };
