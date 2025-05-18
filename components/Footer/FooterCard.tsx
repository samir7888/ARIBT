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
    <div className="relative bg-white px-4 py-10 mt-28 rounded-t-3xl flex flex-col justify-between">
  {/* Background image */}
  <div
    className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none"
    style={{ backgroundImage: `url(${logo.src})` }}
  ></div>

  <div className="relative z-10 flex flex-col gap-8 md:flex-row justify-between text-gray-500">
    {/* Logo and description */}
    <div className="w-full md:w-1/4 space-y-5">
      <Image src={logo} alt="aribt logo" width={200} height={100} />
      <p className="text-xl leading-relaxed">
        At Abhyam Robotics Institution of Business and Technology, we are
        dedicated to bringing your digital vision to life. Our expert team
        combines creativity and cutting-edge technology to deliver personalized
        web development solutions that help your business thrive online. Partner
        with us for innovative, tailored, and impactful digital experiences.
      </p>
    </div>

    {/* Links and Contacts */}
    <div className="w-full md:w-3/5 flex flex-col md:flex-row gap-10">
      <div className="flex flex-col sm:flex-row gap-8 w-full justify-around">
        <div className="space-y-3">
          <h2 className="text-black text-xl font-semibold">About</h2>
          <Link href="/testimonials" className="block">Testimonials</Link>
          <a href="#" className="block">Examples</a>
          <a href="#" className="block">Examples</a>
          <a href="#" className="block">Examples</a>
        </div>

        <div className="space-y-3">
          <h2 className="text-black text-xl font-semibold">Resources</h2>
          <a href="#" className="block">Testimonials</a>
          <a href="#" className="block">Examples</a>
          <a href="#" className="block">Examples</a>
          <a href="#" className="block">Examples</a>
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <Suspense>
          {ContactsInfo.map((contact) => (
            <ContactDetails key={contact.id} contact={contact} />
          ))}
        </Suspense>
      </div>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="mt-10 border-t border-t-gray-300 text-sm text-gray-600 pt-6 flex flex-col items-center md:flex-row justify-between gap-4">
    <p className="text-center">Copyright 2025 Sameer, All Rights Reserved</p>
    <div className="flex flex-wrap justify-center gap-4">
      <p>Cookie Policy</p>
      <p>Privacy Policy</p>
      <p>Terms and Conditions</p>
    </div>
  </div>
</div>

  );
};

export default FooterCard;
