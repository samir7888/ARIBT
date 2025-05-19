import React from "react";
import { ContactInfo } from "../../../app/contact/components/Types/contact";
import {
  FaAddressBook,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactDetails = ({ contact }: { contact: ContactInfo }) => {
  
  return (
    <div className="space-y-5">
      <h2 className="text-black">Get in touch</h2>
      <p className="flex gap-3">
        <span className="shrink-0">
          <Phone />
          </span>
        {contact.mobileno}
      </p>
      <p className="flex gap-3">
        <span className="shrink-0">
          <Mail />
          </span>
        {contact.email}
      </p>
      <p className="flex  gap-3">
        <span className="shrink-0"><MapPin /></span>
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
