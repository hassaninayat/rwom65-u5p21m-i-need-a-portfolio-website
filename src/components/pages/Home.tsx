import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to My Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover my work, skills, and projects. Let's create something amazing together!</p>
            <Button variant="primary">Get in Touch</Button>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <Carousel className="w-full max-w-3xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">Project {index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;