import React, { useEffect, useState } from "react";

const Modal: any = ({
  children,
  onClose,
  allowToClose = true,
  title,
  header,
  footer,
  id = "modal-id",
  show = false,
  containerStyle,
  unsetHeight,
}: any) => {
  const [isVisible, setVisible] = useState(show);

  const close = (): void => {
    setVisible(false);
    onClose && onClose();
  };
  return (
    <div id={id} className="overflow-y-auto overflow-x-hidden fixed z-50 top-0 right-0 left-0 h-full">
      <div className="bg-red-200 rounded-lg mx-auto w-fit relative p-4 mt-[50vh]">
        BLAAA
      </div>
    </div>
  );
};

export default Modal;
