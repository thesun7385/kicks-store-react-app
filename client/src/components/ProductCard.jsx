// Product component
export default function Product({ product }) {
  return (
    <div key={product.id} className="m-1">
      {/* Image  */}
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="card w-[100vw] h-[100vw] max-w-[237px]  max-h-[230px] 
          lg:max-w-[321px] lg:max-h-[337px] object-cover"
        />
      </figure>

      {/* card body */}
      <div className="m-2 gap-1 h-[40%] flex flex-col">
        <h2
          className="card-title text-slate-900 font-inter  text-base 
        font-semibold"
        >
          {product.name}
        </h2>
        <p className="font-inter text-base  font-light text-zinc-400">
          {product.category}
        </p>
        <p className="font-inter text-base font-semibold text-slate-900">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
