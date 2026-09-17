import { useEffect } from 'react';

interface MetaTag {
  key: 'name' | 'property';
  value: string;
  content: string;
}

/** Applies page title plus standard, Open Graph and Twitter metadata. */
export function useDocumentMeta(title: string, description: string, url: string): void {
  useEffect(() => {
    document.title = title;

    const tags: MetaTag[] = [
    { key: 'name', value: 'description', content: description },
    { key: 'name', value: 'author', content: 'Nuwangi Ariyasingha' },
    { key: 'property', value: 'og:type', content: 'website' },
    { key: 'property', value: 'og:title', content: title },
    { key: 'property', value: 'og:description', content: description },
    { key: 'property', value: 'og:url', content: url },
    { key: 'name', value: 'twitter:card', content: 'summary_large_image' },
    { key: 'name', value: 'twitter:title', content: title },
    { key: 'name', value: 'twitter:description', content: description }];


    const created: HTMLMetaElement[] = [];

    tags.forEach(({ key, value, content }) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, value);
        document.head.appendChild(el);
        created.push(el);
      }
      el.setAttribute('content', content);
    });

    document.documentElement.lang = 'en';

    return () => {
      created.forEach((el) => el.remove());
    };
  }, [title, description, url]);
}