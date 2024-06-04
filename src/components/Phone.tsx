import React, { HTMLAttributes } from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string
	dark?: boolean
	className?: string
}

const Phone = ({imgSrc, dark = false, className, ...props}: PhoneProps) => {
	return (
		<div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
			<img className='pointer-events-none z-50 select-none' src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'} alt='گارد محافظ گوشی کیس کبرا' />
			<div className="absolute -z-10 inset-0">
				<img className='object-cover' src={imgSrc} alt='گارد محافظ گوشی کیس کبرا' />
			</div>
		</div>
	);
};

export default Phone;