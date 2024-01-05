import React, { ReactNode } from 'react'

import {twMerge} from 'tailwind-merge'

interface GridContainerProps{
    children:ReactNode
    className?:string;
}

function GridContainer({children, className}:GridContainerProps) {
    const defaultClass = 'w-full max-w-[77.5rem] mx-auto px-3'
    const combinedClasses= twMerge(defaultClass,className)
    return (
        <div className={combinedClasses}>
            {children}
        </div>
      );
}

export default GridContainer;