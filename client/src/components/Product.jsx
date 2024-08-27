// Product component
export default function Product({ product }) {
  return (
    <div key={product.id}>
      <img
        src={product.image}
        alt={product.name}
        className="w-[337px] h-[321px] object-cover"
      />
      {/* Product text box */}
      <div className="py-2 space-y-0.5">
        <h2 className="font-inter text-xl font-semibold">{product.name}</h2>

        <p className="font-inter text-lg font-light  text-zinc-300">
          {product.category}
        </p>
        <p className="font-inter text-lg font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
