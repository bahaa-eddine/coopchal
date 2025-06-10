import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '#accueil', key: 'nav.home' },
    { href: '#apropos', key: 'nav.about' },
    { href: '#services', key: 'nav.services' },
    { href: '#actualites', key: 'nav.news' },
    { href: '#galerie', key: 'nav.gallery' },
    { href: '#contact', key: 'nav.contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-bold text-primary">
                Coopérative Chabab Alzahraa
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral hover:text-primary transition-colors font-medium"
                >
                  {t(item.key)}
                </button>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left px-4 py-2 text-neutral hover:text-primary transition-colors font-medium"
                      >
                        {t(item.key)}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Coopérative Chabab Alzahraa</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-300">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Hay Al Moqawama, Oued Zem</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone"></i>
                  <span>+212 637-334124</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock"></i>
                  <span>{t('hero.hours')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
