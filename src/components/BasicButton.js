import React from "react";
import { Button, Spinner } from "react-bootstrap";
const BasicButton = (props) => {
  const {
    variant,
    onClick,
    label,
    size,
    icon,
    className,
    isLoading,
    loaderVariant,
    loaderSize,
    type
  } = props;
  const buttonStyle = {
    backgroundColor:"#e87b33",
    borderColor: "#e87b33",
  };
  return (
    <Button
      style={buttonStyle}
      variant={variant}
      className={className}
      size={size}
      type={type}
      onClick={onClick}
      disabled={!isLoading ? false : true}
    >
      {!isLoading ? (
        <>
          {icon} {label}
        </>
      ) : (
        <>
          <Spinner
            size={`${!loaderSize ? "sm" : loaderSize}`}
            variant={`${!loaderVariant ? "#e87b33" : loaderVariant}`}
          />
        </>
      )}
    </Button>
  );
};
export default BasicButton;
