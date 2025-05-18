import React from "react";
import { ContactInfo } from "../../../app/contact/components/Types/contact";
import {
  FaAddressBook,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const ContactDetails = ({ contact }: { contact: ContactInfo }) => {
  
  return (
    <div className="space-y-5">
      <h2 className="text-black">Get in touch</h2>
      <p className="flex gap-3">
        <Phone />
        {contact.mobileno}
      </p>
      <p className="flex gap-3">
        <Mail />
        {contact.email}
      </p>
      <p className="flex gap-3">
        <FaLocationArrow />
        {contact.location}
      </p>
      <span className="flex space-x-4">
        <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-6 w-6" />
        </a>

        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6" />
        </a>
      </span>
    </div>
  );
};

export default ContactDetails;
