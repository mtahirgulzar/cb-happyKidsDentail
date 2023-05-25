import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { imageResolver } from '../../../utils/helpers';
import Facebook from '../Common/Icon/Facebook';
import Yelp from '../Common/Icon/Yelp';
import Map from '../Common/Icon/Map';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Tawkto from '../tawkto';
export default function Footer({ data, navServices }) {
	const router = useRouter();
	const [dis, setDis] = useState({
		email: '',
	});
	const [btnDis, setBtnDis] = useState(false);
	useEffect(() => {
		if (dis.email.length) {
			setBtnDis(true);
			document.getElementById('mySubmit').disabled = false;
		} else {
			setBtnDis(false);
			//   document.getElementById("mySubmit").disabled = true;
		}
	}, [dis]);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log('email data', data);
		if (data.email.length > 30) {
			toast('Please Enter correct mail');
		} else {
			fetch('/api/email', {
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => {
					// console.log("Response received", res);
					if (res.status === 200) {
						// console.log("Response succeeded!");
						toast('Thank you for contacting us!');
					} else {
						// console.log("Email/Password is invalid.");
						toast('Mail is not sent.');
					}
					setBtnDis(false);
					document.getElementById('mySubmit').disabled = true;
				})
				.catch((e) => console.log(e));
			reset();
		}
	};
	return (
		<div className='bg-[#003458]'>
			<div className=' max-w-[1140px] mx-auto pb-[14px] px-[15px] sm:px-[30px] xl:px-[10px] '>
				<div className=' grid md:grid-cols-2 lg:grid-cols-3 py-[53px]'>
					<div>
						<div className='lg:py-[19.5px] flex items-center px-4 gap-x-4'>
							<Link href={`/`}>
								<div>
									<img
										src={imageResolver(data?.footerLogo?.img).path}
										className='max-w-[100px] '
										loading='lazy'
										alt={
											data?.footerLogo?.img?.data?.attributes?.alternativeText
										}
									/>
								</div>
							</Link>
							<div>
								<p className='leading-[27px] text-[#ffffff] text-[27px]  font-[600]'>
									{data?.footerLogo?.tagline}
								</p>
								<p className='leading-[29px] text-[#f01159] text-[39px]  font-[600]'>
									{data?.footerLogo?.headline}
								</p>
								<p className='leading-[23px] text-[23px] text-[#ffffff] font-[600]'>
									{data?.footerLogo?.description}
								</p>
							</div>
						</div>
						<p className='text-white text-[12px] leading-[18px] font-normal mb-[14px] md:max-w-[350px] mt-4 lg:mt-0'>
							{data?.about?.title}
						</p>

						<div className='flex gap-x-[16px]'>
							<div
								className='hover:cursor-pointer'
								onClick={() =>
									router.push(
										'https://www.facebook.com/HappyKidsDentalStockton/',
									)
								}
							>
								<Facebook />
							</div>

							<div
								className='hover:cursor-pointer'
								onClick={() =>
									router.push(
										'https://www.yelp.com/biz/happy-kids-dental-stockton?osq=happy+kids+dental',
									)
								}
							>
								<Yelp />
							</div>

							<div
								className='hover:cursor-pointer'
								onClick={() =>
									router.push(
										'https://www.google.com/maps/place/Happy+Kids+Dental/@37.9623195,-121.2955358,17z/data=!3m1!4b1!4m5!3m4!1s0x80900d490ff7c85b:0x25f67feb3405089e!8m2!3d37.9623195!4d-121.2933471',
									)
								}
								fill='#ffffff'
							>
								<Map fill='white' />
							</div>
						</div>
					</div>
					<div className=''>
						<div className=''>
							<h2 className='title-font font-medium text-[#ffffff] tracking-widest text-[18px] mb-3 mt-8 md:mt-0'>
								{navServices?.title}
							</h2>
							<nav className='list-none text-[13px] font-normal  '>
								<div className='items-start sm:flex gap-x-16'>
									<div>
										<ul>
											{navServices?.Footitem !== null &&
												navServices?.Footitem?.slice(0, 6).map(
													(item, index) => (
														<Link
															href={`/services/${item?.link}`}
															legacyBehavior
															key={index}
														>
															<li className='text-[#d9dbe1] hover:text-[#bbbcbf] leading-[25px] sm:leading-[20px] hover:cursor-pointer '>
																<a href={`/services/${item?.link}`}>
																	{item.title}
																</a>
															</li>
														</Link>
													),
												)}
										</ul>
									</div>
									<div>
										<ul>
											{navServices?.Footitem !== null &&
												navServices?.Footitem?.slice(6, 15).map(
													(item, index) => (
														<Link
															href={`/services/${item?.link}`}
															legacyBehavior
															key={index}
														>
															<li className=''>
																<p className=' text-[#d9dbe1] leading-[25px] sm:leading-[20px] hover:cursor-pointer hover:text-[#bbbcbf]  '>
																	<a href={`/services/${item?.link}`}>
																		{item.title}
																	</a>
																</p>
															</li>
														</Link>
													),
												)}
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} method='POST'>
						<div className='mt-20 lg:mt-0 '>
							<h2 className='font-normal text-[#ffffff] text-[13px] leading-[20px] mb-[15px]'>
								{data?.signup?.title}
							</h2>
							<div className=''>
								<div className=''>
									<input
										{...register('email', { required: true })}
										tabIndex={0}
										id='email'
										name='email'
										onChange={(e) => setDis({ ...dis, email: e.target.value })}
										required
										role='input'
										arial-label='Please input your email'
										type='email'
										className='w-full mb-[10px] px-5 py-1  leading-8  focus:outline-none rounded-[3px]'
										placeholder='Email*'
									/>
								</div>
								<button
									type='submit'
									id='mySubmit'
									className={`w-full  text-white bg-[#F0117E] border-0 py-2 px-6 focus:outline-none hover:bg-[#df1175] rounded-[3px]
				${!btnDis && 'cursor-not-allowed'}
				`}
								>
									{data?.cta?.title}
								</button>
							</div>
						</div>
					</form>
					<ToastContainer />
				</div>
				<p className='text-[#d9dbe1] text-[14px] leading-[21px] font-normal text-center py-[10px]'>
					{/* {data?.copyRight?.headline} */}
					Copyright © {new Date().getFullYear()}
					<Link href={`/`} legacyBehavior>
						<span className='text-[#ff6395] text-[14px] leading-[21px] font-bold  cursor-pointer px-1'>
							<a href={`/`}>{data?.copyRight?.tagline}</a>
						</span>
					</Link>
					{data?.copyRight?.vigorant}
					<Link href={`${data?.copyRight?.link}`} legacyBehavior>
						<span className='text-[#ff6395] text-[14px] leading-[21px] font-normal px-1 cursor-pointer '>
							<a href={`${data?.copyRight?.link}`}>{data?.copyRight?.copy}</a>
						</span>
					</Link>
				</p>
			</div>
			<Tawkto />
		</div>
	);
}
