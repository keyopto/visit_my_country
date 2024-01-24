import Link from 'next/link'

export default function Home() {
    return (
        <main className="absolute top-0 left-0 h-full bg-prague w-full flex items-center justify-center">
            <header className="text-center bg-white/90 w-1/3 h-1/2 rounded-md shadow-2x py-20 px-3">
                <div className="h-full">
                    <h1 className="text-7xl font-bold" >Visit my country</h1>
                    <h2 className="text-xl pt-5">What if you shared your discoveries ?</h2>
                </div>
                <Link href="/articles">
                    <button className="btn-primary">Click to begin</button>
                </Link>
            </header>
        </main>
    )
}
