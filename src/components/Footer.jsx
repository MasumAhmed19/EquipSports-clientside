import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer=() => {

  return (
    <footer className="bg-black text-gray-300 g3" >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <RiShoppingBag2Fill className="text-2xl text-p1" />{" "}
                    <h4 className="text-xl font-semibold text-black">EquiSports</h4>
                </Link>
            </div>
            <p className=" text-gray-700">
              Your one-stop destination for premium sports and fitness equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-p2 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-p2 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className=" text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-600">
              © 2024 Sports Equipment. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {['Terms', 'Privacy', 'Cookies'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;