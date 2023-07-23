interface ButtonInterface {
  displayName: string;
  link: string;
}

const Button = (props: ButtonInterface) => {
  return (
    <button
      className="bg-transparent p-5  border-[5px] border-cyan-500 md:w-[470px] w-[350px] text-white m-2"
      onClick={() => {
        window.open(props.link), "_blank";
      }}
    >
      {props.displayName}
    </button>
  );
};

export default Button;
