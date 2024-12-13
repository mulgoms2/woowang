'use client';

import React, { useEffect, useRef } from 'react';

const Page = () => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    const initVideoStream = async () => {
      try {
        const videoStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        if (videoElement.current) {
          videoElement.current.srcObject = videoStream; // 화면 표시
        }
      } catch (error) {
        console.error('Error accessing display media:', error);
      }
    };

    const initRTCPeerConnection = async () => {
      if (peerConnectionRef.current === null) {
        peerConnectionRef.current = new RTCPeerConnection();

        const dataChannel =
          peerConnectionRef.current.createDataChannel('control');
        dataChannel.onmessage = (event) => {
          const controlData = JSON.parse(event.data);

          console.log('이게뭘가', controlData);
        };
      }
    };

    initRTCPeerConnection();
    initVideoStream();
  }, []);

  return (
    <div>
      <video
        ref={videoElement}
        autoPlay
        playsInline // 모바일에서 전체 화면으로 전환되지 않도록
        style={{ width: '100%', height: 'auto' }}
      ></video>
    </div>
  );
};

export default Page;
