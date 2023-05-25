import React from 'react';
import { imageResolver } from '../../../../utils/helpers';
export default function CommonHero({ data, blog }) {
	return (
		<div className='relative'>
			<div className='absolute min-w-full min-h-full bg-black bg-opacity-50'></div>
			<div
				className='   items-center justify-center text-center pt-[300px] pb-[200px] bg-[#e4e4e4]'
				style={{
					background: `url( ${
						data?.img?.data !== null
							? imageResolver(data?.img).path
							: `https://admin.happykidsdental.org/uploads/${data?.imagePath}`
					}) no-repeat center center/cover`,
				}}
			>
				<div className='relative z-10 max-w-4xl mx-auto'>
					<p className='text-[#838386] text-xl leading-7 font-medium'>
						{data?.tagline}
					</p>
					<h2 className='text-white text-[27px] lg:text-[54px] leading-[39px] lg:leading-[65px] font-bold '>
						{data?.headline || data?.title}
					</h2>
				</div>
			</div>
		</div>
	);
}
