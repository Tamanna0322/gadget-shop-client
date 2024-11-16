const Review = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Rate!!!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, laboriosam.</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-600"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                </div>
            </div>
        </div>
    );
};

export default Review;