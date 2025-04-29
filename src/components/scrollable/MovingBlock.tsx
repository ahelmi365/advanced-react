const MovingBlock = ({ position }: { position: number }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: position,
        padding: "1rem",
        border: "1px solid gray",
        background: "wheat",
      }}
    >
      MovingBlock {position}
    </div>
  );
};

export default MovingBlock;
