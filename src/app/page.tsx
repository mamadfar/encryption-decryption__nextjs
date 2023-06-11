import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <Link href="/caesar"
                  className="p-5 border rounded-lg w-full max-w-xs text-center hover:bg-white hover:shadow-lg transition delay-75"
            >
                <div>Caesar</div>
            </Link>
            <Link href="/transposition"
                  className="p-5 border rounded-lg w-full max-w-xs text-center hover:bg-white hover:shadow-lg transition delay-75"
            >
                <div>Transposition</div>
            </Link>
        </div>
    )
}
