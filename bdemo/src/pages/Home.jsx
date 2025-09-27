import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Package, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Complete range of industrial safety equipment and protective gear for all workplace environments.'
    },
    {
      icon: Package,
      title: 'Quality Products',
      description: 'Premium quality products that meet international safety standards and certifications.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of safety experts to help you choose the right protection solutions.'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'All products are certified and tested to ensure maximum safety and reliability.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Products Available' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const protectionTypes = [
    {
      name: 'Personal Protection',
      description: 'Safety helmets, gloves, eyewear, and protective clothing',
      color: 'bg-blue-500'
    },
    {
      name: 'Fall Protection',
      description: 'Harnesses, lanyards, and fall arrest systems',
      color: 'bg-green-500'
    },
    {
      name: 'Respiratory Protection',
      description: 'Masks, respirators, and breathing apparatus',
      color: 'bg-purple-500'
    },
    {
      name: 'Hearing Protection',
      description: 'Ear muffs, ear plugs, and noise reduction equipment',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8" />
                <span className="text-xl font-semibold">Shield India</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industrial Safety
                <span className="block text-primary-200">Solutions</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Protecting lives and ensuring workplace safety with premium industrial protection equipment and comprehensive safety solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center space-x-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <Phone className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <Shield className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shield India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality safety equipment and protection solutions for industrial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Protection Types Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Protection Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of protection equipment for every industrial need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionTypes.map((type, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Workforce?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our safety experts to find the perfect protection solutions for your workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="btn bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <span>Browse Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center space-x-2"
            >
              <span>Get Quote</span>
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 mb-2" />
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-gray-400">+91 123 456 7890</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 mb-2" />
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-gray-400">info@shieldindia.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 mb-2" />
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-gray-400">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 