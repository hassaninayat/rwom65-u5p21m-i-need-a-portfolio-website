import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to my blog! Here you'll find articles on various topics related to web development, design, and more.</p>
          <ul className="space-y-4">
            <li>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold">Article Title 1</h3>
                  <p>Brief description of the article content goes here.</p>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold">Article Title 2</h3>
                  <p>Brief description of the article content goes here.</p>
                </CardContent>
              </Card>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;