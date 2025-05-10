
import React from 'react';
import Image from 'next/image';

import ContactForm from './ContactForm';

const ContactUsPage = () => {

  return (
    <div className="container  mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Form Section */}
        <ContactForm />

        
        {/* Image Section */}
        <div className="hidden lg:block relative h-full">
          <div className="rounded-lg overflow-hidden h-full">
            <Image
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="Developer working on code"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-900/20"></div>
            <div className="absolute inset-0 bg-code-overlay mix-blend-overlay opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

