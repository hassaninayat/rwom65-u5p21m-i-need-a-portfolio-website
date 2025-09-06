import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 text-center">
      <p>© 2025 Portfolio Website. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;