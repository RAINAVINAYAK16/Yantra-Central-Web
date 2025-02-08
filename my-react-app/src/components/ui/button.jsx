import PropTypes from "prop-types";

export function Button({ children, variant = "default", ...props }) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold";
  const styles = {
    default: "bg-black text-white",
    outline: "border-2 border-black text-black",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "outline"]), 
};
