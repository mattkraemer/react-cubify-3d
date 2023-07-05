import React, { useState } from 'react';

const React3DCube = ({width, height, depth}) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [depth, setDepth] = useState(100);

  const cubeStyle = {
    width: `${width}px`,
    height: `${height}px`,
    transformStyle: 'preserve-3d',
    transform: 'rotateX(60deg) rotateZ(-45deg)',
  };

  const faceStyle = {
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid #ccc',
  };

  return (
    <div style={cubeStyle}>
      <div style={{...faceStyle, transform: `translateZ(${depth/2}px)`}}></div>
      <div style={{...faceStyle, transform: `rotateY(90deg) translateZ(${width/2}px)`}}></div>
      <div style={{...faceStyle, transform: `rotateY(180deg) translateZ(${depth/2}px)`}}></div>
      <div style={{...faceStyle, transform: `rotateY(-90deg) translateZ(${width/2}px)`}}></div>
      <div style={{...faceStyle, transform: `rotateX(90deg) translateZ(${height/2}px)`}}></div>
      <div style={{...faceStyle, transform: `rotateX(-90deg) translateZ(${height/2}px)`}}></div>
    </div>
  );
};

export default React3DCube;