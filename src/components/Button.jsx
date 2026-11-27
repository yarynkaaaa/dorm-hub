// props: children, type, variant ("primary" | "secondary"), disabled,
//        pressed (необов'язково: true/false вмикає режим перемикача), onClick
function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  pressed,
  onClick,
}) {
  const className = `btn btn-${variant}${pressed ? " is-pressed" : ""}`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      aria-pressed={pressed}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
