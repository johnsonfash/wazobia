const Spinner = ({ className }: { className?: string }) => {
  return <div style={{ marginRight: '2px' }} className={`${className} spinner-border spinner-border-sm`} role="status"></div>;
};

export default Spinner;
