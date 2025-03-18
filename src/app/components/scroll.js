import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#AE8625] to-[#D2AC47] text-white shadow-lg hover:opacity-90 focus:outline-none flex items-center justify-center"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}