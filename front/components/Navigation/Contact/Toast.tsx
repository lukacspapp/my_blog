'use client'

import { useEffect } from "react";

export default function Toast ({ message, id, removeToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 1500);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <div
      className="fixed inset-x-0 top-0 flex justify-center items-center z-50"
    >
      <div
        className="m-3 py-2 px-3 rounded-md bg-white dark:bg-[#0a0a0a] dark:text-white text-black border-gray-500 border dark:border-gray-600 text-center shadow-lg animate-slide-down-up"
      >
        {message}
      </div>
    </div>
  );
};