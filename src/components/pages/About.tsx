import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/path/to/avatar.jpg" alt="Your Name" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">Your Name</h3>
              <p>I'm a passionate developer with a love for creating beautiful and functional web applications. With a background in design and development, I bring a unique perspective to every project.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;