import Link from "next/link"
export default function Header() { 
    return (
        <header>
            <div>
                <Link href="/"><h2>Takachan Blog</h2></Link>
            </div>
        </header>
    )
}