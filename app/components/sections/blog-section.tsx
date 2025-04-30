import React from 'react'
import TitleCard from '../cards/titleCard'
import { ArrowUpRight } from 'lucide-react'

// Mock blog data
const blogData = [
  {
    id: 1,
    title: "UX review presentations",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    categories: ["Design", "Research", "Presentation"]
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    description: "Linear helps streamline software projects, sprints, and others.",
    image: "https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    categories: ["Design", "Research"]
  },
  {
    id: 3,
    title: "Building your API Stack",
    description: "The right APIs can make development faster, deployment easier, and user experience better.",
    image: "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    categories: ["Development", "API"]
  },
  {
    id: 4,
    title: "Migrating to Linear 101",
    description: "Linear helps streamline software projects, sprints, and others.",
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    categories: ["Design", "Research"]
  }
]

// Blog Card Component
const BlogCard = ({ blog, orientation = "vertical" }) => {
  if (orientation === "horizontal") {
    return (
      <div className="flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden border border-gray-200 bg-white">
        <div className="md:w-2/5 h-64 relative">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">{blog.author} • {blog.date}</div>
              <ArrowUpRight className="h-5 w-5 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-6">{blog.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {blog.categories.map((category, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 text-sm rounded-full ${
                  category === "Design" ? "bg-blue-50 text-blue-600" : 
                  category === "Research" ? "bg-pink-50 text-pink-600" : 
                  category === "Presentation" ? "bg-purple-50 text-purple-600" :
                  category === "Development" ? "bg-green-50 text-green-600" :
                  category === "API" ? "bg-orange-50 text-orange-600" :
                  "bg-gray-50 text-gray-600"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-white h-full">
      <div className="relative h-48">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-600">{blog.author} • {blog.date}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{blog.title}</h3>
        <p className="text-gray-600 mb-6 flex-1">{blog.description}</p>
        <div className="flex flex-wrap gap-2">
          {blog.categories.map((category, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 text-sm rounded-full ${
                category === "Design" ? "bg-blue-50 text-blue-600" : 
                category === "Research" ? "bg-pink-50 text-pink-600" : 
                category === "Presentation" ? "bg-purple-50 text-purple-600" :
                category === "Development" ? "bg-green-50 text-green-600" :
                category === "API" ? "bg-orange-50 text-orange-600" :
                "bg-gray-50 text-gray-600"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const BlogSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <TitleCard
        title="Facilities"
        sectionTitle="Recent Blogs"
        sectionSubtitle="Focus your attention on developing your business, and let us work for your overall school management headache"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="md:col-span-1">
          <BlogCard blog={blogData[0]} orientation="horizontal" />
        </div>
        <div className="md:col-span-1">
          <BlogCard blog={blogData[1]} />
        </div>
        <div className="md:col-span-1">
          <BlogCard blog={blogData[2]} />
        </div>
        <div className="md:col-span-1">
          <BlogCard blog={blogData[3]} />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition">
          View all
        </button>
      </div>
    </section>
  )
}

export default BlogSection