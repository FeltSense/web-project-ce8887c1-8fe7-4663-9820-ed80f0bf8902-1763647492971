import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chic Threads Boutique',
  description: 'Discover the latest fashion trends at Chic Threads Boutique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <header className="bg-white shadow-sm py-4 px-6 md:px-12 fixed w-full z-10 top-0">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Chic Threads
            </a>
            <ul className="flex space-x-6">
              <li><a href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shop</a></li>
              <li><a href="/new-arrivals" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">New Arrivals</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-20 min-h-screen"> {/* Adjust padding top for fixed header */}
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Chic Threads Boutique. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/privacy" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}