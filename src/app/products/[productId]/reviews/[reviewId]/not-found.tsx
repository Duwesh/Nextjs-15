"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName?.split("/")[2];

  const reviewId = pathName?.split("/")[4];
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Review {reviewId} not found for Product {productId}
      </h1>
    </div>
  );
}
