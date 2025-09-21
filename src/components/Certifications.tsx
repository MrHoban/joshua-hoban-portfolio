import React from 'react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  category: 'Cloud' | 'Programming' | 'Database' | 'Data Analytics';
  icon: string;
  color: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      level: "Professional",
      category: "Cloud",
      icon: "☁️",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Python Data Analytics",
      issuer: "Certification Provider",
      level: "Advanced",
      category: "Data Analytics",
      icon: "📊",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Python Fundamentals",
      issuer: "Certification Provider",
      level: "Advanced",
      category: "Programming",
      icon: "🐍",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      name: "Python Advanced",
      issuer: "Certification Provider",
      level: "Advanced",
      category: "Programming",
      icon: "🐍",
      color: "bg-yellow-600"
    },
    {
      id: 5,
      name: "Java Programming",
      issuer: "Certification Provider",
      level: "Beginner",
      category: "Programming",
      icon: "☕",
      color: "bg-red-500"
    },
    {
      id: 6,
      name: "C# Programming",
      issuer: "Microsoft",
      level: "Beginner",
      category: "Programming",
      icon: "#️⃣",
      color: "bg-purple-500"
    },
    {
      id: 7,
      name: "Node.js Development",
      issuer: "Certification Provider",
      level: "Beginner",
      category: "Programming",
      icon: "🟢",
      color: "bg-green-600"
    },
    {
      id: 8,
      name: "JavaScript Programming",
      issuer: "Certification Provider",
      level: "Beginner",
      category: "Programming",
      icon: "🟨",
      color: "bg-yellow-400"
    },
    {
      id: 9,
      name: "PostgreSQL Database",
      issuer: "Certification Provider",
      level: "Beginner",
      category: "Database",
      icon: "🐘",
      color: "bg-blue-600"
    },
    {
      id: 10,
      name: "MySQL Database",
      issuer: "Oracle",
      level: "Beginner",
      category: "Database",
      icon: "🗄️",
      color: "bg-orange-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Advanced':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Professional':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise across various technologies and platforms
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {certifications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {certifications.filter(c => c.level === 'Advanced').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Advanced Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {Object.keys(groupedCertifications).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {certifications.filter(c => c.level === 'Professional').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Professional</div>
          </div>
        </div>

        {/* Certifications by Category */}
        <div className="space-y-12">
          {Object.entries(groupedCertifications).map(([category, certs]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {cert.issuer}
                        </p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest technologies and best practices. 
              Currently pursuing additional certifications in cloud architecture and advanced data science.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
