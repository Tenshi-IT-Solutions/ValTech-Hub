"use client";

// This file provides a simplified animation library
// to avoid installing framer-motion as a dependency

import { useEffect, useRef, useState } from 'react';

export const motion = {
  div: function AnimatedDiv({ children, initial, animate, transition, whileInView, viewport, className, ...props }) {
    return <AnimatedElement 
      element="div" 
      initial={initial} 
      animate={animate} 
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </AnimatedElement>;
  }
};

function AnimatedElement({ 
  element = 'div', 
  children, 
  initial, 
  animate, 
  transition = {}, 
  whileInView,
  viewport = { once: false },
  className = '',
  ...props 
}) {
  const ref = useRef(null);
  const [state, setState] = useState(initial || {});
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!whileInView) {
      const timer = setTimeout(() => {
        setState(animate || {});
      }, (transition.delay || 0) * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [animate, transition, whileInView]);
  
  useEffect(() => {
    if (!whileInView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (viewport.once) {
            observer.disconnect();
          }
        } else if (!viewport.once) {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
        ...viewport
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [whileInView, viewport]);
  
  useEffect(() => {
    if (whileInView) {
      if (isInView) {
        setState(whileInView);
      } else {
        setState(initial || {});
      }
    }
  }, [isInView, initial, whileInView]);
  
  const getStyles = () => {
    const styles = {};
    
    // Handle opacity
    if (state.opacity !== undefined) {
      styles.opacity = state.opacity;
    }
    
    // Handle transforms
    const transforms = [];
    if (state.x !== undefined) transforms.push(`translateX(${state.x}px)`);
    if (state.y !== undefined) transforms.push(`translateY(${state.y}px)`);
    if (state.scale !== undefined) transforms.push(`scale(${state.scale})`);
    if (state.rotate !== undefined) transforms.push(`rotate(${state.rotate}deg)`);
    
    if (transforms.length > 0) {
      styles.transform = transforms.join(' ');
    }
    
    // Add transition
    const duration = (transition.duration || 0.3);
    const delay = (transition.delay || 0);
    const ease = transition.ease || 'ease';
    
    styles.transition = `all ${duration}s ${ease} ${delay}s`;
    
    return styles;
  };
  
  const Element = element;
  return (
    <Element
      ref={ref}
      className={className}
      style={getStyles()}
      {...props}
    >
      {children}
    </Element>
  );
}