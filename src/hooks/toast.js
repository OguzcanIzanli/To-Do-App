import { useState, useEffect } from "react";

const useToast = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (text) => {
    setMessage(text);
    setIsVisible(true);
  };

  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  return { showToast, message, isVisible };
};

export default useToast;
