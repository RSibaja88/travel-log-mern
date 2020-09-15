import React, { useState, useForceUpdate } from "react";

//create forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => ++value); // update the state to force render
}

function forcingUpdate() {
  // calling hook here
  const forceUpdate = useForceUpdate();
  return forceUpdate;
}

export default forcingUpdate;
