import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft, Check, Star } from "lucide-react";
import { vazir } from "@/ui/fonts";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='bg-slate-50' dir='rtl'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg: pt-4'>
            <div className='relative mx-auto text-center lg:text-right flex flex-col justify-center items-center lg:items-start'>
              <div className='absolute w-28 right-0 -top-20 hidden lg:block'>
                <Image src='/snake-1.png' alt='قنادری برنس' className='w-full' width={100} height={100}/>
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                تصویر شما روی محافظ <span className='bg-green-600 text-white px-2'>اختصاصی </span>گوشی دلخواهتان
              </h1>
              <p className="mt-8 text-lg lg:pl-10 max-w-prose text-center lg:text-right text-balance md:text-wrap">
                لحظات شیرین خود را روی محافظ گوشی خود با <span className='font-semibold'>طراحی خاص و اختصاصی</span>  خودتان ثبت کنید. <br/>
                <span className='font-semibold pr-1'>کبرا محافظ</span> به شما این قابلیت را می دهد که علاوه بر تلفن خود از خاطرات خود نیز محافظت کنید
              </p>
              <ul className='mt-8 space-y-2 text-right font-medium flex flex-col items-center sm:items-start'>
                <div className="space-y-2">
                  <li className='flex gap-1.5 items-center text-right'>
                    <Check className='h-5 w-5 text-green-600 shrink-0'/>
                    تهیه شده از باکیفیت ترین و مقاوم ترین مواد اولیه
                  </li>
                  <li className='flex gap-1.5 items-center text-right'>
                    <Check className='h-5 w-5 text-green-600 shrink-0'/>
                    ضمانت ۳ ساله
                  </li>
                  <li className='flex gap-1.5 items-center text-right'>
                    <Check className='h-5 w-5 text-green-600 shrink-0'/>
                    پشتیبانی از جدیدترین مدل های تلفن همراه
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image className='inline-block -ml-4 h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-1.png'
                         alt='تصویر شما' width={100} height={2.5}/>
                  <Image className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-2.png'
                         alt='تصویر شما' width={100} height={2.5}/>
                  <Image className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-3.png'
                         alt='تصویر شما' width={100} height={2.5}/>
                  <Image className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-4.jpg'
                         alt='تصویر شما' width={100} height={2.5}/>
                  <Image className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                         src='/users/user-5.jpg' alt='تصویر شما' width={100} height={2.5}/>
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start mr-3">
                  <div className="flex gap-0.5">
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                    <Star className='h-4 w-4 text-green-600 fill-green-600'/>
                  </div>
                  <p dir='rtl' className={`${vazir.className} mt-1`}><span className='font-semibold'>۱,۲۵۰</span> مشتری رضایتمند</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image className='absolute w-40 lg:w-52 right-56 -top-20 select-none hidden sm:block lg:hidden xl:block' src='/your-image.png' alt='کیک خوب' width={300} height={300}/>
              <Image src='/line.png' alt='' width={300} height={300} className='absolute w-20 -left-6 -bottom-6 select-none' />
              <Phone imgSrc='/testimonials/1.jpg' className='w-64' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

    {/*  Value proposition section */}
      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2
              className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              آنچه که <span className='relative px-2'>مشتریان <Icons.underline
              className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600'/></span> در
              مورد ما می گویند
            </h2>
            <img src='/snake-2.png' className='w-24 order-0 lg:order-2' alt='کبرا محافظ'/>
          </div>
          <div className="mx-auto grid max-w-2xl grid-col-1 px-4 lg:mx-0 lg:max-w-none lg:grid-col-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-x-0.5 mb-2">
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className="text -lg leading-8">
                <p>
                  "واقعا محافظ مقاوم و خوش ساختی هست. من الان حدود ۳ ماه هست که محافظ رو خریداری کردم و
                  <span className='p-0.5 bg-slate-800 text-white'>تصویر همچنان با کیفیت و شفاف مانده</span>&nbsp;
                  و تغییری نکرده. گارد قبلی که داشتم بعد از چند هفته کم کم زرد رنگ شد. واقعا از محافظ جدیدم خوشحالم"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-1.png" alt="کاربر وب سایت" className='rounded-full h-12 w-12 object-cover'/>
                <div className="flex flex-col">
                  <p className="font-semibold">محمدرضا</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className='h-4 w-4 stroke-[3px] text-green-600'/>
                    <p className='text-sm'>خرید احراز شده</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second item */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-x-0.5 mb-2">
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
                <Star className='h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className="text -lg leading-8">
                <p>
                  "من معمولا گوشیمو کنار کلیدام تو جیبم میزارم و این مسئله همیشه باعث خش های بزرگی روی همه گاردهای گوشیم میشد. این گارد به جز یه خش کوچیک روی گوشه اش،
                  <span className='p-0.5 bg-slate-800 text-white'>همچنان بعد از شش ماه مثل روز اولشه</span>&nbsp;
                  و تغییری نکرده. واقعا بی نظیره."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-4.jpg" alt="کاربر وب سایت" className='rounded-full h-12 w-12 object-cover'/>
                <div className="flex flex-col">
                  <p className="font-semibold">پوریا</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className='h-4 w-4 stroke-[3px] text-green-600'/>
                    <p className='text-sm'>خرید احراز شده</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8 sm:text-center'>
            <h2
              className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              تصویر خود را آپلود کنید و همین الان {' '}
              <span className='relative px-2 bg-green-600 text-white'>
                محافظ اختصاصی {' '}
              </span>{' '}
              خود را سفارش دهید
            </h2>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8" dir='ltr'>
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" alt="" className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'/>
              <div className="relative h-80 w-full md:h-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="" className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'/>
              </div>
              <Phone className='w-60' imgSrc='/horse_phone.jpg' />
            </div>
          </div>
          <ul className={`${vazir.className} mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit`}>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline ml-1.5'/>
              تهیه شده از سیلیکون با کیفیت
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline ml-1.5'/>
              مقاوم در برابر خش و اثرانگشت
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline ml-1.5'/>
              سازگار با شارژرهای بی سیم
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline ml-1.5'/>
              ۳ سال خدمات پس از فروش برای چاپ
            </li>
          </ul>
          <div className="flex justify-center">
            <Link className={buttonVariants({
              size: 'lg',
              className: 'mx-auto mt-8'
            })} href='/configure/upload'>همین حالا سفارش دهید <ArrowLeft className='h-4 w-4 mr-1.5'/></Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
