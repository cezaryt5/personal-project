
import { Button } from '@/components/ui/button';
import { Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Mohamed
              <span className="block text-blue-600">Musa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Computer Science Student at RUDN University passionate about software development. 
              Specializing in Python, C++, and web technologies with aspirations to become an AI developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Github className="mr-2" size={20} />
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/lovable-uploads/9948a0a2-0846-4e7e-8d89-d04f5389df96.png"
                  alt="Mohamed Musa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
