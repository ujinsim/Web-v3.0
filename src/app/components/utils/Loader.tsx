// src/components/Loader.tsx
import React from "react";
import Lottie from "lottie-react";
import ProgressBar from "../../../../public/Progress.json";

interface LoaderProps {
  message: string;
  subMessage: string;
}

interface SmallLoaderProps {
  className?: string;
}

const SmallLoader: React.FC<SmallLoaderProps> = ({ className }) => {
  return (
    <div className={`w-4 h-4 ${className}`}>
      <Lottie
        animationData={ProgressBar}
        loop={true}
        className="w-full h-full"
      />
    </div>
  );
};

const Loader: React.FC<LoaderProps> = ({ message, subMessage }) => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-full bg-bgDeepGray/60">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/4 md:w-1/4 flex flex-rowjustify-center items-center">
          <Lottie
            animationData={ProgressBar}
            loop={true}
            className="w-[100px] h-[100px] m-auto flex flex-row justify-center items-center "
          />
        </div>
        <p className="text-white text-center text-xl mt-2 animate-subtleBlink">
          {/* 복습문제와 요약문을 생성하는 중이에요. */}
          {message}
        </p>
        <p className="text-gray-400 text-center text-base mt-2">
          {/* 약 1분 정도 소요될 수 있어요! */}
          {subMessage}
        </p>
      </div>
    </div>
  );
};

export { SmallLoader };
export default Loader;
