import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
                <h1 className="mb-16 text-4xl font-bold text-center">Featured Products</h1>
            <FeaturedProducts></FeaturedProducts>
            </div>
            <div className="my-20">
                <h1 className="mb-16 text-4xl font-bold text-center">User Review</h1>
            <UserReview></UserReview>
            </div>
        </div>
    );
};

export default Home;