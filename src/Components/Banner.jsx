import electricianImg from "../assets/electrician.jpg";
import plumberImg from "../assets/plumber.jpg";
import homeCleaningImg from "../assets/home-cleaning-service.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(clickHandler) => {
        return (
          <button
            type="button"
            onClick={clickHandler}
            className="cursor-pointer text-primary absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition duration-300"
            aria-label="Previous Slide"
          >
            <BiChevronLeft className="w-6 h-6" />
          </button>
        );
      }}
      renderArrowNext={(clickHandler) => {
        return (
          <button
            type="button"
            onClick={clickHandler}
            className="cursor-pointer text-primary absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition duration-300"
            aria-label="Next Slide"
          >
            <BiChevronRight className="w-6 h-6" />
          </button>
        );
      }}
    >
      <div>
        <div className="bg-background-light flex items-center justify-center p-4">
          <div className="w-full max-w-6xl mx-auto">
            <section className="rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 p-2 md:p-8 lg:p-12 text-center md:text-left">
                  <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                    A Clean Home, Without the Hassle
                  </h1>
                  <p className="text-sm my-4">
                    Enjoy a spotless home with professional cleaners you can
                    trust. Book today and relax while we take care of the mess.
                  </p>
                  <Link to="/service" className="btn btn-primary">
                    Explore more
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    alt="A collection of three neatly folded t-shirts in white, grey, and black, next to a pair of white sneakers."
                    className="w-full h-full object-cover"
                    src={homeCleaningImg}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-background-light flex items-center justify-center p-4">
          <div className="w-full max-w-6xl mx-auto">
            <section className="rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 p-2 md:p-8 lg:p-12 text-center md:text-left">
                  <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                    Reliable Plumbing Solutions, Anytime
                  </h1>
                  <p className="text-sm my-4">
                    Say goodbye to leaks and clogs. Our skilled plumbers handle
                    everything from small repairs to full bathroom installations
                    — fast and efficiently.
                  </p>
                  <Link to="/service" className="btn btn-primary">
                    Explore more
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    alt="A collection of three neatly folded t-shirts in white, grey, and black, next to a pair of white sneakers."
                    className="w-full h-full object-cover"
                    src={plumberImg}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-background-light flex items-center justify-center p-4">
          <div className="w-full max-w-6xl mx-auto">
            <section className="rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 p-2 md:p-8 lg:p-12 text-center md:text-left">
                  <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                    Power Up Your Home with Trusted Electricians
                  </h1>
                  <p className="text-sm my-4">
                    Get quick and safe electrical repairs from certified
                    professionals. From wiring issues to light installations —
                    we’ve got you covered.
                  </p>
                  <Link to="/service" className="btn btn-primary">
                    Explore more
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    alt="A collection of three neatly folded t-shirts in white, grey, and black, next to a pair of white sneakers."
                    className="w-full h-full object-cover"
                    src={electricianImg}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
