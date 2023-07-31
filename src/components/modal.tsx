import { MouseEvent, ReactNode, useEffect, useState } from "react";

const Modal = ({
  children,
  toggle,
  open
}: {
  toggle: () => void
  open: boolean
  children?: ReactNode
}) => {
  const [isOpen, setiSOpen] = useState(open);

  useEffect(() => {
    setiSOpen(open)
  }, [open]);

  const close = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget != e.target) return
    toggle()
  }

  return (
    <div onClick={close} className={`d-${isOpen ? 'block' : 'none'} d-flex justifuy-content-center align-items-center position-fixed top-0 bottom-0 end-0 start-0 w-100 h-100 bg-dark bg-opacity-50`}>
      <div className="col-md-8 rounded-2 col-lg-7 col-xl-6 bg-white mx-3 mx-md-auto">
        {children}
      </div>
    </div>
  )
};

export default Modal;
