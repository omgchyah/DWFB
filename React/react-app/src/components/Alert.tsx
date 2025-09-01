import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "";
  onClose: () => void;
}

const Alert = ({ variant = "", children, onClose }: Props) => {

  return (
    <div
      className={"alert alert-" + variant + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
