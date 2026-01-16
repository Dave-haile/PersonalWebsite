
import React from 'react';

export const RippleButton: React.FC = () => {
    const handleMouseMove = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.currentTarget.style.setProperty("--xPos", `${x}px`);
        e.currentTarget.style.setProperty("--yPos", `${y}px`);
    };

    return (
        <a
            href="#architecture"
            onMouseMove={handleMouseMove}
            className="
        group relative px-12 py-5 bg-white font-bold rounded-full
        overflow-hidden transition-transform duration-300
        border-none outline-none focus:outline-none

        before:absolute before:content-[''] before:w-0 before:h-0
        before:rounded-full before:bg-black
        before:left-[var(--xPos)] before:top-[var(--yPos)]
        before:-translate-x-1/2 before:-translate-y-1/2
        before:transition-all before:duration-700
        hover:before:w-[400px] hover:before:h-[400px]
      "
        >
            <span className="
        relative z-10 text-black
        transition-colors duration-300
        group-hover:text-white
      ">
                View Work
            </span>
        </a>
    );
};
