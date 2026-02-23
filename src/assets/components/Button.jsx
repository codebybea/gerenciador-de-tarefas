function Button(props) {
  const { className, ...rest } = props;
  return (
    <button {...rest} className={`bg-slate-400 p-2 rounded-md text-white ${className || ''}`}>
      {props.children}
    </button>
  )
}

export default Button;