import React from 'react'
import ContactDetail from '../src/components/ContactDetail';
import Layout from '../src/components/Layout'
import { adminPath } from '../utils/constants';

export default function Reviews({siteData, pageData}) {
  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo}>
        <ContactDetail data={pageData?.header} linksData={pageData?.socialLinks}/>
        
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  // let navServices = null;
  // let servicesData = null;
  // let servicesPageData = null;

  try {
    // servicesData = await (
    // 	await fetch(`${adminPath}/services?populate=deep`)
    // ).json();
    pageData = await (await fetch(`${adminPath}/Cantact?populate=deep`)).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    // navServices = await (
    // 	await fetch(`${adminPath}/services?populate=deep`)
    // ).json();
    // servicesPageData = await (
    // 	await fetch(`${adminPath}/tech-service?populate=deep`)
    // ).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
      // servicesData: servicesData || 'null',
      // servicesPageData: servicesPageData?.data?.attributes || 'null',
      // navServices:
      // 	navServices?.data
      // 		?.sort(
      // 			(a, b) =>
      // 				new Date(b.attributes.publishedAt) -
      // 				new Date(a.attributes.publishedAt),
      // 		)
      // 		.slice(0, 10) || null,
    },
  };
}
