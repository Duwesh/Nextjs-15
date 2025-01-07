import Link from "next/link";
function Reviews() {
  return (
    <div>
      <section className="p-4 h-full w-full">
        <h1 className="text-xl font-bold underline capitalize">Reviews</h1>
        <section className="flex flex-col justify-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <Link
              href={`/products/1/reviews/${i}`}
              key={i}
              className="text-blue-500 hover:underline block"
            >
              <span>Review {++i}</span>
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Reviews;
