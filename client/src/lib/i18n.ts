import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.services": "Nos services",
      "nav.news": "Actualités",
      "nav.gallery": "Galerie",
      "nav.contact": "Contact",

      // Hero Section
      "hero.title": "Ensemble pour l'éducation et le développement",
      "hero.subtitle": "La Coopérative Chabab Alzahraa accompagne les citoyens d'Oued Zem dans leur parcours éducatif et professionnel avec solidarité et engagement.",
      "hero.cta1": "Découvrir nos services",
      "hero.cta2": "Nous contacter",
      "hero.hours": "Toujours ouvert",
      "hero.service": "À votre service",

      // About Section
      "about.title": "À propos de notre coopérative",
      "about.subtitle": "Fondée sur les valeurs de solidarité, d'inclusion et d'engagement citoyen, nous œuvrons pour l'épanouissement éducatif de notre communauté.",
      "about.history.title": "Notre Histoire",
      "about.history.text": "Née de l'initiative citoyenne, notre coopérative s'est développée pour répondre aux besoins éducatifs croissants de la région d'Oued Zem.",
      "about.mission.title": "Notre Mission",
      "about.mission.text": "Promouvoir l'alphabétisation, l'éducation et la formation professionnelle pour tous, en créant un environnement d'apprentissage inclusif et bienveillant.",
      "about.values.title": "Nos Valeurs",
      "about.values.text": "Solidarité, inclusion et engagement citoyen guident chacune de nos actions pour construire une société plus juste et éduquée.",

      // Services Section
      "services.title": "Nos Services",
      "services.subtitle": "Découvrez notre gamme complète de services éducatifs et de formation adaptés à tous les âges et niveaux.",
      "services.academic.title": "Soutien Scolaire",
      "services.academic.description": "Cours de rattrapage et aide aux devoirs pour tous les niveaux, de l'école primaire au lycée. Accompagnement personnalisé pour la réussite scolaire.",
      "services.professional.title": "Ateliers Professionnels",
      "services.professional.description": "Formations pratiques dans divers métiers artisanaux et techniques. Développement de compétences professionnelles concrètes.",
      "services.personal.title": "Développement Personnel",
      "services.personal.description": "Programmes d'accompagnement pour développer la confiance en soi, les compétences de communication et l'esprit d'entreprenariat.",
      "services.literacy.title": "Alphabétisation",
      "services.literacy.description": "Cours d'alphabétisation pour adultes en arabe et français. Méthodes pédagogiques adaptées aux apprenants adultes.",
      "services.community.title": "Activités Communautaires",
      "services.community.description": "Événements culturels, conférences et ateliers thématiques pour renforcer les liens sociaux et partager les connaissances.",
      "services.digital.title": "Compétences Numériques",
      "services.digital.description": "Formation aux outils numériques essentiels pour l'insertion professionnelle et l'autonomie dans le monde moderne.",

      // News Section
      "news.title": "Actualités",
      "news.subtitle": "Restez informés de nos dernières activités, événements et réussites au sein de la communauté.",
      "news.readMore": "Lire la suite →",
      "news.viewAll": "Voir toutes les actualités",

      // Gallery Section
      "gallery.title": "Galerie",
      "gallery.subtitle": "Découvrez en images nos activités, nos espaces d'apprentissage et les moments forts de notre communauté éducative.",
      "gallery.testimonials": "Témoignages",

      // Contact Section
      "contact.title": "Contactez-Nous",
      "contact.subtitle": "Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans votre parcours éducatif.",
      "contact.form.title": "Envoyez-nous un message",
      "contact.form.firstName": "Prénom",
      "contact.form.lastName": "Nom",
      "contact.form.email": "Email",
      "contact.form.phone": "Téléphone",
      "contact.form.subject": "Sujet",
      "contact.form.message": "Message",
      "contact.form.submit": "Envoyer le message",
      "contact.info.title": "Informations de contact",
      "contact.info.address": "Adresse",
      "contact.info.phone": "Téléphone",
      "contact.info.hours": "Horaires",
      "contact.social.title": "Suivez-nous",

      // Footer
      "footer.description": "Engagée dans l'éducation et la formation, notre coopérative œuvre pour l'épanouissement de la communauté d'Oued Zem à travers des programmes inclusifs et solidaires.",
      "footer.quickLinks": "Liens Rapides",
      "footer.contact": "Contact",
      "footer.copyright": "© 2024 Coopérative Chabab Alzahraa. Tous droits réservés.",

      // Form
      "form.success": "Message envoyé avec succès! Nous vous contacterons bientôt.",
      "form.error": "Une erreur s'est produite. Veuillez réessayer.",
      "form.required": "Ce champ est requis",
      "form.email.invalid": "Adresse email invalide",
    }
  },
  ar: {
    translation: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.services": "خدماتنا",
      "nav.news": "الأخبار",
      "nav.gallery": "المعرض",
      "nav.contact": "اتصل بنا",

      // Hero Section
      "hero.title": "معاً من أجل التعليم والتنمية",
      "hero.subtitle": "تساعد تعاونية شباب الزهراء مواطني واد زم في مسيرتهم التعليمية والمهنية بتضامن والتزام.",
      "hero.cta1": "اكتشف خدماتنا",
      "hero.cta2": "اتصل بنا",
      "hero.hours": "مفتوح دائماً",
      "hero.service": "في خدمتك",

      // About Section
      "about.title": "حول تعاونيتنا",
      "about.subtitle": "مؤسسة على قيم التضامن والشمول والالتزام المدني، نعمل من أجل الازدهار التعليمي لمجتمعنا.",
      "about.history.title": "تاريخنا",
      "about.history.text": "وُلدت من المبادرة المدنية، تطورت تعاونيتنا لتلبية الاحتياجات التعليمية المتزايدة في منطقة واد زم.",
      "about.mission.title": "مهمتنا",
      "about.mission.text": "تعزيز محو الأمية والتعليم والتدريب المهني للجميع، من خلال خلق بيئة تعلم شاملة ومفيدة.",
      "about.values.title": "قيمنا",
      "about.values.text": "التضامن والشمول والالتزام المدني يوجه كل من أعمالنا لبناء مجتمع أكثر عدالة وتعليماً.",

      // Services Section
      "services.title": "خدماتنا",
      "services.subtitle": "اكتشف مجموعتنا الكاملة من الخدمات التعليمية والتدريبية المناسبة لجميع الأعمار والمستويات.",
      "services.academic.title": "الدعم المدرسي",
      "services.academic.description": "دروس تقوية ومساعدة في الواجبات لجميع المستويات، من المدرسة الابتدائية إلى الثانوية. مرافقة شخصية للنجاح المدرسي.",
      "services.professional.title": "ورش العمل المهنية",
      "services.professional.description": "تدريب عملي في مختلف المهن الحرفية والتقنية. تنمية مهارات مهنية ملموسة.",
      "services.personal.title": "التنمية الشخصية",
      "services.personal.description": "برامج مرافقة لتطوير الثقة بالنفس ومهارات التواصل وروح ريادة الأعمال.",
      "services.literacy.title": "محو الأمية",
      "services.literacy.description": "دروس محو الأمية للكبار باللغة العربية والفرنسية. أساليب تربوية مناسبة للمتعلمين الكبار.",
      "services.community.title": "الأنشطة المجتمعية",
      "services.community.description": "فعاليات ثقافية ومؤتمرات وورش موضوعية لتعزيز الروابط الاجتماعية وتبادل المعرفة.",
      "services.digital.title": "المهارات الرقمية",
      "services.digital.description": "التدريب على الأدوات الرقمية الأساسية للإدماج المهني والاستقلالية في العالم الحديث.",

      // News Section
      "news.title": "الأخبار",
      "news.subtitle": "ابق على اطلاع بأحدث أنشطتنا وفعالياتنا ونجاحاتنا داخل المجتمع.",
      "news.readMore": "قراءة المزيد ←",
      "news.viewAll": "مشاهدة جميع الأخبار",

      // Gallery Section
      "gallery.title": "المعرض",
      "gallery.subtitle": "اكتشف من خلال الصور أنشطتنا ومساحات التعلم واللحظات المميزة لمجتمعنا التعليمي.",
      "gallery.testimonials": "الشهادات",

      // Contact Section
      "contact.title": "اتصل بنا",
      "contact.subtitle": "نحن هنا للاستماع إلى أسئلتك ومرافقتك في رحلتك التعليمية.",
      "contact.form.title": "أرسل لنا رسالة",
      "contact.form.firstName": "الاسم الأول",
      "contact.form.lastName": "اسم العائلة",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.phone": "الهاتف",
      "contact.form.subject": "الموضوع",
      "contact.form.message": "الرسالة",
      "contact.form.submit": "إرسال الرسالة",
      "contact.info.title": "معلومات الاتصال",
      "contact.info.address": "العنوان",
      "contact.info.phone": "الهاتف",
      "contact.info.hours": "ساعات العمل",
      "contact.social.title": "تابعونا",

      // Footer
      "footer.description": "ملتزمة بالتعليم والتدريب، تعمل تعاونيتنا من أجل ازدهار مجتمع واد زم من خلال برامج شاملة وتضامنية.",
      "footer.quickLinks": "روابط سريعة",
      "footer.contact": "الاتصال",
      "footer.copyright": "© 2024 تعاونية شباب الزهراء. جميع الحقوق محفوظة.",

      // Form
      "form.success": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
      "form.error": "حدث خطأ. يرجى المحاولة مرة أخرى.",
      "form.required": "هذا الحقل مطلوب",
      "form.email.invalid": "عنوان بريد إلكتروني غير صحيح",
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Our Services",
      "nav.news": "News",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",

      // Hero Section
      "hero.title": "Together for Education and Development",
      "hero.subtitle": "Coopérative Chabab Alzahraa supports citizens of Oued Zem in their educational and professional journey with solidarity and commitment.",
      "hero.cta1": "Discover our services",
      "hero.cta2": "Contact us",
      "hero.hours": "Always open",
      "hero.service": "At your service",

      // About Section
      "about.title": "About our cooperative",
      "about.subtitle": "Founded on values of solidarity, inclusion and civic engagement, we work for the educational flourishing of our community.",
      "about.history.title": "Our History",
      "about.history.text": "Born from civic initiative, our cooperative has developed to meet the growing educational needs of the Oued Zem region.",
      "about.mission.title": "Our Mission",
      "about.mission.text": "Promote literacy, education and professional training for all, creating an inclusive and supportive learning environment.",
      "about.values.title": "Our Values",
      "about.values.text": "Solidarity, inclusion and civic engagement guide each of our actions to build a more just and educated society.",

      // Services Section
      "services.title": "Our Services",
      "services.subtitle": "Discover our complete range of educational and training services adapted to all ages and levels.",
      "services.academic.title": "Academic Support",
      "services.academic.description": "Tutoring and homework help for all levels, from elementary to high school. Personalized support for academic success.",
      "services.professional.title": "Professional Workshops",
      "services.professional.description": "Practical training in various craft and technical trades. Development of concrete professional skills.",
      "services.personal.title": "Personal Development",
      "services.personal.description": "Support programs to develop self-confidence, communication skills and entrepreneurial spirit.",
      "services.literacy.title": "Literacy Programs",
      "services.literacy.description": "Adult literacy classes in Arabic and French. Teaching methods adapted to adult learners.",
      "services.community.title": "Community Activities",
      "services.community.description": "Cultural events, conferences and thematic workshops to strengthen social bonds and share knowledge.",
      "services.digital.title": "Digital Skills",
      "services.digital.description": "Training in essential digital tools for professional integration and autonomy in the modern world.",

      // News Section
      "news.title": "News",
      "news.subtitle": "Stay informed of our latest activities, events and successes within the community.",
      "news.readMore": "Read more →",
      "news.viewAll": "View all news",

      // Gallery Section
      "gallery.title": "Gallery",
      "gallery.subtitle": "Discover through images our activities, learning spaces and the highlights of our educational community.",
      "gallery.testimonials": "Testimonials",

      // Contact Section
      "contact.title": "Contact Us",
      "contact.subtitle": "We are here to listen to your questions and support you in your educational journey.",
      "contact.form.title": "Send us a message",
      "contact.form.firstName": "First Name",
      "contact.form.lastName": "Last Name",
      "contact.form.email": "Email",
      "contact.form.phone": "Phone",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.submit": "Send message",
      "contact.info.title": "Contact information",
      "contact.info.address": "Address",
      "contact.info.phone": "Phone",
      "contact.info.hours": "Hours",
      "contact.social.title": "Follow us",

      // Footer
      "footer.description": "Committed to education and training, our cooperative works for the flourishing of the Oued Zem community through inclusive and supportive programs.",
      "footer.quickLinks": "Quick Links",
      "footer.contact": "Contact",
      "footer.copyright": "© 2024 Coopérative Chabab Alzahraa. All rights reserved.",

      // Form
      "form.success": "Message sent successfully! We will contact you soon.",
      "form.error": "An error occurred. Please try again.",
      "form.required": "This field is required",
      "form.email.invalid": "Invalid email address",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
