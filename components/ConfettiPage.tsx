"use client";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
const ConfettiPage = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1000}
        tweenDuration={7000}
        recycle={false}
      />
    </div>
  );
};

export default ConfettiPage;
