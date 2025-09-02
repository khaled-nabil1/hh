import { useState } from "react";
const CopyEmailButton = () => {
 const [copied, setCopied] = useState(false);
    const email = "hocine.aitamermezine55@gmail.com";
    const copyToClipboard =  () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
  return ( 
    <button onClick={copyToClipboard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
       {copied?( <p className="flex items-center justify-center gap-2">
            <img src="hocine/copy-done.svg" className="w-5" alt="copy icon"/>
            done!</p>):(
        <p className="flex items-center justify-center gap-2 ">
            <img src="hocine/copy.svg" className="w-5" alt="copy icon"/>

            My email address
        </p>)}
    </button>
  );

};

export default CopyEmailButton;