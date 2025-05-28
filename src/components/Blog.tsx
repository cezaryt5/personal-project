
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Version Control with Git: A Complete Guide",
      excerpt: "Understanding the fundamentals of Git and how it revolutionizes collaborative software development. From basic commands to advanced workflows.",
      date: "2024-05-25",
      readTime: "8 min read",
      category: "Version Control",
      tags: ["Git", "Development", "Collaboration"],
      featured: true
    },
    {
      title: "CI/CD: Streamlining Software Deployment",
      excerpt: "Exploring Continuous Integration and Continuous Deployment practices that ensure reliable, automated software delivery pipelines.",
      date: "2024-05-20",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["CI/CD", "Automation", "DevOps"],
      featured: false
    },
    {
      title: "Markdown: The Lightweight Markup Language",
      excerpt: "Why Markdown has become the go-to choice for documentation and content creation in the tech world. Simple syntax, powerful results.",
      date: "2024-05-15",
      readTime: "6 min read",
      category: "Markup Languages",
      tags: ["Markdown", "Documentation", "Writing"],
      featured: false
    },
    {
      title: "LaTeX for Academic Writing",
      excerpt: "How LaTeX enables beautiful, professional document formatting for academic papers, theses, and scientific publications.",
      date: "2024-05-10",
      readTime: "10 min read",
      category: "Academic Tools",
      tags: ["LaTeX", "Academic Writing", "Typography"],
      featured: false
    },
    {
      title: "Python for Scientific Programming",
      excerpt: "Leveraging Python's ecosystem for scientific computing, data analysis, and research applications in academia and industry.",
      date: "2024-05-05",
      readTime: "15 min read",
      category: "Programming",
      tags: ["Python", "Science", "Data Analysis"],
      featured: true
    },
    {
      title: "Creating Effective Presentations",
      excerpt: "Best practices for designing and delivering compelling presentations that engage audiences and communicate ideas effectively.",
      date: "2024-05-01",
      readTime: "7 min read",
      category: "Communication",
      tags: ["Presentations", "Design", "Communication"],
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Version Control': 'bg-blue-100 text-blue-800',
      'DevOps': 'bg-green-100 text-green-800',
      'Markup Languages': 'bg-purple-100 text-purple-800',
      'Academic Tools': 'bg-orange-100 text-orange-800',
      'Programming': 'bg-red-100 text-red-800',
      'Communication': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
          <p className="text-xl text-gray-600">Sharing knowledge and insights from my learning journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Posts</h3>
            <div className="space-y-6">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
            <div className="space-y-4">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Badge className={getCategoryColor(post.category)} variant="secondary">
                      {post.category}
                    </Badge>
                    <h4 className="font-semibold text-gray-900 mt-2 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {post.excerpt.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Blog Stats */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Blog Statistics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Posts</span>
                    <span className="font-semibold">{blogPosts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categories</span>
                    <span className="font-semibold">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
