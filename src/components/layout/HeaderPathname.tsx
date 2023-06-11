"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const HeaderPathname = () => {

    const pathname = usePathname();

    return (
        <>
            {pathname !== "/" ? (
                <div className="flex justify-between w-full mb-1">
                    <Link className="text-xl" href="/">
                        🏠
                    </Link>
                    <h4 className="capitalize mt-2 font-bold">{pathname.slice(1)}</h4>
                </div>
            ) : (
                <>
                    <h4 className="capitalize mt-2 text-lg font-bold">
                        Encryption and Decryption
                    </h4>
                </>
            )}
        </>
    );
};

export default HeaderPathname;
