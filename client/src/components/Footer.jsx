// import react icon
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

// Footer component
export default function Footer() {
  return (
    <footer>
      {/* Footer box */}

      <div className=" mx-auto p-10 ">
        <div className="border-y border-gray-100 py-6">
          {/* Contact box */}
          <div className="flex flex-row justify-between">
            {/* Get help box */}
            <div className="space-y-2">
              <h2 className="font-anton text-base uppercase">Get help</h2>
              <nav className="font-inter list-none space-y-2  hover:text-gray-800">
                <li>
                  <a>Order Status</a>
                </li>
                <li>
                  <a>Shipping and Delivery</a>
                </li>
                <li>
                  <a>Returns</a>
                </li>
                <li>
                  <a>Payment Options</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </nav>
            </div>
            {/* Get About us*/}
            <div className="space-y-2">
              <h2 className="font-anton text-base uppercase">About us</h2>
              <nav className="font-inter list-none space-y-2  hover:text-gray-800">
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>Investors</a>
                </li>
                <li>
                  <a>Payment Options</a>
                </li>
                <li>
                  <a>Sustainability</a>
                </li>
              </nav>
            </div>
            <div className="space-y-2">
              <h2 className="font-anton text-base uppercase">Join us</h2>
              <nav className="font-inter list-none space-y-2  hover:text-gray-800">
                <li>
                  <a>Kicks App</a>
                </li>
                <li>
                  <a>Kicks Community</a>
                </li>
              </nav>
            </div>
            {/* Get Social box*/}
            <div className="space-y-2">
              <h2 className="font-anton text-base uppercase">Social</h2>
              <div className="flex flew-row space-x-4 ">
                <TiSocialFacebook className="text-2xl" />
                <AiFillInstagram className="text-2xl" />
                <FaTwitter className="text-2xl" />
                <FaYoutube className="text-2xl" />
              </div>
            </div>
          </div>
          {/* Policy box */}
          <ul>
            <div className="mt-8 font-inter flex justify-between items-center">
              <div className="flex flew-row s ">
                <ImLocation className="text-lg" />
                <p>Canada</p>
              </div>
              <p>Guides</p>
              <p>Terms of Use</p>
              <p>Terms of Sale</p>
              <p>Company Details</p>
              <p>Privacy & Cookie Policy</p>
              <p>Cookie Settings</p>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
