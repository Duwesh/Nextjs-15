async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>Product Detail of {productId}</div>;
}

export default ProductDetail;
