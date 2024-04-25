import Image from 'next/image'
import Link from 'next/link'
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
    return (
        <main>
            <h1>Hello World</h1>
            <a href='/users'>Users Anchor</a>
            <br/>
            <Link href='/users'>Users Link</Link>
            <ProductCard></ProductCard>
        </main>
    )
}
