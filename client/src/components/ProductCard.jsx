// Product component
export default function Product({ product }) {
  return (
    <div key={product.id} className="m-5">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="card w-[80vw] h-[80vw] max-w-[237px]  max-h-[230px] 
          lg:max-w-[321px] lg:max-h-[337px] object-cover"
        />
      </figure>

      {/* card body */}
      <div className="p-2 gap-y-1 h-[40%] flex flex-col">
        <h2
          className="card-title font-inter text-sm sm:text-lg
        font-semibold "
        >
          {product.name}
        </h2>
        <p className="font-inter text-sm sm:text-lg font-light text-zinc-400">
          {product.category}
        </p>
        <p className="font-inter text-sm sm:text-lg font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
