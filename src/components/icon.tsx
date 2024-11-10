'use client'
import React from 'react'
import { Icon } from '@iconify/react';


interface Props {
    icon: string;
    className?: string
}

const Iconify = ({ icon, className }: Props) => {
    return (
        <Icon icon={icon} className={className} />
    )
}

export default Iconify