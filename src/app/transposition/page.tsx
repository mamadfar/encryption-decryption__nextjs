"use client";

import { useState } from "react";
import {TextArea} from "../../components";

const Transposition = () => {
    const [chars, setChars] = useState<string>("abcdefghijklmnopqrstuvwxyz");
    const [keyword, setKeyWord] = useState<string>("zebra");
    const [padChar, setPadChar] = useState<string>("x");
    const [plainText, setPlainText] = useState<string>("tala la");
    const [cipherText, setCipherText] = useState<string>("");

    const resetInputs = () => {
        setPlainText("");
        setCipherText("");
    };

    const Encrypt = (plaintext: string, key: string, pc: string) => {
        let klen = key.length;
        if (pc == "") pc = "x";
        while (plaintext.length % klen != 0) {
            plaintext += pc.charAt(0);
        }
        let colLength = plaintext.length / klen;
        let ciphertext = "";
        let k: number = 0;
        let t: number = 0;
        for (let i = 0; i < klen; i++) {
            while (k < 26) {
                t = key.indexOf(chars.charAt(k));
                let arrkw = key.split("");
                arrkw[t] = "_";
                key = arrkw.join("");
                if (t >= 0) break;
                else k++;
            }
            for (let j = 0; j < colLength; j++) {
                ciphertext += plaintext.charAt(j * klen + t);
            }
        }
        return ciphertext;
    };

    const Decrypt = (ciphertext: string, keyword: string) => {
        let klen = keyword.length;
        if (klen <= 1) {
            alert("keyword should be at least 2 characters long");
            return;
        }
        if (ciphertext.length % klen != 0) {
            alert(
                "ciphertext has not been padded, the result may be incorrect (incorrect keyword?)."
            );
        }
        // first we put the text into columns based on keyword length
        let cols = new Array(klen);
        let colLength = ciphertext.length / klen;
        for (let i = 0; i < klen; i++)
            cols[i] = ciphertext.substr(i * colLength, colLength);
        // now we rearrange the columns so that they are in their unscrambled state
        let newcols = new Array(klen);
        let j: number = 0;
        let i: number = 0;
        while (j < klen) {
            let t = keyword.indexOf(chars.charAt(i));
            if (t >= 0) {
                newcols[t] = cols[j++];
                let arrkw = keyword.split("");
                arrkw[t] = "_";
                keyword = arrkw.join("");
            } else i++;
        }
        // now read off the columns row-wise
        let plaintext = "";
        for (i = 0; i < colLength; i++) {
            for (j = 0; j < klen; j++) {
                plaintext += newcols[j].charAt(i);
            }
        }
        return plaintext;
    };

    const validate = (text: string, message: string) => {
        if (text.length < 1) {
            alert(message);
            return true;
        }
        return false;
    };

    const normalize = (value: string): string => {
        return value.toLowerCase().replace(/[^a-z]/g, "");
    };

    const handleEncrypt = () => {
        var plaintext = normalize(plainText);
        if (validate(plainText, "Please enter some plaintext.")) return;
        var key = normalize(keyword);
        var pc = normalize(padChar);
        setCipherText(Encrypt(plaintext, key, pc));
    };
    const handleDecrypt = () => {
        var ciphertext = normalize(cipherText);
        if (validate(ciphertext, "Please enter some ciphertext (letters only)."))
            return;
        var key = normalize(keyword);
        // @ts-ignore
        setPlainText(Decrypt(ciphertext, key));
    };

    return (
        <div className="App flex flex-col justify-center items-center h-full">
            <h1 className="border-b my-3 pb-3 font-bold">Encryption & Decryption</h1>
            <TextArea
                value={plainText}
                changeHandler={setPlainText}
                name="transposition_text"
                id="transposition_text"
                className="pl-2 pr-1 py-1 mb-0 w-3/4"
            />
            <div className="flex flex-col justify-center items-center my-3">
                <input
                    className="flex-1 border rounded pl-2 pr-1 py-1 mb-1"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyWord(e.target.value)}
                />
                <input
                    className="flex-1 border rounded pl-2 pr-1 py-1"
                    type="text"
                    value={padChar}
                    onChange={(e) => setPadChar(e.target.value)}
                />
            </div>
            <TextArea
                value={cipherText}
                changeHandler={setCipherText}
                name="transposition_cipher"
                id="transposition_cipher"
                className="pl-2 pr-1 py-1 w-3/4"
            />
            <div className="mb-3">
                <button
                    className={`border rounded-l-full px-5 py-2 bg-blue-100 hover:bg-blue-300 hover:text-white shadow-sm transition duration-100 scale-110 focus:scale-100 ${
                        !keyword || !padChar ? "cursor-not-allowed" : ""
                    }`}
                    onClick={handleEncrypt}
                    disabled={!keyword || !padChar}
                >
                    Encription
                </button>
                <button
                    className={`border rounded-r-full capitalize px-5 py-2 bg-green-100 hover:bg-green-300 hover:text-white shadow-sm transition duration-100 scale-110 focus:scale-100 ${
                        !keyword || !padChar ? "cursor-not-allowed" : ""
                    }`}
                    onClick={handleDecrypt}
                    disabled={!keyword || !padChar}
                >
                    Decryption
                </button>
            </div>
            {plainText && cipherText && (
                <button
                    className={`border rounded-full capitalize px-5 py-2 bg-red-100 hover:bg-red-300 hover:text-white shadow-sm transition duration-100 scale-110 focus:scale-100`}
                    onClick={resetInputs}
                >
                    ❌
                </button>
            )}
        </div>
    );
};

export default Transposition;
