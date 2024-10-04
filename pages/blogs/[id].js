import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export async function getStaticPaths() {
  // Generate paths for all blog posts
  const paths = blogdata.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Show 404 for paths not found
  };
}

export async function getStaticProps({ params }) {
  // Find the blog post based on the dynamic ID
  const post = blogdata.find((post) => post.id === parseInt(params.id));

  // Return post as props to the component
  return {
    props: {
      post,
    },
  };
}

const SinglePost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img
                src={post.cover}
                alt={post.title}
                width='100%'
                height='100%'
                className='round'
              />
            </div>
            <div className='desc'>
              <TitleSm title='AICODERS: Leading the Future of AI-Powered Solutions' />
              <p className='desc-p'>
                **About Us:** At AICODERS, we are at the forefront of the digital
                revolution, transforming the way businesses approach technology.
                Our team of passionate AI experts and developers is dedicated to
                building state-of-the-art websites and custom GPT models tailored
                to the unique needs of businesses.
              </p>
              <p className='desc-p'>
                **Our Vision:** Our vision is to become a global leader in
                AI-driven technology solutions, enabling businesses of all sizes
                to tap into the immense potential of artificial intelligence.
              </p>
              <p className='desc-p'>
                **What We Do:**
                - **AI-Driven Website Development:** Our team builds sleek,
                responsive, and high-performance websites that are powered by the
                latest AI technologies.
                - **Custom GPT Development:** We specialize in creating custom GPTs
                (Generative Pre-trained Transformers) that are tailored to
                specific business functions.
              </p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='AI in Medicine Revolutionizes Diagnosis' />
              <p className='desc-p'>
                AI tools are transforming the medical field by providing faster and
                more accurate diagnoses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
