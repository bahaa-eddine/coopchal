import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
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

export default function BlogPost() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const currentLanguage = i18n.language as 'fr' | 'ar' | 'en';
  
  const articles: Article[] = articlesData.articles;
  const article = articles.find(a => a.slug === slug);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-MA' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-neutral mb-4">
            {currentLanguage === 'fr' ? 'Article non trouvé' : 
             currentLanguage === 'ar' ? 'المقال غير موجود' : 'Article not found'}
          </h1>
          <p className="text-gray-600 mb-8">
            {currentLanguage === 'fr' ? 'L\'article que vous recherchez n\'existe pas.' : 
             currentLanguage === 'ar' ? 'المقال الذي تبحث عنه غير موجود.' : 'The article you are looking for does not exist.'}
          </p>
          <Link href="/blog">
            <Button className="bg-primary text-white hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentLanguage === 'fr' ? 'Retour au blog' : 
               currentLanguage === 'ar' ? 'العودة إلى المدونة' : 'Back to blog'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentLanguage === 'fr' ? 'Retour au blog' : 
               currentLanguage === 'ar' ? 'العودة إلى المدونة' : 'Back to blog'}
            </Button>
          </Link>
        </div>

        {/* Article header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={article.photo_path} 
              alt={article[currentLanguage].title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {article[currentLanguage].title}
              </h1>
            </div>
          </div>

          {/* Article content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
              {article[currentLanguage].content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral mb-8">
            {currentLanguage === 'fr' ? 'Articles liés' : 
             currentLanguage === 'ar' ? 'مقالات ذات صلة' : 'Related articles'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                    <img 
                      src={relatedArticle.photo_path} 
                      alt={relatedArticle[currentLanguage].title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(relatedArticle.date)}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-neutral mb-2">
                        {relatedArticle[currentLanguage].title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {relatedArticle[currentLanguage].excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}