import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Services from "../src/components/Services";
// import Testimonial from "../src/components/Testimonial";
import { adminPath } from "../utils/constants";
import Offer from "../src/components/Offer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Testimonial = dynamic(() => import("../src/components/Testimonial"), {
  ssr: false,
});
export default function Home({ siteData, pageData }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (typeof window === "undefined" || !loaded) {
    return null;
  }
  return (
    < >
      <Layout data={siteData} SeoData={pageData?.seo}>
        <Hero data={pageData?.hero} />
        <About data={pageData?.aboutHome} />
        
        <Services
          data={pageData?.serviceHome}
          service={pageData?.servicecards}
        />
        <Testimonial data={pageData?.testimonialHome} />
        <Offer data={pageData?.offer} />
      </Layout>
    </>
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
    pageData = await (await fetch(`${adminPath}/home?populate=deep`)).json();
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
