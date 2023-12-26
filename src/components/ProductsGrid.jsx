import { Link, useLoaderData } from "react-router-dom";

export default function ProductsGrid() {
  const { featuredProduct } = useLoaderData();
 
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {featuredProduct.map((product) => {
        const { title, price, img } = product;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              <img
                src={img}
                alt={title}
                className="w-full   rounded-xl object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-base tracking-wider">{title}</h2>
              <span className="text-secondary">{price} تومان</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}