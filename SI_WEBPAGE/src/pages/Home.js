import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Industrial Safety",
      description: "Comprehensive safety solutions for industrial environments"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your safety"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Certified products meeting international safety standards"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency services"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed text-white py-24 min-h-[600px]"
        style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-70"></div> {/* Overlay for text readability */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Industrial Protection Solutions
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Your trusted partner for workplace safety and industrial protection equipment. 
                We provide comprehensive safety solutions to protect your workforce and assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg p-8 flex items-center justify-center">
                <img 
                  src="/si_icon-removebg-preview.png" 
                  alt="Shield India Industrial Solutions" 
                  className="h-64 w-auto"
                  style={{background: 'transparent'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Shield className="h-32 w-32 text-white hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Shield India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality industrial protection solutions 
              with unmatched expertise and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive industrial protection and safety solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fire Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Complete fire safety solutions including extinguishers, alarms, and suppression systems.
              </p>
              <Link to="/services" className="text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Electrical Safety
              </h3>
              <p className="text-gray-600 mb-4">
                Electrical protection equipment and safety solutions for industrial environments.
              </p>
              <Link to="/services" className="text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Personal protective equipment and safety gear for workplace protection.
              </p>
              <Link to="/services" className="text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your Workplace?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get in touch with our experts for a consultation and customized safety solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 