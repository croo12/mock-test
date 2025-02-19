import type { Box } from "../model/box";

interface BaseBoxComponentProps {
  box: Box;
}

export const BaseBoxComponent: React.FC<BaseBoxComponentProps> = (props) => {
  const {
    box: { x, y, width, height, visible },
  } = props;

  return (
    <div
      style={{
        display: visible ? "block" : "none",
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        border: "2px solid red",
      }}
    />
  );
};
