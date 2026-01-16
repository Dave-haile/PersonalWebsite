import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { InteractiveLetterProps, InteractiveTitleProps } from '../types';

const InteractiveLetter: React.FC<InteractiveLetterProps> = ({ char }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [colorStyle, setColorStyle] = useState<React.CSSProperties>({});
    const rotationValue = 3;

    const handleMouseEnter = () => {
        setIsHovered(true);
        const hue1 = Math.floor(Math.random() * 360);
        const hue2 = (hue1 + 40) % 360;

        setColorStyle({
            backgroundImage: `linear-gradient(90deg, hsl(${hue1}, 95%, 60%), hsl(${hue2}, 95%, 60%))`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTimeout(() => {
            setColorStyle({});
        }, 500);
    };

    return (
        <motion.span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isHovered ? colorStyle : undefined}
            animate={isHovered ? {
                y: -10,
                scale: 1.2,
                rotate: rotationValue
            } : {
                y: 0,
                scale: 1,
                rotate: 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`inline-block cursor-default select-none transition-colors duration-300 ${isHovered ? 'animate-gradient-text' : ''}`}
        >
            {char}
        </motion.span>
    );
};

export const InteractiveTitle: React.FC<InteractiveTitleProps> = ({ textLines }) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <>
            {textLines.map((line, i) => (
                <motion.div
                    key={i}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-start flex-wrap gap-x-4 md:gap-x-6 mb-2"
                >
                    {line.split(" ").map((word, wi) => (
                        <span key={wi} className="inline-flex whitespace-nowrap">
                            {word.split("").map((char, ci) => (
                                <motion.span key={ci} variants={child}>
                                    <InteractiveLetter char={char} />
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.div>
            ))}
        </>
    );
};
