
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "RUDN University",
      location: "Moscow, Russia",
      period: "2021 - Present",
      description: "Pursuing a comprehensive computer science education with focus on algorithms, data structures, software engineering, and artificial intelligence. Maintaining strong academic performance while participating in research projects.",
      highlights: [
        "Core subjects: Programming, Data Structures, Algorithms",
        "Specialized courses in AI and Machine Learning",
        "Active participation in coding competitions",
        "Research involvement in AI applications"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">My academic journey and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="mb-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <GraduationCap size={16} className="mr-1" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                          <MapPin size={16} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
