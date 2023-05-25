import React from 'react';
import Layout from '../src/components/Layout';
// import ReviewsCard from '../src/components/ReviewsCard';
import ReviewsForm from '../src/components/ReviewsForm';
import { adminPath } from '../utils/constants';
import dynamic from 'next/dynamic';
const ReviewsCard = dynamic(() => import('../src/components/ReviewsCard'), {
	ssr: false,
  });
export default function Reviews({ siteData, pageData }) {
	return (
		<div>
			<Layout data={siteData} SeoData={pageData?.seo}>
				<ReviewsForm data={pageData} />
				<ReviewsCard />
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	let pageData = null;
	let siteData = null;

	try {
		pageData = await (await fetch(`${adminPath}/review?populate=deep`)).json();
		siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
	} catch (err) {}
	return {
		props: {
			pageData: pageData?.data?.attributes || 'null',
			siteData: siteData?.data?.attributes || 'null',
		},
	};
}
