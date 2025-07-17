import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "探客AI手机 - 您的个人营销专家",
  description = "探客AI手机是您的个人营销专家，让每个人都能轻松实现自动化营销与直播，提升效率，创造更多价值。智能分析客户数据，智能沟通，全网营销覆盖。",
  keywords = "探客AI手机,AI营销,自动化营销,AI直播,智能营销工具,营销专家,客户数据分析,智能沟通,全网营销",
  ogTitle,
  ogDescription,
  ogImage = "/logo512.png",
  canonicalUrl = "https://www.tanke.com"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "探客互动科技有限公司",
    "alternateName": "探客互动",
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo512.png`,
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "400-888-8888",
      "contactType": "Customer Service",
      "email": "info@tanke.com",
      "availableLanguage": "Chinese"
    },
    "sameAs": [
      "https://weibo.com/tanke",
      "https://www.douyin.com/tanke"
    ],
    "founder": {
      "@type": "Organization",
      "name": "探客互动科技有限公司"
    },
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "杭州",
      "addressRegion": "浙江省",
      "addressCountry": "CN"
    }
  };

  return (
    <Helmet>
      {/* 基础元数据 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="探客互动科技有限公司" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* 语言和地区 */}
      <meta name="language" content="zh-CN" />
      <meta name="geo.region" content="CN-ZJ" />
      <meta name="geo.placename" content="杭州" />

      {/* hreflang 多语言SEO优化 */}
      <link rel="alternate" href="https://www.tanke.com/" hrefLang="zh-CN" />
      <link rel="alternate" href="https://www.tanke.com/en" hrefLang="en" />
      <link rel="alternate" href="https://www.tanke.com/ja" hrefLang="ja" />
      <link rel="alternate" href="https://www.tanke.com/ko" hrefLang="ko" />
      <link rel="alternate" href="https://www.tanke.com/zh-TW" hrefLang="zh-TW" />
      <link rel="alternate" href="https://www.tanke.com/" hrefLang="x-default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="探客互动" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* 规范化URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* 图标 */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* 结构化数据 */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* 预连接优化 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* 其他SEO优化 */}
      <meta name="theme-color" content="#1a73e8" />
      <meta name="msapplication-TileColor" content="#1a73e8" />
      <meta name="application-name" content="探客AI手机" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="探客AI手机" />
    </Helmet>
  );
};

export default SEOHead; 