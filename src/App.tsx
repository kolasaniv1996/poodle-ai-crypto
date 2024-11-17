import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
        <Community />
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">© 2024 PoodleAI. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">
              $POODLE is a meme coin for entertainment purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;