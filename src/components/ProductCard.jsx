const ProductCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-photo/headphones-with-music-cds_23-2148133615.jpg?t=st=1731763911~exp=1731767511~hmac=f64db59b89661cfecc72dfbf23f95e3149bbd594aa77680c267697e2054c74fb&w=740"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Headphone</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;