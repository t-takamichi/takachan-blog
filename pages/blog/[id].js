import { client } from "../../libs/client";
import ContentStyles from '../../styles/Home.module.css'

export default function BlogId({ data }) {
  return (
    <>
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: `${data.body}` }}>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: process.env.END_POINT_MICROCMS });

  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: process.env.END_POINT_MICROCMS, contentId: id });

  return {
    props: {
      data,
    },
  };
};
