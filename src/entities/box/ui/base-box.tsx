import { BaseBox } from "../types";

export const BaseBoxComponent: React.FC<BaseBox> = (props) => {
  const { x, y, width, height } = props;

  return (
    <div
      style={{
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
