import React from 'react'
interface ButtonProps {
    children?: React.ReactNode;
}

function Button({ children }: ButtonProps) {
    return (
        <div>
            <button className='bg-[#6F87F8] rounded-4xl cursor-pointer'>{children}</button>
        </div>
    )
}

export default Button

