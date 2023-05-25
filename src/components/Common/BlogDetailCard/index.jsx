import React from 'react';
import { imageResolver } from '../../../../utils/helpers';
import Link from 'next/link';
 

export default function BlogDetailCard({ TwoBlog }) {
	const result = new Date(TwoBlog?.attributes?.publishedAt).toLocaleDateString(
		'en-GB',
	);
	return (
		<div>
			<div className=' pb-[40px] '>
				<div className=''>
					<Link href={`${TwoBlog?.attributes?.slug}`} legacyBehavior>
						<a href={`${TwoBlog?.attributes?.slug}`}>
							<div className='rounded-lg shadow-lg hover:shadow-2xl min-h-[500px]'>
								<div className='relative'>
									{TwoBlog?.attributes?.imagePath !== null ? (
										<img
											src={`https://admin.happykidsdental.org/uploads/${TwoBlog?.attributes?.imagePath}`}
											alt='Blog Card'
											className='w-full  h-[230px] object-cover'
											loading='lazy'
										/>
									) : (
										<img
											loading='lazy'
											alt={
												TwoBlog?.attributes?.img?.data?.attributes
													?.alternativeText
											}
											className='w-full rounded-t-lg h-[230px] hover:cursor-pointer'
											src={imageResolver(TwoBlog?.attributes?.img).path}
										></img>
									)}
									<div className='absolute top-0 hover:cursor-pointer h-full w-full bg-[black] rounded-t-lg bg-opacity-10 hover:bg-opacity-0 btn'></div>
									<div>
										<p className='absolute top-[25px] left-[25px] bg-[#3988FE] px-[14px] py-[1px] rounded-[5px]'>
											<span className='text-[11px] leading-[11px] font-medium text-white'>
												{
													TwoBlog?.attributes?.blog_category?.data?.attributes
														?.name
												}
											</span>
										</p>
									</div>
								</div>
								<div className=' '>
									<div className='px-[30px] mt-[20px] min-h-[190px]'>
										<h2 className='text-[20px] leading-[25px] text-[#2b7a78] font-medium mb-[25px] text-center hover:cursor-pointer'>
											{TwoBlog?.attributes?.title}
										</h2>
										<p className=' text-[14px] leading-[21px] text-[#1ca885] font-light mb-[25px] text-center'>
											{TwoBlog?.attributes?.description}
										</p>
									</div>
									<div className='px-[30px] py-[15px]  border-solid border-t-[1px] border-[#eaeaea] text-center'>
										<span className='text-[14px]  leading-[16px] text-[#b28dff] font-normal'>
											{result}
										</span>
									</div>
								</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
