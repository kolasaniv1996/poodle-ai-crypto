import { Twitter, MessageCircle, MessagesSquare } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Join Our Community</h2>
          <p className="mt-4 text-lg text-gray-600">
            Be part of the fastest-growing poodle community in crypto
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <a
            href="#"
            className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
            <div className="relative bg-white p-6 rounded-xl">
              <Twitter className="h-12 w-12 mx-auto text-pink-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Twitter</h3>
              <p className="mt-2 text-gray-600">Follow us for the latest updates</p>
            </div>
          </a>

          <a
            href="#"
            className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
            <div className="relative bg-white p-6 rounded-xl">
              <MessagesSquare className="h-12 w-12 mx-auto text-pink-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Telegram</h3>
              <p className="mt-2 text-gray-600">Join our active community</p>
            </div>
          </a>

          <a
            href="#"
            className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200 blur"></div>
            <div className="relative bg-white p-6 rounded-xl">
              <MessageCircle className="h-12 w-12 mx-auto text-pink-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Discord</h3>
              <p className="mt-2 text-gray-600">Chat with fellow poodles</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}