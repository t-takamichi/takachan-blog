import Link from "next/link"
import Image from 'next/image'

export default function Post ({ data }) {
    return (
        <section className="card">
            <img className="card-img" src={data.image["url"]} alt="" />
            <div className="card-content">
                <h1 className="card-title">{data.title}</h1>
                <p className="card-text">投稿日 : {data.publishedAt.substr(0,10)}</p>
            </div>
            <div className="card-link">
                <Link href={`/blog/${data.id}`}>
                    <a className='btn'>Read More</a>
                </Link>
            </div>
        </section>
        
        
    )
}