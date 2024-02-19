import { useState, useEffect } from "react";
import yoga from "@/assets/yoga.png";
import aula_yoga from "@/assets/aula_yoga.png";
import natacao from "@/assets/natacao.png";

const images = [yoga, aula_yoga, natacao];

const useChangeIamge = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 4000)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])

  return (images[currentIndex])
};

export default useChangeIamge;