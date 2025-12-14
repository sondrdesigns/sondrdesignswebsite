import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title: 'Sondr Designs - Web Design Agency | Digital Experiences That Perform',
  description: 'Sondr Designs is a premium web design agency crafting elevated digital experiences. We specialize in web design, web development, brand design, and UI/UX design.',
  keywords: 'web design, web design agency, digital agency, web development, brand design, UI/UX design, website design, custom web development, responsive web design',
  image: 'https://sondrdesigns.com/images/48e9a45ec1626552d25413ca5f09009387cfd733.png',
  type: 'website',
};

export function SEO({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || `https://sondrdesigns.com${location.pathname}`;

  useEffect(() => {
    // Ensure document is available
    if (typeof document === 'undefined') return;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      if (!document.head) return;
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');

    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', currentUrl);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;
  }, [title, description, keywords, image, currentUrl, type]);

  return null;
}

