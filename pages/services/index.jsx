import React from "react";
import Ensure from "../../src/components/Ensure";
import Layout from "../../src/components/Layout";
import ServicesPageHero from "../../src/components/ServicePageHero";
import Thumb from "../../src/components/Thumb";
import { adminPath } from '../../utils/constants';

export default function Services({siteData, pageData}) {
  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo}>
        <ServicesPageHero data={pageData?.serviceHero}  />
        <Ensure data={pageData?.ensure} />
        <Thumb data={pageData?.thumb} />
      </Layout>
    </div>
  );
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
    pageData = await (await fetch(`${adminPath}/our-service?populate=deep`)).json();
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