
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Dean's List Recognition",
      organization: "RUDN University",
      date: "2023",
      type: "Academic",
      icon: <Trophy className="text-yellow-600" size={24} />,
      description: "Achieved outstanding academic performance with GPA above 4.5, earning recognition on the Dean's List for academic excellence.",
      impact: "Top 10% of Computer Science students"
    },
    {
      title: "Programming Competition Finalist",
      organization: "Moscow Regional Programming Contest",
      date: "2023",
      type: "Competition",
      icon: <Award className="text-blue-600" size={24} />,
      description: "Reached finals in the regional programming competition, solving complex algorithmic problems under time pressure.",
      impact: "Ranked among top 20 participants"
    },
    {
      title: "Research Paper Publication",
      organization: "University Research Journal",
      date: "2024",
      type: "Research",
      icon: <Star className="text-purple-600" size={24} />,
      description: "Co-authored research paper on machine learning applications in student performance prediction, published in university journal.",
      impact: "Contributing to academic knowledge in AI"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      date: "2023 - Present",
      type: "Community",
      icon: <Target className="text-green-600" size={24} />,
      description: "Active contributor to open-source projects, with over 50 commits to various Python and web development repositories.",
      impact: "500+ contributions across projects"
    },
    {
      title: "Coding Bootcamp Mentor",
      organization: "Student Tech Community",
      date: "2023",
      type: "Leadership",
      icon: <Award className="text-orange-600" size={24} />,
      description: "Served as mentor for junior students in coding bootcamp, helping them learn programming fundamentals and best practices.",
      impact: "Mentored 15+ students successfully"
    },
    {
      title: "Hackathon Winner",
      organization: "RUDN Tech Hackathon",
      date: "2023",
      type: "Competition",
      icon: <Trophy className="text-red-600" size={24} />,
      description: "Won first place in university hackathon by developing an AI-powered study assistant application in 48 hours.",
      impact: "Led team of 4 developers"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Competition': 'bg-yellow-100 text-yellow-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Community': 'bg-green-100 text-green-800',
      'Leadership': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-xl text-gray-600">Recognition and accomplishments throughout my journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="bg-gray-50 p-3 rounded-full">
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <Badge className={getTypeColor(achievement.type)}>
                      {achievement.type}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                  </div>
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  {achievement.title}
                </CardTitle>
                <p className="text-sm text-blue-600 font-medium">
                  {achievement.organization}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="border-t pt-3">
                  <p className="text-xs text-gray-500 font-medium">Impact:</p>
                  <p className="text-sm text-gray-700">{achievement.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Major Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.5+</div>
            <div className="text-gray-600">Academic GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Open Source Commits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Students Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
