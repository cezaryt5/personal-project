
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "Python", level: 85, description: "Data structures, algorithms, ML libraries" },
        { name: "C++", level: 80, description: "Object-oriented programming, STL" },
        { name: "HTML/CSS", level: 75, description: "Responsive web design, modern CSS" },
        { name: "JavaScript", level: 65, description: "ES6+, DOM manipulation" }
      ]
    },
    {
      title: "Technologies & Frameworks",
      icon: <Globe className="text-green-600" size={24} />,
      skills: [
        { name: "React", level: 70, description: "Component-based development" },
        { name: "Git/GitHub", level: 80, description: "Version control, collaboration" },
        { name: "Linux", level: 75, description: "Command line, system administration" },
        { name: "VS Code", level: 85, description: "Efficient development workflow" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-purple-600" size={24} />,
      skills: [
        { name: "Machine Learning Concepts", level: 70, description: "Supervised/unsupervised learning" },
        { name: "NumPy/Pandas", level: 75, description: "Data manipulation and analysis" },
        { name: "TensorFlow Basics", level: 60, description: "Neural network fundamentals" },
        { name: "Algorithm Design", level: 80, description: "Problem-solving approaches" }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-orange-600" size={24} />,
      skills: [
        { name: "SQL", level: 65, description: "Database design and queries" },
        { name: "MongoDB", level: 55, description: "NoSQL database basics" },
        { name: "Docker", level: 50, description: "Containerization concepts" },
        { name: "Agile/Scrum", level: 60, description: "Project management methodologies" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">My technical expertise and proficiency levels</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="mb-1" />
                      <p className="text-sm text-gray-600">{skill.description}</p>
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

export default Skills;
