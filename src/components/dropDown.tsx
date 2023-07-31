import { ReactNode, useEffect, useState } from "react";
interface DropDownProp {
  open: boolean;
  children: ReactNode
  toggleElem: ReactNode
  className?: string
  dropDownClassName?: string
}
const DropDown = ({ open, children, toggleElem, className, dropDownClassName }: DropDownProp) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(open)
  }, [open]);

  return (
    <div className={className}>
      {toggleElem}
      <div className={`d-${show ? 'block' : 'none'} ${dropDownClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
