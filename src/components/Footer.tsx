import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { vazir } from "@/ui/fonts";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={`${vazir.className} bg-white h-20 relative`}>
			<MaxWidthWrapper>
				<div className='border-t border-gray-200' />
				<div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
					<div className="text-center md:text-right pb-2 md:pb-0">
						<img className='block mx-auto max-w-[70%] mt-10' src="/PasakGroup-logo-w-footer.png" alt="گروه فناوری اطلاعات پاساک"/>
						<p className='text-sm text-muted-foreground' dir='ltr'>
							 طراحی و توسعه توسط تیم توسعه وب گروه فناوری اطلاعات پاساک &copy; ۱۴۰۳
						</p>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex space-x-8" dir='ltr'>
							<Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
								شرایط استفاده
							</Link>
							<Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
								حریم خصوصی
							</Link>
							<Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
								سیاست کوکی ها
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;