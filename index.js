import React from "react";
import { View, requireNativeComponent } from "react-native";

const RoundedProgressBarIOS = requireNativeComponent("RoundedProgressBarIOS");

const RoundedProgressBar = props => {
  const {
    percent,
    borderWidth,
    color,
    bgColor,
    backgroundWidth,
    shadowColor
  } = props;

  const options = {
    percent: percent || 1,
    borderWidth: borderWidth || 4,
    size: props.size || 50,
    color: color || "#c2c2c2",
    bgColor: bgColor || "#fff",
    backgroundWidth: backgroundWidth || 4,
    shadowColor: shadowColor || "#9e9e9e"
  };

  return (
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        <RoundedProgressBarIOS props={options} />
      </View>
      {props.children}
    </View>
  );
};

export default RoundedProgressBar;
