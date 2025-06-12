import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import {
  BookOpen,
  Bolt,
  Lightbulb,
  SpellCheck,
  Users,
  Laptop,
  History,
  Target,
  Heart,
  GraduationCap,
  Phone,
  MapPin,
  Clock,
  Quote
} from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: BookOpen,
      titleKey: 'services.academic.title',
      descriptionKey: 'services.academic.description',
      color: 'primary'
    },
    {
      icon: Bolt,
      titleKey: 'services.professional.title',
      descriptionKey: 'services.professional.description',
      color: 'secondary'
    },
    {
      icon: Lightbulb,
      titleKey: 'services.personal.title',
      descriptionKey: 'services.personal.description',
      color: 'accent'
    },
    {
      icon: SpellCheck,
      titleKey: 'services.literacy.title',
      descriptionKey: 'services.literacy.description',
      color: 'primary'
    },
    {
      icon: Users,
      titleKey: 'services.community.title',
      descriptionKey: 'services.community.description',
      color: 'secondary'
    },
    {
      icon: Laptop,
      titleKey: 'services.digital.title',
      descriptionKey: 'services.digital.description',
      color: 'accent'
    }
  ];

  const aboutCards = [
    {
      icon: History,
      titleKey: 'about.history.title',
      textKey: 'about.history.text',
      color: 'primary'
    },
    {
      icon: Target,
      titleKey: 'about.mission.title',
      textKey: 'about.mission.text',
      color: 'secondary'
    },
    {
      icon: Heart,
      titleKey: 'about.values.title',
      textKey: 'about.values.text',
      color: 'accent'
    }
  ];

  const testimonials = [
    {
      text: "Grâce à la coopérative, j'ai appris à lire et écrire. Maintenant je peux aider mes enfants avec leurs devoirs.",
      author: "Fatima, 45 ans",
      program: "Programme d'alphabétisation"
    },
    {
      text: "Les ateliers de couture m'ont permis de créer ma propre entreprise. Je suis maintenant indépendante financièrement.",
      author: "Aicha, 32 ans",
      program: "Atelier couture"
    },
    {
      text: "Le soutien scolaire a considérablement amélioré mes notes. J'ai maintenant confiance en mes capacités.",
      author: "Youssef, 16 ans",
      program: "Soutien scolaire"
    }
  ];

  const galleryImages = [
    "https://ik.imagekit.io/coopchal/coopchal%20pics/494289169_1427656765344989_3751821437827179527_n.jpg?updatedAt=1749765252522",
    "https://ik.imagekit.io/coopchal/coopchal%20pics/493211659_1418954806215185_3712269213520905985_n.jpg?updatedAt=1749765242807",
    "https://ik.imagekit.io/coopchal/coopchal%20pics/499732613_1434496184661047_9032901675267132644_n.jpg?updatedAt=1749765242041",
    "https://ik.imagekit.io/coopchal/coopchal%20pics/494142429_1418954286215237_4955301748475315993_n.jpg?updatedAt=1749765241980",
    "https://ik.imagekit.io/coopchal/coopchal%20pics/495649976_1418240026286663_183706093966972958_n.jpg?updatedAt=1749765240211",
    "https://ik.imagekit.io/coopchal/coopchal%20pics/493969769_1434682161309116_2807582087254141694_n.jpg?updatedAt=1749765239968"
  ];


  return (
    <div>
      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('#services')}
                  className="bg-primary text-white px-8 py-4 hover:bg-blue-700"
                >
                  {t('hero.cta1')}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="border-2 border-primary text-primary px-8 py-4 hover:bg-primary hover:text-white"
                >
                  {t('hero.cta2')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Students learning in classroom"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <GraduationCap className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral">{t('hero.hours')}</p>
                    <p className="text-sm text-gray-600">{t('hero.service')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Community workshop and learning activities"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              {aboutCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Card key={index} className={`bg-${card.color}/5 border-none`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`bg-${card.color}/20 p-3 rounded-lg flex-shrink-0`}>
                          <IconComponent className={`text-${card.color} w-6 h-6`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-neutral mb-2">
                            {t(card.titleKey)}
                          </h3>
                          <p className="text-gray-600">
                            {t(card.textKey)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white shadow-lg card-hover border-none">
                  <CardContent className="p-8">
                    <div className={`bg-${service.color}/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className={`text-${service.color} w-8 h-8`} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral mb-4">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className={`w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105 ${index === 4 ? 'md:col-span-2' : ''}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <Card className="bg-white shadow-lg border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral text-center mb-8">
                {t('gallery.testimonials')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <Quote className="text-primary w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-neutral">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.program}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral mb-6">
                    {t('contact.info.title')}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">
                          {t('contact.info.address')}
                        </h4>
                        <p className="text-gray-600">Hay Al Moqawama, Oued Zem, Maroc</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                        <Phone className="text-secondary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">
                          {t('contact.info.phone')}
                        </h4>
                        <p className="text-gray-600">+212 637-334124</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                        <Clock className="text-accent w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral mb-1">
                          {t('contact.info.hours')}
                        </h4>
                        <p className="text-gray-600">{t('hero.hours')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="bg-gray-200 rounded-xl overflow-hidden h-72">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
                    <p className="text-neutral font-semibold">Carte de localisation</p>
                    <p className="text-gray-600 text-sm mt-2">Hay Al Moqawama, Oued Zem</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-neutral mb-4">
                    {t('contact.social.title')}
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
