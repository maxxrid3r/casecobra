'use client'
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NextImage from 'next/image'
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface DesignConfiguratorProps {
	configId: string
	imgUrl: string
	imgDimensions: { width: number, height: number }
}

const DesignConfigurator = ({ configId, imgUrl, imgDimensions }: DesignConfiguratorProps) => {
	const [options, setOptions] = useState({color: 'black'})
	return (
		<div className='relative mt-20 grid grid-cols-3 mb-20 pb-20'>
			<div
				className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
				<div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
					<AspectRatio ratio={896 / 1831} className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
						<NextImage src='/phone-template.png' alt='تصویر گوشی' className='pointer-events-none z-50 select-none'
						           fill/>
					</AspectRatio>
					<div
						className='absolute z-40 inset-0 right-[3px] top-px left-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.5)]'/>
					<div className={cn(
						'absolute inset-0 right-[3px] top-px left-[3px] bottom-px rounded-[32px]',
						`bg-blue-950`
					)}/>
				</div>
				<Rnd
					className='absolute z-20 border-[3px] border-primary'
					default={{
						x: 150,
						y: 205,
						height: imgDimensions.height / 4,
						width: imgDimensions.width / 4
					}}
					lockAspectRatio
					resizeHandleComponent={{
						bottomRight: <HandleComponent/>,
						bottomLeft: <HandleComponent/>,
						topRight: <HandleComponent/>,
						topLeft: <HandleComponent/>
					}}
				>
					<div className='relative w-full h-full'>
						<NextImage src={imgUrl} alt='تصویر شما' fill className='pointer-events-none'/>
					</div>
				</Rnd>
			</div>
			<div className='h-[37.5] flex-col bg-white'>
				<ScrollArea dir='rtl'>
					<div className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none' aria-hidden='true'/>
					<div className="px-8 pb-12 pt-8">
						<h2 className='tracking-tight font-bold text-3xl'>محافظ خود را شخصی سازی کنید</h2>
						<div className="w-full h-px my-6 bg-gray-200" />
						<div className="relative mt-4 h-full flex flex-col justify-between">
							<RadioGroup value></RadioGroup>
						</div>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

export default DesignConfigurator;