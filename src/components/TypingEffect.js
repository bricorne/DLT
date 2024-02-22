import React, { useState, useEffect } from 'react';

function TypingEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
  const intervalId = setInterval(() => {
    if (index < text.length) {
      setDisplayedText(text.substring(0, index + 1));
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, speed);

  return () => clearInterval(intervalId);

  }, [text, speed]);

  return <p>{displayedText}</p>;
}

export default TypingEffect;
