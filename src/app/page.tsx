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
            <div className="flex justify-between space-x-2 text-xs w-fit">
                <Link
                    href="https://codesandbox.io/p/sandbox/encryption-decryption-r25otr"
                    target="_blank"
                    className="py-4 px-6 border rounded-lg text-center hover:bg-white hover:shadow-lg transition delay-75"
                >
                    <div>Code Sandbox</div>
                </Link>
                <Link
                    href="https://github.com/mamadfar/encryption-decryption__nextjs"
                    target="_blank"
                    className="py-4 px-6 border rounded-lg text-center hover:bg-white hover:shadow-lg transition delay-75"
                >
                    <div>Github Repo</div>
                </Link>
            </div>
        </div>
    )
}
