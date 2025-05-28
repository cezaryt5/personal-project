
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mohamed Musa</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student at RUDN University, passionate about AI development 
              and creating innovative solutions through technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mohamed.musa@student.rudn.ru" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 mohamed.musa@student.rudn.ru</p>
              <p>📍 Moscow, Russia</p>
              <p>🎓 RUDN University</p>
              <p>💼 Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Mohamed Musa. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
