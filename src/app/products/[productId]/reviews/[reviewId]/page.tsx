import { notFound } from "next/navigation";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (Number(reviewId) > 10) return notFound();

  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
}

export default ProductReview;
