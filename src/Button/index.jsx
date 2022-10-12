import './style.css';

export const PrimaryButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="primary-btn">{children}</button>
  )
};
