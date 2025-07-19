import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-8 w-8 text-secondary" />
              <h3 className="font-playfair text-2xl font-bold">Visit Bangalore</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Discover the Silicon Valley of India. From lush gardens to vibrant tech hubs, 
              Bangalore offers the perfect blend of tradition and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary transition-colors rounded-full flex items-center justify-center group">
                <Facebook className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary transition-colors rounded-full flex items-center justify-center group">
                <Twitter className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary transition-colors rounded-full flex items-center justify-center group">
                <Instagram className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary transition-colors rounded-full flex items-center justify-center group">
                <Youtube className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#attractions" className="text-white/80 hover:text-secondary transition-colors">Attractions</a></li>
              <li><a href="#food" className="text-white/80 hover:text-secondary transition-colors">Food Courts</a></li>
              <li><a href="#hostels" className="text-white/80 hover:text-secondary transition-colors">Accommodation</a></li>
              <li><a href="#map" className="text-white/80 hover:text-secondary transition-colors">City Map</a></li>
              <li><a href="#events" className="text-white/80 hover:text-secondary transition-colors">Events</a></li>
              <li><a href="#transport" className="text-white/80 hover:text-secondary transition-colors">Transportation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Tourism Office</p>
                  <p className="text-sm text-white/80">Vidhana Soudha, Bangalore</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Tourist Helpline</p>
                  <p className="text-sm text-white/80">1363 (24/7 Support)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email Support</p>
                  <p className="text-sm text-white/80">info@visitbangalore.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 text-center md:text-left">
              <p>&copy; 2024 Visit Bangalore. All rights reserved.</p>
              <p className="mt-1">Official Tourism Website of Bangalore, Karnataka</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;