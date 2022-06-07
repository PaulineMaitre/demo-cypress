import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

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

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const close = (): void => {
    setVisible(false);
    onClose && onClose();
  };
  return (
    <div className={`modal ${isVisible && "active"}`} id={id}>
      {allowToClose && (
        <div className="modal-overlay" aria-label="Close" onClick={close} />
      )}
      <div
        className={`modal-container ${styles.container} ${
          unsetHeight ? styles.unsetHeight : ""
        }`}
        style={{ ...containerStyle }}
      >
        <div className={`modal-header text-center d-block ${styles.header}`}>
          {allowToClose && (
            <div
              className={styles.closeBtn}
              aria-label="Close"
              onClick={close}
            />
          )}
          {title && <div className={`h5 ${styles.title}`}>{title}</div>}
        </div>
        {header && <>{header}</>}
        <div className="modal-body h-100">{children}</div>
        {footer && <div className="modal-footer pr-0 pl-0 pt-0">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
