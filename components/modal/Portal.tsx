import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
  const element =
    typeof window !== "undefined" && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
