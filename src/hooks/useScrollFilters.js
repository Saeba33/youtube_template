import { useRef } from "react";  
  
  export const scrollContainerRef = useRef(null);

  export const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150 });
    }
  };

  export const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150 });
    }
};