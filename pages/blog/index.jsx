import React from "react";
import BlogCard from "../../src/components/Common/BlogCard";
import BlogHero from "../../src/components/Common/BlogHero";
import Layout from "../../src/components/Layout";
import PaginatedBlogs from "../../src/components/PaginatedBlog";
import { adminPath } from "../../utils/constants";

export default function Blog({ siteData, pageData, blogsData }) {
  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo}>
        <BlogHero data={pageData} />
        {/* <BlogCard  data={blogsData} /> */}
        <PaginatedBlogs data={blogsData} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let blogsData = null;

  // let navServices = null;
  // let servicesData = null;
  // let servicesPageData = null;

  try {
    blogsData = await (await fetch(`${adminPath}/blogs?populate=deep`)).json();
    pageData = await (
      await fetch(`${adminPath}/our-blog?populate=deep`)
    ).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
      blogsData:
        blogsData?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt) -
            new Date(a.attributes.publishedAt)
        ) || null,
    },
  };
}
