import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { client } from "../libs/client";
import Post from "../components/Post";

export default function Home({ data }) {
  return ( 
    <>
      <div className="card-box">
        {data.map((blog) => (
        <Post key={blog.id} data={blog} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: process.env.END_POINT_MICROCMS });

  return {
    props: {
      data: data.contents,
    },
  };
};
