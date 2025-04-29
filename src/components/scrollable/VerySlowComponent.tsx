import { useEffect } from "react";

const VerySlowComponent = () => {
  console.log("VerySlowComponent rendered");
  useEffect(() => {}, []);
  return <div>VerySlowComponent</div>;
};

export default VerySlowComponent;
