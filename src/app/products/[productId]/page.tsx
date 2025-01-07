async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>ProductDetail of {productId}</div>;
}

export default ProductDetail;
