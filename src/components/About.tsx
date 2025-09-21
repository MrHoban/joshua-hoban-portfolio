import React from 'react';

const About: React.FC = () => {
  const skills = [
    { category: 'Programming Languages', items: ['Python', 'JavaScript', 'Java', 'C#', 'Node.js'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL'] },
    { category: 'Cloud & DevOps', items: ['Microsoft Azure', 'Git', 'Docker'] },
    { category: 'Web Technologies', items: ['React', 'HTML5', 'CSS3', 'TypeScript'] },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a strong foundation in multiple programming languages and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a dedicated developer with a passion for creating innovative solutions and learning new technologies. 
              My journey in programming has led me to master multiple languages and frameworks, with a particular 
              focus on full-stack development and cloud technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With certifications in Azure (AZ-900), Python Data Analytics, and various programming languages, 
              I bring both theoretical knowledge and practical experience to every project. I enjoy tackling 
              complex problems and turning ideas into reality through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-lg">
                <span className="font-semibold">3+</span> Years Experience
              </div>
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg">
                <span className="font-semibold">8+</span> Certifications
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                <span className="font-semibold">Multiple</span> Languages
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Technical Skills
            </h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
