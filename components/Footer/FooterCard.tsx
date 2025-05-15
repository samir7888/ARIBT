import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";
import logo from "../../public/logo.png";
// import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serverFetch } from "../../libs/server-fetch";
import {
  ContactInfo,
  ContactInfoList,
} from "../../app/contact/components/Types/contact";
import ContactDetails from "./components/ContactDetails";
import { Suspense } from "react";

const FooterCard = async () => {
  const ContactsInfo = (await serverFetch("contact")) as ContactInfoList;
  console.log(ContactsInfo);
  return (
    <div className="relative bg-white h-[600px] px-0 md:px-4 mt-28 rounded-t-3xl flex flex-col justify-between ">
      {/* Background image - fixed to cover entire section */}
      <div
        className="absolute inset-0 w-full   bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none "
        style={{ backgroundImage: `url(${logo.src})` }}
      ></div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-0  justify-between  text-gray-500 md:py-6">
        <div className="w-full p-3  md:w-1/4 space-y-5">
          <div className="">
            <Image src={logo} alt="aribt logo" width={200} height={100} />
          </div>
          <p style={{ fontSize: "clamp(0.8rem, 0.9vw, 1rem)" }} className="">
            At Abhyam Robotics Institution of Business and Technology, we are
            dedicated to bringing your digital vision to life. Our expert team
            combines creativity and cutting-edge technology to deliver
            personalized web development solutions that help your business
            thrive online. Partner with us for innovative, tailored, and
            impactful digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-around w-full md:w-3/5 ">
        <div className="flex gap-6 justify-around">

        
          <div className="space-y-5">
            <h2 className="text-black text-xl">About</h2>
            <Link href="/testimonials" className="block cursor-pointer">
              Testimonials
            </Link>
            <a href="#" className="block">
              Examples
            </a>
            <a href="#" className="block">
              Examples
            </a>
            <a href="#" className="block">
              Examples
            </a>
          </div>
          <div className="space-y-5">
            <h2 className="text-black text-xl">Resources</h2>
            <a href="#" className="block">
              Testimonials
            </a>
            <a href="#" className="block">
              Examples
            </a>
            <a href="#" className="block">
              Examples
            </a>
            <a href="#" className="block">
              Examples
            </a>
          </div>
</div>
          <Suspense>
            {ContactsInfo.map((contact) => (
              <ContactDetails key={contact.id} contact={contact} />
            ))}
          </Suspense>
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between text-sm py-6 mb-5 border-t border-t-gray-300 text-gray-600">
        <div className=" text-center">
          <p>Copyright 2025 Sameer, All Rights Reserved</p>
        </div>
        <div className="flex justify-center space-x-6 pt-4 md:pt-0 ">
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
