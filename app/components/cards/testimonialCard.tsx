import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

const TestimonialCard = () => (
    <section
          className=" p-[1px] rounded-2xl  pause-on-hover "
          style={{
            background:
              "linear-gradient(to bottom, var(--color-gray-100), transparent)",
          }}
        >
          <div className=" flex flex-col w-fit p-2"
          style={{ borderRadius: "calc(var(--radius-2xl) - 3px)" }}
          >
            {/* Top Section: Profile and Logo */}
            <div className="  flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt='my '
                  width={60}
                  height={50}
                  className="rounded-2xl object-cover aspect-square"
                />
                <div>
                  <h4 className="text-md  text-gray-800">John Cena</h4>
                  <p className="text-sm text-gray-500">
                    CEO,ExploreMore Adventures
                  </p>
                </div>
              </div>

              <a
                href="bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaFacebook size={40} />
              </a>
            </div>

            {/* Testimonial Content */}
            <p
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 1.2rem)" }}
              className="text-sm w-fit mt-5 p-2 rounded-xl bg-white text-brand-primary leading-relaxed " 
            >
              "Working with Samihah was a game-changer. Her storytelling skills
              helped position our brand as a leader in the adventure travel
              space."
            </p>
          </div>
        </section>
  );

  export default TestimonialCard;
  