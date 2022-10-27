import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Webcam from 'react-webcam';
import React from 'react';

export default function Home() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [cameraPosition, setCameraPosition] = React.useState('user');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  const videoConstraints = {
    facingMode: cameraPosition
  }

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <button onClick={() => setCameraPosition({ exact: "environment" })}>Change camera</button>
      {imgSrc && (
        <img
          src={imgSrc}
          alt='gambar'
        />
      )}
    </>
  );
}
