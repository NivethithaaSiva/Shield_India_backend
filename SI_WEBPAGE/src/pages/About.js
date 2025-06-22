import React from 'react';
import { 
  Shield, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in everything we do, ensuring the highest standards of protection."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of our business, and we strive to exceed their expectations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest quality standards in all our products and services."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices."
    }
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Shield India was established with a vision to provide comprehensive industrial safety solutions." },
    { year: "2016", title: "First Major Project", description: "Successfully completed our first large-scale industrial safety project." },
    { year: "2018", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management systems." },
    { year: "2020", title: "National Expansion", description: "Expanded operations across major industrial cities in India." },
    { year: "2022", title: "500+ Clients", description: "Reached milestone of serving over 500 satisfied clients." },
    { year: "2024", title: "Innovation Hub", description: "Launched our innovation center for advanced safety technology." }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      description: "20+ years of experience in industrial safety and protection systems."
    },
    {
      name: "Priya Sharma",
      position: "Technical Director",
      description: "Expert in fire protection and electrical safety systems."
    },
    {
      name: "Amit Patel",
      position: "Operations Manager",
      description: "Specializes in project management and client relations."
    },
    {
      name: "Sneha Reddy",
      position: "Safety Consultant",
      description: "Certified safety professional with expertise in compliance and training."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Shield India
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Leading provider of industrial protection solutions, committed to workplace safety 
            and excellence in service delivery.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To provide innovative and reliable industrial protection solutions that ensure 
                the safety and well-being of workers across all industries. We are committed 
                to delivering excellence through quality products, expert consultation, and 
                exceptional customer service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Comprehensive safety solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert technical support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality certified products</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the most trusted name in industrial safety and protection, recognized 
                for our innovation, reliability, and commitment to creating safer workplaces 
                across India and beyond.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Industry leadership in safety</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Innovation in protection technology</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Global safety standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and success
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-primary-100">
              Numbers that reflect our commitment to safety
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 