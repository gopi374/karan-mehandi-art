'use client';

import { useState } from "react";
import { Phone } from "lucide-react";

export default function FloatingButtons() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Phone Toggle Button */}
      <button
        onClick={() => setShowPhone(!showPhone)}
        className="bg-green-900 text-amber-100 p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Call Button"
      >
        <Phone className="w-5 h-5" />
      </button>

      {/* Optional: Phone Popup Info */}
      {showPhone && (
        <div className="bg-white border px-4 py-2 rounded-lg shadow-md text-base font-medium text-black absolute right-14 bottom-1 whitespace-nowrap">
          📞 Call us: <span className="text-lg">+91-81716 28118</span>
        </div>
      )}
    </div>
  );
}
