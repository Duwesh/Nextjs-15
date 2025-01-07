async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
}

export default ProductReview;
