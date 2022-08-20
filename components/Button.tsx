import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined
    children: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    className,
    children,
    onClick,
}) => {
    const classes = twMerge(
        'bg-blue-800 px-4 py-2 rounded-md text-white hover:opacity-90 transition-opacity duration-300 shadow',
        className
    )
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            type={type}
            className={classes}
        >
            {children}
        </button>
    )
}

export default Button
