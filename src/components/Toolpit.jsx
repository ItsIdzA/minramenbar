import { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  let timeout;

  const showTooltip = () => {
    timeout = setTimeout(() => setVisible(true), 400); // Delay
  };

  const hideTooltip = () => {
    clearTimeout(timeout);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onTouchStart={() => setVisible(true)} // mobile
      onTouchEnd={() => setVisible(false)}
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