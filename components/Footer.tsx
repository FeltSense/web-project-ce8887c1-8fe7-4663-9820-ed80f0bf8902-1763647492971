import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">Chic Threads Boutique</h3>
          <p className="text-sm">
            Discover the latest trends and timeless classics at Chic Threads Boutique. Your destination for elegant and stylish apparel.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.657 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.007 3.703.05 1.125.12 1.749.56 2.156.792.42.232.859.567 1.23.936.369.369.702.799.932 1.23.23.407.67.986.792 2.156.043.918.05 1.27.05 3.703s-.007 2.784-.05 3.703c-.12 1.125-.56 1.749-.792 2.156-.232.42-.567.859-.936 1.23-.369.369-.799.702-1.23.932-.407.23-.986.67-2.156.792-.918.043-1.27.05-3.703.05s-2.784-.007-3.703-.05c-1.125-.12-1.749-.56-2.156-.792-.42-.232-.859-.567-1.23-.936-.369-.369-.702-.799-.932-1.23-.23-.407-.67-.986-.792-2.156-.043-.918-.05-1.27-.05-3.703s.007-2.784.05-3.703c.12-1.125.56-1.749.792-2.156.232-.42.567-.859.936-1.23.369-.369.702-.799.932-1.23.23-.407.67-.986.792-2.156.043-.918.05-1.27.05-3.703zm0 0V22c-1.22 0-1.465-.005-2.097-.03-1.077-.046-1.74-.24-2.22-.445-.47-.205-.86-.475-1.23-.845-.37-.37-.64-.76-.845-1.23-.205-.48-.399-1.143-.445-2.22-.025-.632-.03-1.042-.03-2.097V12c0-1.055.005-1.465.03-2.097.046-1.077.24-1.74.445-2.22.205-.47.475-.86.845-1.23.37-.37.76-.64 1.23-.845.48-.205 1.143-.399 2.22-.445.632-.025 1.042-.03 2.097-.03h.142zm-.142 8.5c-3.148 0-5.704 2.556-5.704 5.704S9.152 22 12.3 22s5.704-2.556 5.704-5.704-2.556-5.704-5.704-5.704zm0 9.2c-1.954 0-3.54-1.586-3.54-3.54s1.586-3.54 3.54-3.54 3.54 1.586 3.54 3.54-1.586 3.54-3.54 3.54zM21 6.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.62 17.514l-4.26-2.043-2.404 2.404a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l2.404-2.404-2.043-4.26a1 1 0 011.536-1.04l4.908 1.874 1.874 4.908a1 1 0 01-1.04 1.536z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors duration-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors duration-300">Shipping & Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with our latest collections and exclusive offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="p-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white border border-gray-700" />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-r-md transition-colors duration-300">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Chic Threads Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;