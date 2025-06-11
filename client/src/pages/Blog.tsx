import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import articlesData from '@/data/blog/articles.json';

interface Article {
  id: string;
  slug: string;
  photo_path: string;
  date: string;
  fr: {
    title: string;
    excerpt: string;
    content: string;
  };
  ar: {
    title: string;
    excerpt: string;
    content: string;
  };
  en: {
    title: string;
    excerpt: string;
    content: string;
  };
}

export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as 'fr' | 'ar' | 'en';
  
  const articles: Article[] = articlesData.articles;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-MA' : 'fr-FR', {
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
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-none overflow-hidden group">
              <div className="relative">
                <img 
                  src={article.photo_path} 
                  alt={article[currentLanguage].title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral mb-3">
                  {article[currentLanguage].title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article[currentLanguage].excerpt}
                </p>
                
                <Link href={`/blog/${article.slug}`}>
                  <Button variant="link" className="text-primary p-0 group-hover:text-blue-700">
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}