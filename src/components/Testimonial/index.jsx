import React, { useEffect } from 'react';
import Link from 'next/link';
import { imageResolver } from '../../../utils/helpers';

function PrevAr(props) {
	const { onClick } = props;
	return (
		<section className='' onClick={onClick}>
			<button className='hidden '></button>
		</section>
	);
}

function NextAr(props) {
	const { onClick } = props;
	return (
		<section className='' onClick={onClick}>
			<button className='hidden '></button>
		</section>
	);
}
export default function Testimonial({ data }) {
	{
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <NextAr />,
			prevArrow: <PrevAr />,
			autoplay: true,
			autoplaySpeed: 3000,
		};

		useEffect(() => {
			const slider = document.getElementById('trustSlider');
			const script = document.createElement('script');
			script.src =
				'https://cdn.trustindex.io/loader.js?839c6f0630b996332956ce6257';
			script.async = true;
			slider.appendChild(script);
		}, []);

		return (
			<div className=''>
				<div className='grid md:grid-cols-2'>
					<div className='bg-[#003458] flex items-center'>
						<div className=' text-left lg:max-w-[460px] py-12 lg:py-0 ml-[33px] pr-2'>
							<h2 className='text-[#ffffff] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] font-extrabold mb-3 md:mb-5'>
								{data?.headline}
							</h2>
							<p className='text-[#ffffff] text-[16px] sm:text-[18px] leading-6 sm:leading-[27px] font-normal'>
								{data?.tagline}
							</p>
						</div>
					</div>
					<div className='p-[10px]'>
						<div className='flex justify-end'>
							<div className=' flex items-end w-[45px] sm:w-[55px] md:w-[70] lg:w-[91px] h-[38px] sm:h-[48px] md:h-[57px] lg:h-[77px]'>
								<img
									src={imageResolver(data?.quote).path}
									alt='comma image'
									className='w-full h-full'
								/>
							</div>
						</div>
						<div
							id='trustSlider'
							className='max-w-[260px] sm:max-w-[580px] md:max-w-[700px]  px-4 xl:px-0 lg:max-w-[470px] xl:max-w-[580px]  mx-auto lg:pt-[47px] bg-white open-sans'
						></div>
						<div className=' border-t-[1px] border-[#E5E7EB] sm:mx-5'>
							<div className='flex gap-x-[3px] justify-center text-center text-[#000] text-[11px] sm:text-[13px] md:text-[14px] leading-[20px] tracking-[0.5px] mt-3 sm:mt-6 mb-3 sm:mb-8 '>
								<Link
									href={`https://www.trustindex.io/reviews/www.happykidsdental.org`}
									legacyBehavior
								>
									<strong className='underline'>
										<a
											href={`https://www.trustindex.io/reviews/www.happykidsdental.org`}
										></a>
									</strong>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
