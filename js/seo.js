/**
 * KooRender SEO — meta tags, Open Graph, Twitter Card, JSON-LD
 * @author huopu-ai
 */
(function () {
  var SITE = 'https://www.koorender.com';
  var OG_IMAGE =
    'https://qhstaticssl.kujiale.com/image/png/1773645165382/F724EB380400904A6B7BE7EB0000504A.png';

  var PAGE_IDS = {
    '/': 'home',
    '/index.html': 'home',
    '/features.html': 'features',
    '/get_started.html': 'get_started',
    '/learn_more.html': 'learn_more',
    '/3dsmax-plugin-login.html': 'login'
  };

  function pageId() {
    var path = (location.pathname || '/').replace(/\/+$/, '') || '/';
    return PAGE_IDS[path] || PAGE_IDS[path + '/index.html'] || 'home';
  }

  function pageUrl() {
    var path = location.pathname || '/';
    if (path === '/index.html') path = '/';
    return SITE + path;
  }

  function langCode(lang) {
    return lang === 'zh' ? 'zh_CN' : 'en_US';
  }

  function t(key, lang) {
    if (typeof translations === 'undefined') return '';
    var pack = translations[lang] || translations.en;
    return (pack && pack[key]) || '';
  }

  function upsertMeta(selector, attrs) {
    var el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      document.head.appendChild(el);
    }
    Object.keys(attrs).forEach(function (k) {
      el.setAttribute(k, attrs[k]);
    });
    return el;
  }

  function upsertLink(rel, href) {
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function upsertJsonLd(id, data) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  function applySeo(lang) {
    var id = pageId();
    var url = pageUrl();
    var isLogin = id === 'login';

    var titleKey = 'page_title_' + id;
    var descKey = 'seo_description_' + id;
    var title = t(titleKey, lang) || document.title;
    var description = t(descKey, lang);

    document.title = title;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: t('seo_keywords', lang)
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: isLogin ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
    });
    upsertLink('canonical', url);

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'KooRender' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: langCode(lang)
    });
    upsertMeta('meta[property="og:locale:alternate"]', {
      property: 'og:locale:alternate',
      content: lang === 'zh' ? 'en_US' : 'zh_CN'
    });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE });

    if (!isLogin) {
      upsertJsonLd('koorender-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KooRender for 3ds Max',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Windows 10+',
        description: description,
        url: SITE,
        image: OG_IMAGE,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Limited-time free trial'
        },
        featureList: [
          'Real-time cloud rendering for 3ds Max',
          'V-Ray compatible workflow',
          'AI denoiser and 3D Gaussian support',
          'Offline and interactive rendering'
        ],
        softwareRequirements: 'Autodesk 3ds Max 2021–2026, V-Ray 4–7'
      });
    }
  }

  window.applySeo = applySeo;

  function init() {
    var lang =
      typeof currentLang !== 'undefined'
        ? currentLang
        : typeof getDefaultLanguage === 'function'
          ? getDefaultLanguage()
          : 'en';
    applySeo(lang);
  }

  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState !== 'loading') init();
})();
