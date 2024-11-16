const Banner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/accessory-decorative-beach-objects_23-2148149513.jpg?t=st=1731762829~exp=1731766429~hmac=924363b4e85c8caae2ee96f0abe669a8d70da9c90ba20e0de048c66a326f66cd&w=996)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Gadget Shop</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;