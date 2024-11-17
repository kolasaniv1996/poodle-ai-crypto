import { Dog, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dog className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">PoodleAI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#tokenomics" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
              <a href="#roadmap" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              <a href="#community" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Community</a>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Buy $POODLE
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-pink-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#tokenomics" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
            <a href="#roadmap" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
            <a href="#community" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Community</a>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Buy $POODLE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}