'use client'
import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

export default function Test() {
  const webcamRef = useRef(null);
  const [snapshot, setSnapshot] = useState(null);
  const [captured, setCaptured] = useState(false);

  const capture = useCallback(() => {
    if (!webcamRef.current) return;

    const image = webcamRef.current.getScreenshot();

    setCaptured(true);
    setSnapshot(image);
  }, []);

  const redo = () => {
    setCaptured(false);
    setSnapshot(null);
  };

  const confirm = async () => {
    if (!snapshot) return;
    console.log('Confirming snapshot:', snapshot);
    const res = await fetch('/api/decodeImage', {
      method: 'POST',
      body: JSON.stringify({
        snapshot,
      }),
    });
    const x = await res.json();
  };

  return (
    <div>
      {captured && snapshot && <img className="mx-auto border-none rounded-3xl my-10" src={snapshot} alt="snapshot" />}
      {!captured && (
        <div className="flex mx-auto w-4/5 lg:w-1/2 my-10">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'environment' }}
            style={{ width: '100%', height: '100%', borderRadius: '2em' }}
          />
        </div>
      )}
      <div className="mt-10 flex justify-center items-center h-screenflex mx-auto">
        <button
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={capture}
        >
          Capture
        </button>
        {captured && (
          <>
            <button
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={redo}
            >
              Redo
            </button>
            <button
              className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={confirm}
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
}
