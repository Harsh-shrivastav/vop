import React from 'react';
import { Users, MessageCircle, Heart, Globe, Shield, Lightbulb, Target, Award, Mail, Phone, MapPin, BookOpen, History } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const stats = [
    { number: '10K+', label: 'Community Voices', icon: Users },
    { number: '500+', label: 'Issues Shared', icon: MessageCircle },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '1000+', label: 'Solutions Posted', icon: Lightbulb }
  ];

  const steps = [
    {
      title: 'Share Your Story',
      description: 'Document poverty-related challenges in your community with detailed posts about water, housing, education, or infrastructure issues.',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Connect & Discuss',
      description: 'Engage with others facing similar challenges, share experiences, and participate in meaningful conversations.',
      icon: '🤝',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Build Solutions',
      description: 'Collaborate on practical solutions, earn Voice Points for contributions, and help create lasting change.',
      icon: '💡',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const values = [
    {
      title: 'Dignityy',
      description: 'Every voice matters. We treat all community members with respect and recognize the expertise that comes from lived experience.',
      icon: Heart
    },
    {
      title: 'Transparency',
      description: 'Open dialogue about challenges and solutions, with clear information about how the platform works.',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'Breaking down silos between communities, organizations, and individuals to work together.',
      icon: Users
    },
    {
      title: 'Sustainability',
      description: 'Focusing on long-term, community-led solutions rather than short-term fixes.',
      icon: Target
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former NGO director with 12 years of experience in community development across Asia and Africa.',
      avatar: '👩‍💼',
      color: 'bg-amber-100'
    },
    {
      name: 'Marcus Johnson',
      role: 'Community Manager',
      bio: 'Community organizer who has built grassroots movements in urban communities for over 8 years.',
      avatar: '👨‍🤝‍👨',
      color: 'bg-sky-100'
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Impact Advisor',
      bio: 'Social economist with expertise in measuring community program effectiveness and sustainable development.',
      avatar: '👩‍🎓',
      color: 'bg-emerald-100'
    },
    {
      name: 'Alex Rivera',
      role: 'Technical Lead',
      bio: 'Software engineer passionate about using technology to solve social challenges in underserved communities.',
      avatar: '👨‍💻',
      color: 'bg-violet-100'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'The Beginning',
      description: 'Voices on Poverty started as a small blog documenting stories from communities affected by economic hardship.',
      icon: '🌱'
    },
    {
      year: '2025',
      title: 'Growing Community',
      description: 'Expanded to include community forums where people could share experiences and support each other.',
      icon: '🌿'
    },
    {
      year: '2025',
      title: 'Solution Platform',
      description: 'Launched collaborative features allowing communities to work together on practical solutions.',
      icon: '🌳'
    },
    {
      year: '2025',
      title: 'Global Impact',
      description: 'Now operating in over 50 countries with thousands of community-driven solutions implemented.',
      icon: '🌍'
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header section with book motif */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551043077-3d9901a5f9d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-teal-800 px-4 py-2 rounded-md mb-4">
                <BookOpen className="w-5 h-5 inline-block mr-2" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
                About Voices on Poverty
              </h1>
              <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                We're building a global community that believes poverty solutions should come from within communities themselves. Our platform connects lived experiences with collaborative action.
              </p>
              <div className="flex space-x-4">
                <Link to="/issues" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition duration-200">
                  See Community Issues
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-teal-400 text-teal-100 hover:bg-teal-800 px-6 py-3 rounded-md font-medium transition duration-200">
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-2xl transform rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <span className="text-7xl block mb-2">📚</span>
                    <div className="text-xl font-bold">Our Journey</div>
                    <div className="text-sm mt-2">Since 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-900">Our Journey</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From a simple idea to a global movement - how we've grown over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1"></div>
                  
                  {/* Center point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-teal-100 border-4 border-teal-500 flex items-center justify-center z-10">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  
                  {/* Content box */}
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-lg shadow-md mx-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats in cards */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900">Our Impact</h2>
            <p className="text-gray-600 mt-4">
              The numbers that drive our commitment to change
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-1 transition duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-full mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-teal-800 mb-1">{stat.number}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900">Our Values</h2>
            <p className="text-gray-600 mt-4">
              The principles that guide our community and platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900">Meet Our Team</h2>
            <p className="text-gray-600 mt-4">
              The passionate people behind Voices on Poverty
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className={`${member.color} p-8 text-center`}>
                  <span className="text-5xl">{member.avatar}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-teal-600 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Community Voices</h2>
            <p className="text-teal-200 mt-4">
              What members of our community have to say
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-teal-800 p-6 rounded-lg">
              <p className="mb-4 italic">"This platform gave me a way to share the water issues in my village with a global audience. Now we're working with engineers from another country on solutions."</p>
              <footer className="font-medium">
                <div>Nala Wambua</div>
                <div className="text-teal-300 text-sm">Community Member, Kenya</div>
              </footer>
            </blockquote>
            
            <blockquote className="bg-teal-800 p-6 rounded-lg">
              <p className="mb-4 italic">"I've been able to contribute my expertise to help communities facing housing challenges. It's been incredible to see my professional skills making a real difference."</p>
              <footer className="font-medium">
                <div>Miguel Hernandez</div>
                <div className="text-teal-300 text-sm">Urban Planner, Mexico</div>
              </footer>
            </blockquote>
            
            <blockquote className="bg-teal-800 p-6 rounded-lg">
              <p className="mb-4 italic">"Voices on Poverty helped our community organize around education issues. We've improved school attendance by 40% through solutions we developed right here."</p>
              <footer className="font-medium">
                <div>Priya Sharma</div>
                <div className="text-teal-300 text-sm">Teacher, India</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Whether you're sharing your story or offering solutions, there's a place for you in the Voices on Poverty community.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md">
              Sign Up Now
            </Link>
            <Link to="/contact" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎤</span>
                </div>
                <span className="font-bold text-lg">Voices on Poverty</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering communities to create lasting change through shared voices and collaborative solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Navigate</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-teal-300 transition-colors">Home</Link></li>
                <li><Link to="/issues" className="hover:text-teal-300 transition-colors">Issues</Link></li>
                <li><Link to="/about" className="hover:text-teal-300 transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-teal-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-teal-300 transition-colors">Terms of Service</Link></li>
                <li><Link to="/guidelines" className="hover:text-teal-300 transition-colors">Community Guidelines</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Connect</h3>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Mail className="w-5 h-5" />
                <span>contact@voicesonpoverty.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 Voices on Poverty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};