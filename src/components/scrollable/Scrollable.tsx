import ScrollableWithMovingBlock from "./ScrollableWithMovingBlock";
import VeryComplicatedComponent from "./VeryComplicatedComponent";
import VerySlowComponent from "./VerySlowComponent";

const Scrollable = () => {
  return (
    <ScrollableWithMovingBlock
      children={
        <>
          <VerySlowComponent />
          <VeryComplicatedComponent />
        </>
      }
    />
  );
};

export default Scrollable;
