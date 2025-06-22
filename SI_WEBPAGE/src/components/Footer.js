import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="bg-white p-1 rounded-full flex items-center justify-center">
                <img 
                  src="/si_icon-removebg-preview.png" 
                  alt="Shield India Industrial Solutions" 
                  className="h-12 w-auto"
                  style={{background: 'transparent'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </span>
              <Shield className="h-8 w-8 text-primary-400 hidden" />
              <div className="ml-3">
                <span className="text-xl font-bold">Shield India</span>
                <div className="text-sm text-gray-400">Industrial Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of industrial protection solutions and safety equipment. 
              We ensure workplace safety with our comprehensive range of products and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-400 mr-3" />
                <span className="text-gray-300">+91-8778533557</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary-400 mr-3" />
                <span className="text-gray-300">shieldindia.net</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-primary-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Chennai, Tamilnadu<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Shield India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 