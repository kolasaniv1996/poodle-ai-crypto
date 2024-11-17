import { PieChart, Wallet, Lock, Gift } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tokenomics</h2>
          <p className="mt-4 text-lg text-gray-600">
            Total Supply: 1,000,000,000,000 $POODLE
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <PieChart className="h-12 w-12 text-pink-500" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">40%</h3>
                <p className="mt-2 text-gray-600">Liquidity Pool</p>
              </div>
            </div>

            <div className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <Wallet className="h-12 w-12 text-pink-500" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">30%</h3>
                <p className="mt-2 text-gray-600">Community Rewards</p>
              </div>
            </div>

            <div className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <Lock className="h-12 w-12 text-pink-500" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">20%</h3>
                <p className="mt-2 text-gray-600">Development</p>
              </div>
            </div>

            <div className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <Gift className="h-12 w-12 text-pink-500" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">10%</h3>
                <p className="mt-2 text-gray-600">Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}