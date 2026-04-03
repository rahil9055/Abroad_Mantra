import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  url: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({ url, className = "", loop = true, autoplay = true }: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [url]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
};

export default LottieAnimation;
