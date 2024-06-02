import React, { useEffect, useState } from 'react'

export default function TypingEffect({ lineDelay = 1000 , speed = 100}) {
    const [displayedText, setDisplayedText] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
 
    const lines = [
        "Hello, welcome to my website!",
        "This is a typing effect component.",
        "It supports multiple lines.",
        "Enjoy!"
    ];
    useEffect(() => {
        const typeLine = (line, index) => {
            let currentIndex = 0;
            const intervalId = setInterval(() => {
                setDisplayedText((prev) => {
                    const newText = [...prev];
                    newText[index] = (newText[index] || '') + line[currentIndex];
                    return newText;
                });
                currentIndex++;
                if (currentIndex === line.length) {
                    clearInterval(intervalId);
                    if (index < lines.length - 1) {
                        setTimeout(() => setCurrentLineIndex(index + 1), lineDelay);
                    }
                }
            }, speed);
        };

        if (currentLineIndex < lines.length) {
            typeLine(lines[currentLineIndex], currentLineIndex);
        }
    }, [currentLineIndex, lines, speed, lineDelay]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <>
            <div>
                {displayedText.map((line, index) => (<div key={index}>{line}</div>))}
                {showCursor && <span className="cursor">|</span>}
            </div>
        </>
    )
}
