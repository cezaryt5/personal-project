
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target, Heart } from 'lucide-react';

const About = () => {
  const interests = [
    "Artificial Intelligence & Machine Learning",
    "Software Development",
    "Web Technologies",
    "Data Structures & Algorithms",
    "Open Source Contribution",
    "Research & Innovation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate computer science student with a strong foundation in programming 
            and a clear vision for the future in AI development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Biography</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm Mohamed Musa, a dedicated Computer Science student at RUDN University. 
              My journey in technology began with a curiosity about how software works, 
              which has evolved into a passionate pursuit of knowledge in programming 
              and artificial intelligence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Currently, I'm proficient in Python, C++, HTML, and CSS, with a strong focus 
              on building robust applications and exploring the fascinating world of AI. 
              My goal is to become an AI developer and contribute to innovative solutions 
              that can make a positive impact on society.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and staying updated with the latest 
              technological advancements. My academic journey at RUDN University has 
              provided me with a solid foundation in computer science principles, 
              which I complement with practical projects and research.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Heart className="mr-2 text-red-500" size={24} />
              Interests
            </h3>
            <div className="grid gap-4">
              {interests.map((interest, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{interest}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
