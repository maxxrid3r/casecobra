'use client'
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Loader2, MousePointerSquareDashed, Image } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { vazir } from "@/ui/fonts";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
	const {toast} = useToast()
	const [ isDragOver, setIsDragOver ] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0)
	const router = useRouter()

	const {startUpload, isUploading} = useUploadThing('imageUploader', {
		onClientUploadComplete: ([data]) => {
			const configId = data.serverData.configId
			startTransition(() => {
				router.push(`/configure/design?id=${configId}`)
			})
		},
		onUploadProgress(p) {
			setUploadProgress(p)
		}
	})

	const onDropRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles
		setIsDragOver(false)

		toast({
			title: `فایل انتخاب شده با فرمت ${file.file.type} پشتیبانی نمی شود.`,
			description: 'فایل انتخاب شده باید با فرمت PNG یا JPG یا JPEG باشد',
			variant: 'destructive'
		})
	}

	const onDropAccepted = (acceptedFiles: File[]) => {
		startUpload(acceptedFiles, {configId: undefined})
		setIsDragOver(false)
	}

	const [ isPending, startTransition ] = useTransition()

	return (
		<div className={cn(
			'relative h-full flex-1 my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
			{
				'ring-blue-900/25 bg-blue-900/10': isDragOver
			}
		)}>
			<div className="relative flex flex-1 flex-col items-center justify-center w-full">
				<Dropzone
					onDropRejected={onDropRejected}
					onDropAccepted={onDropAccepted}
					accept={{
						'image/png': [ '.png' ],
						'image/jpeg': [ '.jpeg' ],
						'image/jpg': [ '.jpg' ]
					}}
					onDragEnter={() => setIsDragOver(true)}
					onDragLeave={() => setIsDragOver(false)}
				>
					{({ getRootProps, getInputProps }) => (
						<div className='h-full w-full flex flex-1 flex-col items-center justify-center' {...getRootProps()}>
							<input {...getInputProps()} />
							{isDragOver ? (
								<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>
							) : isUploading || isPending ? (
								<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2'/>
							) : (
								<Image className='h-6 w-6 text-zinc-500 mb-2'/>
							)}
							<div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
								{isUploading ? (
									<div className='flex-col flex items-center'>
										<p className={`${vazir.className}`}>درحال بارگذاری...</p>
										<Progress className='mt-2 w-40 bg-gray-300' value={uploadProgress} />
									</div>
								) : isPending ? (
									<div className='flex flex-col items-center'>
										<p>در حال انتقال به صفحه، لطفا منتظر بمانید...</p>
									</div>
								) : isDragOver ? (
									<p>
										برای آپلود فایل خود را
										<span className='font-semibold'>اینجا بکشید</span>
									</p>
								) : (
									<p>
										برای آپلود کلیک کنید {' '}
										<span className='font-semibold'>و یا فایل خود را اینجا بکشید</span>
									</p>
								)}
							</div>
							{!isPending && (<p className='text-xs text-zinc-500'>فرمت های قابل پشتیبانی: PNG, JPG, JPEG</p>)}
						</div>
					)}
				</Dropzone>
			</div>
		</div>
	);
};

export default Page;