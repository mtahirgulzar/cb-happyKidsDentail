import React from 'react';
import Head from 'next/head';
import { imageResolver } from '../../../utils/helpers';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Header({ data }) {
	const noIndex = !data?.indexThisPage;
	const noFollow = !data?.followThisPage;

	const router = useRouter();

	return (
		<>
			<Script id='google-tag-manager' strategy='afterInteractive'>
				{`
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-5VJG27D');
      	`}
			</Script>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
     			 window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'UA-151903022-1');
       		`}
			</Script>
			<Head>
				<title>{data?.title}</title>
				<meta name='title' content={data?.title}></meta>
				<meta name='description' content={data?.description}></meta>
				<meta name='keywords' content={data?.keywords} />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				></meta>
				<link
					rel='canonical'
					href={`https://happykidsdental.org${router.asPath}`}
				/>
				<meta property='og:title' content={data?.ogTitle} />
				<meta property='og:description' content={data?.ogDescription} />
				<meta
					property='og:image'
					content={`https://admin.happykidsdental.org${data?.ogUrl}`}
				/>
				<meta
					property='og:url'
					content={`https://happykidsdental.org${router.asPath}`}
				/>
				<meta name='twitter:title' content={data?.twitterTitle} />
				<meta name='twitter:description' content={data?.twitterDescription} />
				<meta
					name='twitter:image'
					content={imageResolver(data?.twitterImage).path}
				/>
				<meta name='twitter:card' content={data?.twitterCard} />
				{noFollow && noIndex && <meta name='robots' content='nofollow' />}
				{data?.noIndex && !noFollow && <meta name='robots' content='noindex' />}
				{noFollow && data?.noIndex && (
					<meta name='robots' content='noindex, nofollow' />
				)}
				{!noFollow && noIndex && <meta name='robots' content='index, follow' />}
			</Head>
		</>
	);
}
