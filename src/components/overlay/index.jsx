const container = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparência escura
  zIndex: 10,
  cursor: 'pointer',
};

const Overlay = ({ onClick }) => {
  return (
    <div style={container} onClick={onClick}></div>
  );
};

export default Overlay;
