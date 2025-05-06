'use client'
import { ArrowUpRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/components/ui/input';
// Blog posts data
const blogPosts = [
    {
      id: 1,
      title: 'Bill Walsh leadership lessons',
      excerpt: 'Like to know that Like to know the secrets of transforming a secrets of transforming a',
      author: 'Alec Whitten',
      date: '17 Jan 2024',
      image: 'https://images.pexels.com/photos/31649016/pexels-photo-31649016/free-photo-of-vibrant-cherry-blossom-trees-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      categories: ['Leadership', 'Management']
    },
    {
      id: 2,
      title: 'PM mental models',
      excerpt: 'Mental models are simple expressions of complex processes or relationships.',
      author: 'Demi Wilkinson',
      date: '18 Jan 2024',
      image: 'https://images.pexels.com/photos/29940748/pexels-photo-29940748/free-photo-of-scenic-mountain-landscape-in-french-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['Product', 'Research', 'Frameworks']
    },
    {
      id: 3,
      title: 'What is Wireframing?',
      excerpt: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      author: 'Candice Wu',
      date: '15 Jan 2024',
      image: 'https://images.pexels.com/photos/31630117/pexels-photo-31630117/free-photo-of-scenic-view-of-canzo-in-lombardian-alps.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      categories: ['Design', 'Research']
    },
    {
      id: 4,
      title: 'Design System Fundamentals',
      excerpt: 'How to build a robust design system that scales with your organization.',
      author: 'Simon Lewis',
      date: '22 Jan 2024',
      image: 'https://images.pexels.com/photos/30910936/pexels-photo-30910936/free-photo-of-dramatic-wave-crest-at-iquique-s-pacific-coast.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
      categories: ['Design', 'Frameworks']
    },
    {
      id: 5,
      title: 'Agile Development Principles',
      excerpt: 'A comprehensive guide to implementing agile methodologies in your team.',
      author: 'Maria Rodriguez',
      date: '10 Jan 2024',
      image: 'https://images.pexels.com/photos/31745954/pexels-photo-31745954/free-photo-of-tranquil-beach-scene-with-lifeguard-hut-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      categories: ['Management', 'Frameworks']
    },
    {
      id: 6,
      title: 'Research Methods in UX',
      excerpt: 'Effective techniques for gathering user insights and translating them into design decisions.',
      author: 'James Chen',
      date: '5 Jan 2024',
      image: 'https://images.pexels.com/photos/13928696/pexels-photo-13928696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      categories: ['Research', 'Design']
    }
  ];


export default function BlogWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<typeof blogPosts>([]);
  
  // Categories shown in the image
  const categories = [
    { name: 'All', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Frameworks', color: 'orange' },
    { name: 'Research', color: 'blue' },
    { name: 'Leadership', color: 'blue' },
    { name: 'Product', color: 'blue' },
    { name: 'Design', color: 'blue' }
  ];
  
  // This creates the tag pattern 
  const displayCategories = [
    { name: 'Management', color: 'blue' },
    { name: 'Frameworks', color: 'orange' },
    { name: 'Research', color: 'blue' },
    { name: 'Research', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Leadership', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Management', color: 'blue' },
    { name: 'Frameworks', color: 'orange' },
    { name: 'Research', color: 'blue' }
  ];

  

  // Filter posts based on search query and selected category
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => 
        post.categories.includes(selectedCategory)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container w-full md:w-3/5  mx-auto space-y-8 p-4 mt-14">
      {/* Search Bar */}
      <div className="relative w-full md:w-3/4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <Input 
            className="w-full pl-10 py-6 px-12 rounded-full border border-gray-200" 
            placeholder="Search any topic" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="space-y-4 w-full md:w-3/4">
        <h2 className="text-xl font-medium">Filter By :</h2>
        
        <div className="flex flex-wrap gap-3">
          {displayCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${(category.name === selectedCategory || (selectedCategory === 'All' && index === 0))
                  ? (category.color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600')
                  : (category.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600')
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Title */}
      <div className="pt-4">
        <h2 className="text-2xl font-bold">All blog posts</h2>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="flex flex-col  rounded-lg overflow-hidden bg-white  hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-xl font-medium mb-2 flex items-center justify-between">
                {post.title}
                <ArrowUpRight className="h-6 w-6 text-black" />
              </h3>
              
              <p className="text-gray-600 flex-grow mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.categories.map((cat, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cat === 'Frameworks' ? 'bg-orange-50 text-orange-600' : 
                      cat === 'Product' ? 'bg-blue-50 text-blue-600' :
                      cat === 'Research' ? 'bg-blue-50 text-blue-600' :
                      cat === 'Design' ? 'bg-blue-50 text-blue-600' :
                      cat === 'Leadership' ? 'bg-blue-50 text-blue-600' :
                      'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No posts found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}