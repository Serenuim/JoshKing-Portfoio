import { useState } from "react";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "joshkingweb@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#0F0D0D]" id="contacts">
      {/* Click-to-copy email with icon */}
      <div
        onClick={handleCopy}
        className="relative group cursor-pointer flex items-center gap-3 
                   px-4 py-2 md:px-6 md:py-3 
                   bg-red-500 rounded-md 
                   hover:bg-red-600 transition"
      >
        {/* Email icon */}
        <i className="fas fa-envelope text-white text-xl sm:text-2xl"></i>

        {/* Email text */}
        <span className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {email}
        </span>

        {/* Tooltip */}
        <div
          className="
            absolute -top-8 left-1/2 -translate-x-1/2 
            bg-black text-white text-xs sm:text-sm 
            px-2 py-1 rounded
            opacity-0 group-hover:opacity-100 transition
          "
        >
          {copied ? "Copied!" : "Click to copy"}
        </div>
      </div>
    </div>
  );
}
