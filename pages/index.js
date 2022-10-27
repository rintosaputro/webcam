import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Webcam from 'react-webcam';
import React from 'react';

export default function Home() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <img
          src={imgSrc}
          alt='gambar'
        />
      )}
    </>
  );
}
