import React, { MouseEventHandler } from 'react';

interface HamburgerToggleProps {
    isActive: boolean;
    toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

const HamburgerToggle: React.FC<HamburgerToggleProps> = ({ isActive, toggleMenu }) => {
    return (
        <div className='relative'>
            <button
                className="z-10 w-3 h-3 cursor-pointer flex items-center justify-center ml-auto absolute right-10 -top-8"
                onClick={toggleMenu}
                aria-label="Hamburger Menu"
            >
                <span
                    className={`absolute w-10 h-[3px] bg-black transition-transform duration-500 ease-in-out ${isActive ? 'rotate-[30deg]' : '-translate-y-3'
                        }`}
                ></span>
                <span
                    className={`absolute w-10 h-[3px] bg-black transition-transform duration-500 ease-in-out ${isActive ? 'rotate-[90deg]' : 'translate-y-0'
                        }`}
                ></span>
                <span
                    className={`absolute w-10 h-[3px] bg-black transition-transform duration-500 ease-in-out ${isActive ? 'rotate-[150deg]' : 'translate-y-3'
                        }`}
                ></span>
            </button>
        </div>
    );
};

export default HamburgerToggle;
