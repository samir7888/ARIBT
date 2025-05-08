'use client'
import React from 'react';
import Image from 'next/image';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/components/ui/form';
import { Input } from '@/components/components/ui/input';
import { Textarea } from '@/components/components/ui/textarea';
import { Checkbox } from '@/components/components/ui/checkbox';
import { Button } from '@/components/components/ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  // React Hook Form setup
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      services: {
        websiteDesign: false,
        uxDesign: false,
        userResearch: false,
        contentCreation: false,
        strategyConsulting: false,
        other: false,
      }
    }
  });

interface Services {
    websiteDesign: boolean;
    uxDesign: boolean;
    userResearch: boolean;
    contentCreation: boolean;
    strategyConsulting: boolean;
    other: boolean;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    services: Services;
}

const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
};

  return (
    <div className="container  mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Form Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-teal-900 leading-tight">
              Let's level up your<br />brand, together
            </h1>
            <p className="mt-4 text-gray-600">
              You can reach us anytime via <a href="mailto:hi@untitledui.com" className="text-teal-900 font-medium">hi@untitledui.com</a>
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700  text-xl font-semibold">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 h-12 !text-xl" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700  text-xl font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="you@company.com" 
                        className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 h-12 !text-xl" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-xl font-semibold">Phone number</FormLabel>
                    <FormControl>
                      <div className="flex border border-gray-300 rounded-md">
                        <div className="flex items-center  rounded-l-md px-3 text-gray-500 !text-xl">
                          <span>US</span>
                          <ChevronDown />
                        </div>
                        <Input 
                          type="tel" 
                          placeholder="+1 (555) 000-0000" 
                          className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 border-none rounded-l-none h-12 flex-1 !text-xl" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700  text-xl font-semibold">How can we help?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us a little about the project..." 
                        className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 min-h-32 !text-xl" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Services Checkboxes */}
              <div>
                <h3 className="text-gray-700 text-xl font-semibold mb-4">Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="services.websiteDesign"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox  className='w-5 h-5 rounded-lg text-gray-300' 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                          Website design
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="services.contentCreation"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox  className='w-5 h-5 rounded-lg text-gray-300' 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                          Content creation
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="services.uxDesign"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0 ">
                        <FormControl>
                          <Checkbox  className='w-5 h-5 rounded-lg text-gray-300' 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                          UX design
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="services.strategyConsulting"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox   className='w-5 h-5 rounded-lg text-gray-300'
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                          Strategy & consulting
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="services.userResearch"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox  className='w-5 h-5 rounded-lg text-gray-300' 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                          User research
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="services.other"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            className='w-5 h-5 rounded-lg text-gray-300'
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-gray-600 font-semi  !text-xl">
                          Other
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-teal-800 hover:bg-teal-900 text-white py-6 font-medium rounded-full flex items-center justify-center gap-2"
              >
                Contact Us
                <ChevronRight size={16} />
              </Button>
            </form>
          </Form>
        </div>

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

export default ContactForm;

