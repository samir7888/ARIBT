import React from "react";
import { ContactInfo } from "../../../app/contact/components/Types/contact";
import {
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactDetails = ({ contact }: { contact: ContactInfo }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-black text-xl">Get in touch</h2>

      <p className="flex gap-3 items-center">
        <span className="shrink-0"><Phone /></span>
        <a href={`tel:${contact.mobileno}`} className=" hover:underline">
          {contact.mobileno}
        </a>
      </p>

      <p className="flex gap-3 items-center">
        <span className="shrink-0"><Mail /></span>
        <a href={`mailto:${contact.email}`} className=" hover:underline">
          {contact.email}
        </a>
      </p>

      <p className="flex gap-3 items-center">
        <span className="shrink-0"><MapPin /></span>
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(contact.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline"
        >
          {contact.location}
        </a>
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
