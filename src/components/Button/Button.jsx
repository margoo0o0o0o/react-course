import './Button.css';

function Button({ text, onClick, type = 'button' }) {
  return (
    <button className="button accent" type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;