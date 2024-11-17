// Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dog className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">PoodleAI</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#tokenomics" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                Tokenomics
              </a>
              <a href="#roadmap" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                Roadmap
              </a>
              <a href="#community" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                Community
              </a>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Buy $POODLE
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#tokenomics" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              Roadmap
            </a>
            <a href="#community" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              Community
            </a>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Buy $POODLE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Most Sophisticated
            <span className="text-pink-500"> Poodle </span>
            in Crypto
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join the fluffiest revolution in crypto. $POODLE combines meme culture with real utility, powered by artificial intelligence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-xl bg-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 flex items-center">
              Buy $POODLE <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a href="#about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-pink-500">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tokenomics Section
function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tokenomics</h2>
          <p className="mt-4 text-lg text-gray-600">Total Supply: 1,000,000,000,000 $POODLE</p>
        </div>
        {/* Add tokenomics grid here */}
      </div>
    </section>
  );
}

// Main App Component
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
            <p className="mt-2 text-sm text-gray-400">$POODLE is a meme coin for entertainment purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
