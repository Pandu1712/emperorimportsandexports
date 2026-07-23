import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function StickyButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/919010444415?text=Hello%20Emperor%20Exports%2C%20I%27m%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .01 5.36.01 11.99c0 2.11.55 4.17 1.6 5.98L0 24l6.17-1.62a11.94 11.94 0 0 0 5.82 1.5h.01c6.63 0 11.99-5.36 11.99-11.99 0-3.2-1.25-6.21-3.47-8.41zM12 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.66.96.98-3.56-.23-.37a9.8 9.8 0 0 1-1.5-5.24C2.22 6.6 6.6 2.22 12 2.22c2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0 1 21.78 12c0 5.4-4.38 9.79-9.78 9.79zm5.36-7.31c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.51-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.56-.34z"/>
        </svg>
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold hover:scale-110 transition-transform"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
