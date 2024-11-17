import { ArrowRight, Rocket, Shield, Zap } from 'lucide-react';

export default function Hero() {
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
        
        <div className="mt-20 sm:mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900/5 px-6 py-12 sm:rounded-3xl sm:px-10 sm:py-16 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <Rocket className="h-12 w-12 text-pink-500" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">Community Driven</h3>
                  <p className="mt-2 text-base text-gray-600">Built by the community, for the community. Every poodle has its day!</p>
                </div>
              </div>
              <div className="flex flex-col">
                <Shield className="h-12 w-12 text-pink-500" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">Secure & Verified</h3>
                  <p className="mt-2 text-base text-gray-600">Fully audited smart contract with locked liquidity.</p>
                </div>
              </div>
              <div className="flex flex-col">
                <Zap className="h-12 w-12 text-pink-500" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                  <p className="mt-2 text-base text-gray-600">Leveraging AI for community engagement and utility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}