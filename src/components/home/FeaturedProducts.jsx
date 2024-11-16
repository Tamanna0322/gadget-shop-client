import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="flex items-center justify-between gap-10">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    );
};

export default FeaturedProducts;