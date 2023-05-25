import React from "react";
import Layout from "../../src/components/Layout";
import { adminPath } from "../../utils/constants";
import BlogBody from "../../src/components/Common/BlogBody";

const Index = ({ siteData, singleService  }) => {
 
  return (
    <Layout data={siteData} SeoData={singleService?.seo}>
      <BlogBody data={singleService?.body}  cusClass={"cus-our-services"} />
    </Layout>
  );
};

export default Index;


export async function getStaticPaths() {
  const services = await (await fetch(`${adminPath}/services?populate=deep`)).json();

  const paths = await services?.data?.map((post) => {
    return {
      params: { slug: `${post?.attributes?.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context?.params?.slug;
  const singleService = await (
    await fetch(`${adminPath}/services/${slug}?populate=deep`)
  ).json();
  const siteData = await (
    await fetch(`${adminPath}/site?populate=deep`)
  ).json();
  // const pageData = await (
  // 	await fetch(`${adminPath}/blog?populate=deep`)
  // ).json();
  const services = await (await fetch(`${adminPath}/services?populate=deep`)).json();

  return {
    props: {
      singleService: singleService?.data?.attributes || null ,
      siteData: siteData?.data?.attributes,
      // pageData: pageData?.data?.attributes || null,
      services:
      services?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt) -
            new Date(a.attributes.publishedAt)
        ) || null,
    },
  };
}
