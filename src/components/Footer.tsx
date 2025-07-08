import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="font-bold mb-2">Filters</div>
          <div className="text-sm">
            All
            <br />
            Electronics
            <br />
            Clothing
            <br />
            Home
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">About Us</div>
          <div className="text-sm">
            About Us
            <br />
            Contact
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">Follow Us</div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-8">© 2025 Amit</div>
    </footer>
  );
}
