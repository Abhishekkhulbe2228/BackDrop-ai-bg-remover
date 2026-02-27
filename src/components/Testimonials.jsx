import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-10">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        They love us. You will too.
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col max-w-md mx-auto md:mx-0 bg-white p-6 justify-between rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >

            {/* Quote Icon */}
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-500 fill-current mb-4"
            >
              <path
                d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="currentColor"
              />
            </svg>

            {/* Quote */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {testimonial.quote}
            </p>

            {/* Footer */}
            <div className="flex space-x-2 border-t pt-4 mt-auto">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonial.author}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {testimonial.handle}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;
