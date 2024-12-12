interface Properties {
  children : string | React.ReactElement;
}

const Button = ({children}:Properties) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;