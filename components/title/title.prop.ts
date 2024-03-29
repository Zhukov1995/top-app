import React, { ReactNode } from "react"

export interface propTitle {
    children: ReactNode,
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}