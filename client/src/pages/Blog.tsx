import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

// Static blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Nouveau Programme de Soutien Scolaire",
    description: "Lancement de notre nouveau programme intensif de soutien scolaire pour les élèves du collège et lycée, avec des sessions individualisées adaptées aux besoins de chaque apprenant. Ce programme innovant met l'accent sur l'accompagnement personnalisé et les méthodes pédagogiques modernes pour garantir la réussite de tous nos étudiants.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-11-15"
  },
  {
    id: 2,
    title: "Atelier d'Artisanat Traditionnel Marocain",
    description: "Une session exceptionnelle d'apprentissage des techniques artisanales traditionnelles avec des maîtres artisans locaux. Les participants découvrent les secrets de l'artisanat marocain authentique, notamment la poterie, le tissage et la menuiserie traditionnelle. Cette initiative vise à préserver notre patrimoine culturel tout en offrant des opportunités d'emploi.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-11-10"
  },
  {
    id: 3,
    title: "Cérémonie de Remise des Certificats",
    description: "Félicitations à nos 50 diplômés qui ont terminé avec succès leurs formations en alphabétisation et compétences professionnelles. Un moment de fierté pour toute notre communauté éducative. Cette cérémonie symbolise l'aboutissement d'efforts soutenus et marque le début d'un nouveau chapitre pour nos apprenants qui sont maintenant prêts à intégrer le marché du travail.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-11-05"
  },
  {
    id: 4,
    title: "Programme d'Alphabétisation pour Femmes",
    description: "Lancement d'un programme spécialement conçu pour les femmes de la région, offrant des horaires flexibles et un environnement d'apprentissage adapté. Ce programme vise à autonomiser les femmes par l'éducation et à leur donner les outils nécessaires pour participer pleinement à la vie économique et sociale de leur communauté.",
    imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-10-28"
  },
  {
    id: 5,
    title: "Partenariat avec les Écoles Locales",
    description: "Signature d'un accord de partenariat avec plusieurs établissements scolaires d'Oued Zem pour renforcer le soutien éducatif. Cette collaboration permettra d'identifier les élèves en difficulté et de leur offrir un accompagnement personnalisé pour améliorer leurs résultats scolaires et réduire le décrochage.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-10-20"
  },
  {
    id: 6,
    title: "Formation en Informatique de Base",
    description: "Introduction de cours d'informatique pour tous les âges, couvrant les compétences numériques essentielles. Dans un monde de plus en plus numérisé, ces formations permettent à nos apprenants de maîtriser les outils informatiques de base et d'améliorer leur employabilité dans divers secteurs d'activité.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    createdAt: "2024-10-15"
  }
];

export default function Blog() {
  const { t } = useTranslation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral mb-4">
            Blog & Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez les dernières nouvelles et actualités de notre coopérative éducative
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none overflow-hidden group">
              <div className="relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}