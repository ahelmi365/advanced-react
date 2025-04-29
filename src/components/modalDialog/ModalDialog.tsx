import { useRef } from "react";

const ModalDialog = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handelOpenDialog = () => {
    dialogRef?.current?.showModal();
  };

  const handelCloseDialog = () => {
    dialogRef?.current?.close();
  };

  return (
    <div>
      <button onClick={handelOpenDialog} type="button">
        Open Modal
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target == dialogRef.current) {
            dialogRef.current?.close();
          }
        }}
        style={{
          padding: "0",
          border: "none",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            padding: "1rem",
            border: "1px solid red",
          }}
        >
          <h2>Dialog Body</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>

          <button onClick={handelCloseDialog} type="button">
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ModalDialog;
