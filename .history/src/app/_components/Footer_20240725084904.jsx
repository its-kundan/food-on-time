import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">About</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Item1</a></li>
              <li className="mb-2"><a href="#">Item2</a></li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Food Types</h3>
            <ul>
              <li className="mb-2"><a href="#">Italian</a></li>
              <li className="mb-2"><a href="#">Chinese</a></li>
              <li className="mb-2"><a href="#">Indian</a></li>
              <li className="mb-2"><a href="#">Mexican</a></li>
              <li className="mb-2"><a href="#">Japanese</a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Developer Social Media</h3>
            <ul>
              <li className="mb-2"><a href="#">Instagram</a></li>
              <li className="mb-2"><a href="#">Twitter</a></li>
              <li className="mb-2"><a href="#">YouTube</a></li>
              <li className="mb-2"><a href="#">Facebook</a></li>
              <li className="mb-2"><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <p> All Rights Resered to Kundan Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
