
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "RUDN University AI Lab",
      location: "Moscow, Russia",
      period: "2023 - Present",
      type: "Part-time",
      description: "Contributing to research projects in artificial intelligence and machine learning. Assisting in data collection, analysis, and implementation of AI algorithms for various applications.",
      achievements: [
        "Collaborated on machine learning model development",
        "Participated in research paper preparation",
        "Gained hands-on experience with AI frameworks",
        "Contributed to open-source research projects"
      ],
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Git"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Local Tech Startup",
      location: "Moscow, Russia",
      period: "Summer 2023",
      type: "Internship",
      description: "Developed responsive web interfaces using modern web technologies. Worked closely with the design team to implement user-friendly interfaces and optimize user experience.",
      achievements: [
        "Built responsive web components using React",
        "Improved website loading speed by 30%",
        "Collaborated with cross-functional teams",
        "Implemented modern CSS techniques"
      ],
      technologies: ["React", "HTML/CSS", "JavaScript", "Git", "Figma"]
    },
    {
      title: "Programming Tutor",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      type: "Part-time",
      description: "Providing programming tutoring services to fellow students and beginners. Teaching fundamental programming concepts in Python and C++, helping students build strong coding foundations.",
      achievements: [
        "Successfully tutored 20+ students",
        "Developed curriculum for beginners",
        "Improved student programming skills by 40%",
        "Created educational coding resources"
      ],
      technologies: ["Python", "C++", "Teaching", "Problem-solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and practical experiences</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-2">
                        <div className="flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
