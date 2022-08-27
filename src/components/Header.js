import "./style/Header.css";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide vh-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner vh-100">
          <div className="carousel-item active">
            <div className="row vh-100 align-items-center">
              <div className="col-12 col-md-7  p-5">
                <div className="col-10 mx-auto">
                  <h1 className="fw-bold">Banking is personal.. </h1>
                  <h1 className="fw-lights">We understand personal...</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est id. Nam repellendus accusamus quisquam deleniti
                    dolores repudiandae harum possimus inventore.
                  </p>

                  <button className="btn px-4 btn-primary rounded-0 text-white">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-5 d-none d-md-block h-100 carousel-1"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row vh-100 bg-dark align-items-center">
              <div className="col-12 col-md-7   p-5">
                <div className="col-10 mx-auto">
                  <h1 className="fw-bold text-primary">We've been here... </h1>
                  <h1 className="fw-lights text-white">
                    And we have gathered experience...
                  </h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est id. Nam repellendus accusamus quisquam deleniti
                    dolores repudiandae harum possimus inventore.
                  </p>

                  <button className="btn  px-4 btn-outline-primary rounded-0 text-primary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-5 d-none d-md-block h-100 carousel-2"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row vh-100 align-items-center">
              <div className="col-12 col-md-7   p-5">
                <div className="col-10 mx-auto">
                  <h1 className="fw-bold text-primary">
                    Banking just for your{" "}
                  </h1>
                  <h1 className="fw-lights ">
                    It doesnt get more personal than this
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est id. Nam repellendus accusamus quisquam deleniti
                    dolores repudiandae harum possimus inventore.
                  </p>

                  <button className="btn  px-4 btn-outline-primary rounded-0">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-5 d-none d-md-block h-100 carousel-3"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row vh-100 bg-dark align-items-center">
              <div className="col-12 col-md-7   p-5">
                <div className="col-10 mx-auto">
                  <h1 className="fw-bold text-primary">Stay in touch... </h1>
                  <h1 className="fw-lights text-white">
                    We keep it within your reach at all times
                  </h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est id. Nam repellendus accusamus quisquam deleniti
                    dolores repudiandae harum possimus inventore.
                  </p>

                  <button className="btn  px-4 btn-outline-primary rounded-0 text-primary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-5 d-none d-md-block h-100 carousel-4"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row vh-100 align-items-center">
              <div className="col-12 col-md-7   p-5">
                <div className="col-10 mx-auto">
                  <h1 className="fw-bold text-info">We Protect you from fraud..</h1>
                  <h1 className="fw-lights text-info">
                    But you have to protect yourself
                  </h1>
                  <p className="text-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est id. Nam repellendus accusamus quisquam deleniti
                    dolores repudiandae harum possimus inventore.
                  </p>

                  <button className="btn  px-4 btn-outline-info rounded-0">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-5 d-none d-md-block h-100 carousel-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
