// Product component
export default function Product({ product }) {
  return (
    <div key={product.id} className="card w-96 h-[450px] shadow-md">
      <figure className="h-[60%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </figure>
      {/* card body */}
      <div className="card-body h-[40%] flex flex-col">
        <h2 className="card-title font-inter text-md sm:text-lg font-semibold">
          {product.name}
        </h2>
        <p className="font-inter text-base sm:text-lg font-light text-zinc-400">
          {product.category}
        </p>
        <p className="font-inter text-base sm:text-lg font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
