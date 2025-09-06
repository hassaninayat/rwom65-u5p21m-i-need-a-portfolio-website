import { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts';

const useBlogPosts = () => {
  const [data, setData] = useState<BlogPost[]>([]);

  useEffect(() => {
    setData(blogPosts);
  }, []);

  return data;
};

export default useBlogPosts;