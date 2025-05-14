'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Input } from '@/components/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export const FilterBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || ''
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );

  const updateQueryString = useCallback(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);

    router.push(`?${params.toString()}`);
  }, [searchQuery, selectedCategory, router]);

  useEffect(() => {
    const debounce = setTimeout(updateQueryString, 400); // Optional debounce
    return () => clearTimeout(debounce);
  }, [searchQuery, selectedCategory, updateQueryString]);

  const displayCategories = [
    { name: 'All', color: 'gray' },
    { name: 'Management', color: 'blue' },
    { name: 'Frameworks', color: 'orange' },
    { name: 'Research', color: 'blue' },
    { name: 'Leadership', color: 'blue' }
  ];

  return (
    <div>
      {/* Search Bar */}
      <div className="relative w-full mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <Input
          className="w-full tracking-wide !text-xl pl-10 py-6 px-12 rounded-full border border-gray-200"
          placeholder="Search any topic"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="space-y-4 w-full">
        <div className="flex justify-center flex-wrap gap-3">
          {displayCategories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedCategory(category.name === 'All' ? '' : category.name)
              }
              className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category.name ||
                  (selectedCategory === '' && category.name === 'All')
                    ? category.color === 'orange'
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-blue-100 text-blue-600'
                    : category.color === 'orange'
                    ? 'bg-orange-50 text-orange-600'
                    : 'bg-blue-50 text-blue-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBlog;
