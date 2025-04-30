import { useState } from "react";
import MovingBlock from "./MovingBlock";

const ScrollableWithMovingBlock = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [position, setPosition] = useState(10);

  const onScroll = (e) => {
    const { scrollTop } = e.target;
    // console.log(scrollTop, scrollHeight, clientHeight);

    setPosition(scrollTop);
  };
  return (
    <div
      onScroll={onScroll}
      style={{
        height: "300px",
        overflowY: "scroll",
        border: "1px solid #ccc",
      }}
    >
      <MovingBlock position={position} />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia
          dolor ea. Dignissimos doloribus ipsum culpa adipisci recusandae
          ratione? Nobis est consequuntur obcaecati eum. Quod perferendis nam
          excepturi fugiat magni?
        </p>
      </div>
      {children}
    </div>
  );
};

export default ScrollableWithMovingBlock;
