import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxLocation }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: boxLocation.topRow,
            right: boxLocation.rightCol,
            bottom: boxLocation.bottomRow,
            left: boxLocation.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
