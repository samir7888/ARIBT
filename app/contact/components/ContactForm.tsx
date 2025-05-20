"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/components/ui/form";
import { Input } from "@/components/components/ui/input";
import { Textarea } from "@/components/components/ui/textarea";
import { Checkbox } from "@/components/components/ui/checkbox";
import { Button } from "@/components/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/components/ui/popover";
import { ScrollArea } from "@/components/components/ui/scroll-area";
import { countries } from "./data/countriesCode";
import { ContactFormSchema, contactFormSchema } from "./validation/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Nepal",
    code: "+977",
    flag: "NP",
  });
  // React Hook Form setup
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      services: {
        websiteDesign: false,
        uxDesign: false,
        userResearch: false,
        contentCreation: false,
        strategyConsulting: false,
        other: false,
      },
    },
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
    <div className="space-y-8">
      <div>
        <h1 className="font-aeonik text-4xl font-bold text-teal-900 leading-tight">
          Let's level up your
          <br />
          brand, together
        </h1>
        <p className="mt-4 text-gray-600">
          You can reach us anytime via{" "}
          <a
            href="mailto:hi@untitledui.com"
            className="text-teal-900 font-medium"
          >
            hi@untitledui.com
          </a>
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
                <FormLabel className="text-gray-700  text-xl font-semibold">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 h-12 !text-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-sm" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700  text-xl font-semibold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 h-12 !text-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-sm" />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-xl font-semibold">
                  Phone number
                </FormLabel>
                <FormControl>
                  <div className="flex border border-gray-300 rounded-md">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="flex items-center px-3 py-2 bg-white rounded-l-md text-gray-700 text-xl gap-2"
                        >
                          <span>{selectedCountry.flag}</span>
                          <span className="hidden sm:inline">
                            {selectedCountry.code}
                          </span>
                          <ChevronDown size={18} />
                        </button>
                      </PopoverTrigger>

                      <PopoverContent className="w-64 p-0">
                        <ScrollArea className="h-60 bg-white">
                          <ul>
                            {countries.map((c) => (
                              <li
                                key={c.flag}
                                onClick={() => setSelectedCountry(c)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                              >
                                <span>{c.flag}</span>
                                <span>{c.name}</span>
                                <span className="ml-auto text-sm text-gray-500">
                                  {c.code}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>

                    <Input
                      type="tel"
                      placeholder={`${selectedCountry.code} (555) 000-0000`}
                      className="border-none focus:ring-0 rounded-l-none h-12 flex-1 !text-xl"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-600 text-sm" />
              </FormItem>
            )}
          />
          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700  text-xl font-semibold">
                  How can we help?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little about the project..."
                    className="border-gray-300 focus:border-teal-900 focus:ring-teal-900 min-h-32 !text-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-sm" />
              </FormItem>
            )}
          />

          {/* Services Checkboxes */}
          <div>
            <h3 className="text-gray-700 text-xl font-semibold mb-4">
              Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="services.websiteDesign"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="w-5 h-5 rounded-lg text-gray-300"
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
                      <Checkbox
                        className="w-5 h-5 rounded-lg text-gray-300"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                      Content creation
                    </FormLabel>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services.uxDesign"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0 ">
                    <FormControl>
                      <Checkbox
                        className="w-5 h-5 rounded-lg text-gray-300"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                      UX design
                    </FormLabel>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services.strategyConsulting"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="w-5 h-5 rounded-lg text-gray-300"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                      Strategy & consulting
                    </FormLabel>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services.userResearch"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="w-5 h-5 rounded-lg text-gray-300"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600 font-semi-bold !text-xl">
                      User research
                    </FormLabel>
                    <FormMessage className="text-red-600 text-sm" />
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
                        className="w-5 h-5 rounded-lg text-gray-300"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600 font-semi  !text-xl">
                      Other
                    </FormLabel>
                    <FormMessage className="text-red-600 text-sm" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-900 text-white py-6 font-medium rounded-full flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Us
            <ChevronRight size={16} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
