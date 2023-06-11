"use client";

import { useEffect, useState } from "react";
import {TextArea} from "../../components";

const Caesar = () => {
    const [input, setInput] = useState<string>("");
    const [str, setStr] = useState<string>("");
    const [func, setFunc] = useState<string>("enc");
    const [num, setNum] = useState<number>(13);

    const handleEncAndDec = () => {
        let UpperStr = input.toUpperCase();
        const handler = (correspondance: any) => {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                func === "enc"
                    ? charCode + num <= 90
                        ? charCode + num
                        : ((charCode + num) % 90) + 64
                    : charCode - num <= 90
                        ? charCode - num
                        : ((charCode - num) % 90) + 64
            );
        };
        setStr(UpperStr.replace(/[A-Z]/g, handler));
    };

    useEffect(() => {
        setStr("");
    }, [func]);

    return (
        <div className="App flex flex-col justify-center items-center h-full">
            <h1 className="border-b my-3 pb-3 font-bold">Encryption & Decryption</h1>
            <div className="flex flex-col justify-center items-center">
                <select
                    name=""
                    id=""
                    onChange={(e) => setFunc(e.target.value)}
                    className="bg-transparent"
                >
                    <option value="enc" selected>
                        Encription
                    </option>
                    <option value="dec">Decryption</option>
                </select>
                <input
                    className="w-24 border rounded my-2 pl-1"
                    type="number"
                    value={num}
                    max={26}
                    onChange={(e) => setNum(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col relative w-3/4 mx-auto">
                <TextArea
                    className=""
                    rows={8}
                    value={input}
                    changeHandler={setInput}
                    name="caesar"
                    id="caesar"
                />
                {str && (
                    <button
                        className="absolute -top-5 right-7"
                        onClick={() => setStr("")}
                    >
                        ❌
                    </button>
                )}
            </div>
            <div className="mb-3">
                <button
                    className={`${
                        !input && "cursor-not-allowed"
                    } capitalize border rounded-lg px-5 py-2 bg-blue-100 hover:bg-blue-300 hover:text-white shadow-sm transition delay-75 scale-110 focus:scale-100`}
                    onClick={handleEncAndDec}
                    disabled={!input}
                >
                    generate
                </button>
            </div>
            {str && (
                <div className="self-start px-8 text-left w-3/4 mx-auto">
                    <h3 className="border-b font-bold">
                        {func === "enc" ? "Decrypted Message" : "Encrypted Message"}
                    </h3>
                    <p className="my-2">{str}</p>
                </div>
            )}
        </div>
    );
};

export default Caesar;
