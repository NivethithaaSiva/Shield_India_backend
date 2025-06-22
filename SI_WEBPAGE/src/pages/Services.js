import React from 'react';
import { 
  Shield, 
  Flame, 
  Zap, 
  Users, 
  Settings, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Protection Systems",
      description: "Complete fire safety solutions including detection, suppression, and prevention systems.",
      features: [
        "Fire detection and alarm systems",
        "Automatic sprinkler systems",
        "Fire extinguishers and equipment",
        "Emergency lighting systems",
        "Fire safety training"
      ],
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Zap,
      title: "Electrical Safety",
      description: "Electrical protection and safety solutions for industrial and commercial environments.",
      features: [
        "Circuit protection devices",
        "Ground fault protection",
        "Electrical safety audits",
        "Lightning protection systems",
        "Electrical maintenance services"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Shield,
      title: "Personal Protection Equipment",
      description: "Comprehensive range of personal protective equipment for workplace safety.",
      features: [
        "Safety helmets and hard hats",
        "Protective eyewear and face shields",
        "Safety gloves and hand protection",
        "Safety footwear and boots",
        "Respiratory protection equipment"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "Safety Training & Consulting",
      description: "Professional safety training and consulting services for organizations.",
      features: [
        "Workplace safety training",
        "Emergency response training",
        "Safety compliance consulting",
        "Risk assessment services",
        "Safety audit and inspection"
      ],
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Settings,
      title: "System Installation & Maintenance",
      description: "Professional installation, maintenance, and repair services for safety systems.",
      features: [
        "System design and installation",
        "Preventive maintenance programs",
        "Emergency repair services",
        "System upgrades and modifications",
        "24/7 technical support"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Award,
      title: "Compliance & Certification",
      description: "Help organizations meet safety standards and regulatory requirements.",
      features: [
        "ISO certification support",
        "OSHA compliance assistance",
        "Safety documentation",
        "Regulatory audits",
        "Compliance training"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We conduct a thorough assessment of your safety requirements and current systems."
    },
    {
      number: "02",
      title: "Planning",
      description: "Develop a comprehensive safety plan tailored to your specific needs and budget."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Install and configure all safety systems with professional expertise."
    },
    {
      number: "04",
      title: "Training",
      description: "Provide comprehensive training to your staff on safety procedures and equipment."
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing maintenance, monitoring, and support to ensure continued safety."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive industrial protection and safety solutions designed to protect 
            your workforce, assets, and business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Professional safety solutions tailored to your industry and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 rounded-lg ${service.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional safety solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Shield India?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Certified professionals with years of experience in industrial safety and protection systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Quality Products
                    </h3>
                    <p className="text-gray-600">
                      We partner with leading manufacturers to provide certified, high-quality safety equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support and emergency services to ensure your safety.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Customized Solutions
                    </h3>
                    <p className="text-gray-600">
                      Tailored safety solutions designed specifically for your industry and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get a Free Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our experts for a free safety assessment and customized solution proposal.
              </p>
              <button className="btn-primary w-full">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 