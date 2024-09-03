import React from "react";

export default function SelectBox() {
  return (
    <div className="flex flex-wrap gap-2">
      <div>
        {/* Gender box */}
        <select className="select select-neutral select-bordered">
          <option disabled selected>
            Gender
          </option>
          <option>Men</option>
          <option>Women</option>
        </select>
      </div>

      <div>
        {/* Category box */}
        <select className="select select-neutral select-bordered">
          <option disabled selected>
            Category
          </option>
          <option>Casual</option>
          <option>Sport</option>
        </select>
      </div>

      <div>
        {/* Price box */}
        <select className="select select-neutral select-bordered">
          <option disabled selected>
            Price
          </option>
          <option>Men</option>
          <option>Women</option>
        </select>
      </div>

      <div>
        {/* Color box */}
        <select className="select select-neutral select-bordered">
          <option disabled selected>
            Color
          </option>
          <option>Black</option>
          <option>White</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        {/* Sort box */}
        <select className="select select-neutral select-bordered">
          <option disabled selected>
            Sort by:
          </option>
          <option>Price</option>
          <option>Best Sellers</option>
          <option>New Arrivals</option>
        </select>
      </div>
    </div>
  );
}
