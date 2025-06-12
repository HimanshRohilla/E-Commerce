import { useNavigate } from "react-router-dom";
import FadeInOnScroll from "../components/FadeInOnScroll";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Our Journey in Packaging Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small workshop to industry leaders - revolutionizing
            packaging one box at a time
          </p>
        </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Humble Beginnings in Boxville
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              In 2010, our founder John Carton started Cartonize in his garage
              in Boxville, with nothing but a cardboard cutter and a vision. His
              first client was a local bakery that needed eco-friendly boxes for
              their artisanal bread.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              That first order sparked our passion for sustainable packaging.
              Today, that same bakery still uses our boxes, now shipped
              nationwide in our signature eco-friendly packaging.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700">
                "We don't just make boxes - we craft experiences that protect
                your products and tell your brand's story."
              </p>
              <p className="mt-2 font-medium">- John Carton, Founder</p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src="./images/About1.jpg"
              alt="Founder working in early workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-lg">
                Our original workshop in Boxville, 2010
              </p>
            </div>
          </div>
        </div>
        </FadeInOnScroll>
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Trusted By Industry Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FadeInOnScroll>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-blue-50 flex items-center justify-center p-6">
                <img
                  src="./images/About2.jpg"
                  alt="GreenSneakers product packaging"
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">GreenSneakers</h3>
                <p className="text-gray-600 mb-4">
                  Sustainable shoe brand using our 100% recycled boxes with
                  custom plant-based ink printing.
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Since 2015</span>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-pink-50 flex items-center justify-center p-6">
                <img
                  src="./images/About3.jpg"
                  alt="Bloom Cosmetics packaging"
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bloom Cosmetics</h3>
                <p className="text-gray-600 mb-4">
                  Luxury skincare line using our signature velvet-finish boxes
                  with magnetic closures.
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Since 2017</span>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-yellow-50 flex items-center justify-center p-6">
                <img
                  src="./images/About4.jpg"
                  alt="BeanThere Coffee packaging"
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">BeanThere Coffee</h3>
                <p className="text-gray-600 mb-4">
                  Specialty coffee startup using our compostable bags and
                  corrugated shipping boxes.
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Since 2020</span>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/client-stories")}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              View More Client Success Stories
            </button>
          </div>
        </div>
        <FadeInOnScroll>
        <div className="bg-black text-white p-12 rounded-2xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Cartonize Startup Accelerator
            </h2>
            <p className="text-xl mb-8">
              We've helped over 500 startups launch with professional packaging
              at affordable prices. Our program includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-start">
                <div className="bg-white text-black rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Low Minimums</h3>
                  <p className="text-gray-300">
                    Orders starting from just 100 units
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-black rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Design Assistance
                  </h3>
                  <p className="text-gray-300">
                    Free design templates and consultations
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-black rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Growth Support</h3>
                  <p className="text-gray-300">
                    Scaling options as your business grows
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Success Story: TinyTea Co.
              </h3>
              <p className="mb-4">
                "Cartonize helped us launch with beautiful, sustainable
                packaging that made our tiny tea company look established from
                day one. Their startup program made professional packaging
                accessible with our limited budget."
              </p>
              <p className="font-medium">- Sarah Lin, Founder of TinyTea</p>
            </div>
          </div>
        </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Our Sustainable Process
          </h2>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src="./images/About5.jpg"
              alt="Our manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Material Sourcing</h3>
              <p className="text-gray-600">
                80% of our materials come from recycled sources, with 100%
                FSC-certified paper products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-gray-600">
                Solar-powered facilities with water-based inks and minimal waste
                production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Shipping</h3>
              <p className="text-gray-600">
                Carbon-neutral shipping options available for all orders.
              </p>
            </div>
          </div>
        </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Meet the Team Behind Your Packaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our team of packaging designers, sustainability experts, and
            logistics specialists are dedicated to creating the perfect
            packaging solution for your business.
          </p>
          <button
            onClick={() => navigate("/contact")} 
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Contact Our Packaging Consultants
          </button>
        </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default About;
