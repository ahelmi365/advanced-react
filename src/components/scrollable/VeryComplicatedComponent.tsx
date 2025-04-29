import { useEffect } from "react";

const VeryComplicatedComponent = () => {
  console.log("VeryComplicatedComponent rendered");
  useEffect(() => {}, []);
  return <div>VeryComplicatedComponent</div>;
};

export default VeryComplicatedComponent;
