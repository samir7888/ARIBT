import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const companies = [
  {
    id: 1,
    name: 'Abhyam Groups',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/abhyam-groups-logo.png', // Replace with your actual image paths
    logoAlt: 'Abhyam Groups Logo',
    tagline: 'Lead Company'
  },
  {
    id: 2,
    name: 'Akhsar College',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/akhsar-college-logo.png',
    logoAlt: 'Akhsar College Logo',
    tagline: 'MANAGED BY ABHYAM GROUPS'
  },
  {
    id: 3,
    name: 'Abhayam School',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/abhayam-school-logo.png',
    logoAlt: 'Abhayam School Logo',
    tagline: 'SCHOOL MANAGEMENT SYSTEM'
  },
  {
    id: 4,
    name: 'Abhyam Robotics',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/abhyam-robotics-logo.png',
    logoAlt: 'Abhyam Robotics Logo',
    tagline: ''
  },
  {
    id: 5,
    name: 'Lopho Abroad Consultancy',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/lopho-logo.png',
    logoAlt: 'Lopho Abroad Consultancy Logo',
    tagline: 'Abroad Consultancy'
  },
  {
    id: 6,
    name: 'Gems International',
    description: '"Passion for Beauty" isn\'t just a phrase; it\'s the heartbeat of our salon.',
    logoSrc: '/gems-logo.png',
    logoAlt: 'Gems International Logo',
    tagline: ''
  },
];
const CompaniesGrid = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-12">Meet with our Companies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-gray-100 rounded-lg shadow-sm p-2 overflow-hidden">
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">{company.name}</h3>
                <ArrowUpRight className="h-6 w-6 text-black" />
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p style={{ fontSize: "clamp(0.7rem, 0.9vw, 1.3rem)" }} className="text-base text-gray-500 mb-8">
                  {company.description}
                </p>
                
                <div className="flex justify-center items-center h-40">
                  {/* Replace with actual company logos */}
                  <div className="relative h-24 w-full flex items-center justify-center">
                    {/* This is a placeholder - in real implementation you'd use the actual logo */}
                    {company.id === 1 && (
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="relative w-16 h-16">
                            <div className="absolute w-10 h-14 border-4 border-teal-800 left-0"></div>
                            <div className="absolute w-8 h-8 bg-yellow-500 bottom-0 right-0"></div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-teal-800">ABHYAM GROUPS</div>
                        <div className="text-xs text-gray-500">{company.tagline}</div>
                      </div>
                    )}
                    
                    {company.id === 2 && (
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="relative w-20 h-20">
                            <div className="absolute w-16 h-16 border-4 border-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-white"></div>
                              </div>
                            </div>
                            <div className="absolute w-20 h-10 border-b-4 border-l-4 border-r-4 border-pink-600 bottom-0"></div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-teal-800">AKHSAR COLLEGE</div>
                        <div className="text-xs text-gray-500">{company.tagline}</div>
                      </div>
                    )}
                    
                    {company.id === 3 && (
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="relative w-16 h-16">
                            <div className="w-16 h-16 bg-teal-800 rotate-45 relative">
                              <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                                <div className="w-6 h-6 bg-white"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-teal-800">ABHYAM</div>
                        <div className="text-xs text-gray-500">{company.tagline}</div>
                      </div>
                    )}
                    
                    {company.id === 4 && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-800 tracking-widest">ARIBT</div>
                        <div className="w-24 h-1 bg-teal-800 mt-1 mx-auto"></div>
                      </div>
                    )}
                    
                    {company.id === 5 && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-800">LOPHO</div>
                        <div className="text-xs text-gray-500">{company.tagline}</div>
                      </div>
                    )}
                    
                    {company.id === 6 && (
                      <div className="text-center">
                        <div className="flex justify-center">
                          <div className="text-2xl font-bold text-blue-600">G</div>
                          <div className="text-green-500 text-lg">I</div>
                          <div className="text-2xl font-bold text-blue-600">EC</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesGrid;