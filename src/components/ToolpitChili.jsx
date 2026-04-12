import { useState, useRef, useEffect } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  const handleTouch = (e) => {
    e.stopPropagation(); // verhindert sofortiges Schließen
    setVisible((prev) => !prev); // toggle
  };

  // 👉 Klick außerhalb schließen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="absolute sm:relative flex sm:w-auto items-center"
      ref={wrapperRef}
      onClick={handleTouch}
    >
      {children}

      <div
        className={`
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1 text-sm text-amber-50 bg-red-800 backdrop-blur-xs rounded-md
          whitespace-nowrap shadow-lg shadow-red-800/50
          transition-all duration-200
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {text}
      </div>
    </div>
  );
}