import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Your Message" required />
            </div>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;