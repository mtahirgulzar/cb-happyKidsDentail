import React from "react";
import { adminPath } from "../../utils/constants";
import Layout from "../../src/components/Layout";
import CommonHero from "../../src/components/Common/CommonHero";
import BlogDetail from "../../src/components/BlogDetail";

export default function blog({ siteData, singleBlog,  blogs }) { 
  return (
    <div>
      <Layout data={siteData} SeoData={singleBlog?.seo}>
        <CommonHero data={singleBlog} />
        <BlogDetail data={singleBlog} cutBlog={blogs} />
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = await (await fetch(`${adminPath}/blogs?populate=deep`)).json();

  const paths = await blogs?.data?.map((post) => {
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
  const singleBlog = await (
    await fetch(`${adminPath}/blogs/${slug}?populate=deep`)
  ).json();
  const siteData = await (
    await fetch(`${adminPath}/site?populate=deep`)
  ).json();
  // const pageData = await (
  // 	await fetch(`${adminPath}/blog?populate=deep`)
  // ).json();
  const blogs = await (await fetch(`${adminPath}/blogs?populate=deep`)).json();

  return {
    props: {
      singleBlog: singleBlog?.data?.attributes || null,
      siteData: siteData?.data?.attributes,
      // pageData: pageData?.data?.attributes || null,
      blogs:
        blogs?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt) -
            new Date(a.attributes.publishedAt)
        ) || null,
    },
  };
}
