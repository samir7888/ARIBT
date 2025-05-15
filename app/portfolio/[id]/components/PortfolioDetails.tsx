import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogBody from '../../../blogs/[id]/components/BlogBody'
import { Copy } from 'lucide-react'
import { Portfolio, PortfolioList } from '../../Types/portfolio-types'

const PortfolioDetails = ({portfolio}:{portfolio:PortfolioList}) => {
  return (
    <div className="mt-10">
        <article>
         
       


          {/* Main content */}
          <div className="mb-8">
            <BlogBody description={portfolio[0].description} />
          </div>

          {/* Software and tools section */}
          {/* <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Software and tools</h2>
        <p className="text-gray-700">{softwareTools}</p>
      </section> */}

      
          {/* Conclusion */}
          {/* <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Conclusion</h2>

            <div
              className="mb-4 text-gray-700 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: filterBlog.description }}
            />
          </section> */}

          {/* Share buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div>Share this post</div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Copy link</span>
                <Copy className="w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on X</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9ZM11 10h3v1.38a4 4 0 0 1 3.11-1.5c3.19 0 3.89 2.11 3.89 4.85V19h-3v-4c0-1.12-.02-2.56-1.6-2.56-1.6 0-1.84 1.22-1.84 2.48V19h-3v-9Z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
  )
}

export default PortfolioDetails