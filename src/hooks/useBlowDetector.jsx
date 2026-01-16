import { useEffect, useRef } from "react";

export default function useBlowDetector(onBlow) {
  const hasBlown = useRef(false);

  useEffect(() => {
    let audioContext;
    let analyser;
    let microphone;
    let dataArray;

    async function initMic() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);

        dataArray = new Uint8Array(analyser.frequencyBinCount);

        detectBlow();
      } catch (err) {
        console.error("Mic access denied", err);
      }
    }

    function detectBlow() {
      analyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      const volume = sum / dataArray.length;

      if (volume > 80 && !hasBlown.current) {
        hasBlown.current = true;
        onBlow();
      }

      requestAnimationFrame(detectBlow);
    }

    initMic();

    return () => {
      audioContext?.close();
    };
  }, [onBlow]);
}
