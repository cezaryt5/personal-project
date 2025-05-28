
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, User, GraduationCap } from 'lucide-react';

const Research = () => {
  const researchLinks = [
    {
      name: "eLibrary",
      url: "https://elibrary.ru/",
      description: "Russian scientific electronic library",
      icon: <BookOpen className="text-blue-600" size={20} />,
      status: "Active Profile"
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/",
      description: "Academic search engine and citation database",
      icon: <GraduationCap className="text-red-600" size={20} />,
      status: "Profile Available"
    },
    {
      name: "ORCID",
      url: "https://orcid.org/",
      description: "Unique researcher identifier",
      icon: <User className="text-green-600" size={20} />,
      status: "ID: 0000-0000-0000-0000"
    },
    {
      name: "Mendeley",
      url: "https://www.mendeley.com/",
      description: "Reference manager and academic social network",
      icon: <BookOpen className="text-purple-600" size={20} />,
      status: "Research Profile"
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/",
      description: "Professional network for researchers",
      icon: <User className="text-teal-600" size={20} />,
      status: "Active Researcher"
    },
    {
      name: "Academia.edu",
      url: "https://www.academia.edu/",
      description: "Platform for academics to share research",
      icon: <GraduationCap className="text-blue-800" size={20} />,
      status: "Academic Profile"
    },
    {
      name: "arXiv",
      url: "https://arxiv.org/",
      description: "Open-access archive for scientific papers",
      icon: <BookOpen className="text-orange-600" size={20} />,
      status: "Researcher Profile"
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      description: "Code repository and collaboration platform",
      icon: <User className="text-gray-900" size={20} />,
      status: "Active Developer"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Academic Profiles</h2>
          <p className="text-xl text-gray-600">Connect with me on academic and research platforms</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {link.icon}
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  {link.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  {link.description}
                </p>
                <p className="text-xs text-green-600 font-medium mb-4">
                  {link.status}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  Visit Profile
                  <ExternalLink size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Research Interests</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Artificial Intelligence</h4>
                <p className="text-gray-600 text-sm">
                  Machine learning algorithms, neural networks, and AI applications in education
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Educational Technology</h4>
                <p className="text-gray-600 text-sm">
                  Technology-enhanced learning, adaptive systems, and student performance analysis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Software Engineering</h4>
                <p className="text-gray-600 text-sm">
                  Development methodologies, code quality, and collaborative programming practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
