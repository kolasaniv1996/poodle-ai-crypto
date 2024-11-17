import { CheckCircle2, Circle } from 'lucide-react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Roadmap</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our journey to the moon, one paw at a time
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-16">
            {/* Phase 1 */}
            <div className="relative">
              <div className="relative flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <CheckCircle2 className="h-8 w-8 text-pink-500" />
                  </div>
                  <div className="pr-8 w-1/2 text-right">
                    <h3 className="text-xl font-bold text-gray-900">Phase 1</h3>
                    <ul className="mt-2 text-gray-600 space-y-2">
                      <li>Website Launch</li>
                      <li>Community Building</li>
                      <li>Smart Contract Deployment</li>
                    </ul>
                  </div>
                  <div className="pl-8 w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="relative flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Circle className="h-8 w-8 text-pink-500" />
                  </div>
                  <div className="pr-8 w-1/2"></div>
                  <div className="pl-8 w-1/2">
                    <h3 className="text-xl font-bold text-gray-900">Phase 2</h3>
                    <ul className="mt-2 text-gray-600 space-y-2">
                      <li>DEX Listing</li>
                      <li>Marketing Campaign</li>
                      <li>AI Integration Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="relative flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Circle className="h-8 w-8 text-pink-500" />
                  </div>
                  <div className="pr-8 w-1/2 text-right">
                    <h3 className="text-xl font-bold text-gray-900">Phase 3</h3>
                    <ul className="mt-2 text-gray-600 space-y-2">
                      <li>CEX Listings</li>
                      <li>NFT Collection Launch</li>
                      <li>Staking Platform</li>
                    </ul>
                  </div>
                  <div className="pl-8 w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative">
              <div className="relative flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Circle className="h-8 w-8 text-pink-500" />
                  </div>
                  <div className="pr-8 w-1/2"></div>
                  <div className="pl-8 w-1/2">
                    <h3 className="text-xl font-bold text-gray-900">Phase 4</h3>
                    <ul className="mt-2 text-gray-600 space-y-2">
                      <li>Mobile App Development</li>
                      <li>Cross-chain Integration</li>
                      <li>Global Marketing Expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}