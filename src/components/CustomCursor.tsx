'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    function onMouseMove(e: MouseEvent) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }

    function animateFollower() {
      const dx = mousePos.x - followerPos.x;
      const dy = mousePos.y - followerPos.y;
      const newX = followerPos.x + dx * 0.15;
      const newY = followerPos.y + dy * 0.15;
      setFollowerPos({ x: newX, y: newY });
      requestAnimationFrame(animateFollower);
    }

    animateFollower();
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [mousePos, followerPos]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const hoverElements = document.querySelectorAll('a, button, .gallery-item, .cutout-portrait');
    
    function onMouseEnter() {
      setIsHovering(true);
      cursor!.classList.add('hover');
    }

    function onMouseLeave() {
      setIsHovering(false);
      cursor!.classList.remove('hover');
    }

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  if (typeof window === 'undefined' || window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)` }}
        aria-hidden="true"
      />
      <div 
        ref={followerRef} 
        className="custom-cursor-follower"
        style={{ transform: `translate(${followerPos.x}px, ${followerPos.y}px) translate(-50%, -50%)` }}
        aria-hidden="true"
      />
    </>
  );
}