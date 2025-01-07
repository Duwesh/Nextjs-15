import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <div>Product Detail of {productId}</div>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${productId}`), 2000);
  });
  return { title: `Product ${title}` };
};

export default ProductDetails;
