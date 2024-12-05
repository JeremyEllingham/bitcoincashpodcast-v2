import React from "react";
import ReactPlayer from "react-player/youtube";

const CustomReactPlayer = ({ url }) => {
  return (
    <ReactPlayer
      style={{
        paddingTop: 10,
        paddingBottom: 40,
        minHeight: 250,
        maxHeight: 500,
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      width="100%"
      url={url}
      target="_blank"
    />
  )
}

export default CustomReactPlayer