// app/product/[slug]/loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5 place-items-center">
      {/* Skeleton Card */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-8 border border-gray-200 rounded-lg shadow animate-pulse dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-center items-center h-96 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M0 32C0 14.33 14.33 0 32 0H608C625.7 0 640 14.33 640 32V352C640 369.7 625.7 384 608 384H32C14.33 384 0 369.7 0 352V32zM48 48C48 39.16 55.16 32 64 32H576C584.8 32 592 39.16 592 48V320C592 328.8 584.8 336 576 336H64C55.16 336 48 328.8 48 320V48zM64 432C46.33 432 32 446.3 32 464C32 481.7 46.33 496 64 496H576C593.7 496 608 481.7 608 464C608 446.3 593.7 432 576 432H64zM384 464C384 437.5 405.5 416 432 416H576C602.5 416 624 437.5 624 464C624 490.5 602.5 512 576 512H432C405.5 512 384 490.5 384 464z" />
            </svg>
          </div>

          <div className="mt-4 h-5 bg-gray-200 rounded dark:bg-gray-700 w-48"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded dark:bg-gray-700 w-32"></div>

          <div className="flex items-center justify-between mt-4">
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-20"></div>
            <div className="h-8 bg-blue-700 rounded-lg w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
