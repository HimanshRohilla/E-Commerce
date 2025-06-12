import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const FadeWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeIn} 0.8s ease forwards;
    `}
`;

const FadeInOnScroll = ({ children, delay = "0s" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <FadeWrapper ref={domRef} isVisible={isVisible} style={{ animationDelay: delay }}>
      {children}
    </FadeWrapper>
  );
};

export default FadeInOnScroll;
