import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'zh-CN' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言包
const translations: Record<Language, Record<string, string>> = {
  'zh-CN': {
    // 导航栏
    'nav.home': '首页',
    'nav.products': '产品功能',
    'nav.products.aiMarketing': 'AI营销智能体',
    'nav.products.aiLive': 'AI直播智能体',
    'nav.products.aiCall': 'AI外呼智能体',
    'nav.tutorials': '使用教程',
    'nav.partnership': '代理合作',
    'nav.about': '关于我们',
    'nav.customize': '立即定制',
    'nav.language': '语言',
    
    // 首页Hero
    'hero.title': '探客AI增长手机',
    'hero.subtitle': '让AI替你营销',
    'hero.description': '基于人工智能和RPA自动化技术的全新营销解决方案，为您提供智能营销、公域拓客、自动直播、智能外呼等一站式营销增长服务',
    'hero.getStarted': '现在开始体验',
    'hero.learnMore': '现在开始体验',
    
    // 功能特性
    'features.title': 'AI自动化营销平台',
    'features.subtitle': '三大核心产品模块，全方位赋能企业数字化营销',
    'features.privateLive': '私域直播',
    'features.privateLive.desc': '企业专属私域直播SaaS系统',
    'features.scrm': 'SCRM',
    'features.scrm.desc': '从线索到客户的全流程客户生命周期管理',
    'features.portal': '门户和商城',
    'features.portal.desc': '低成本快速搭建',
    'features.learnMore': '了解更多',
    'features.description': 'AI驱动的全方位营销解决方案，助力企业数字化转型',
    
    // 营销模块
    'marketing.title': '🚀 全方位营销解决方案',
    'marketing.subtitle': '8大营销模块，助力企业实现全渠道数字化营销',
    'marketing.interaction': '全触点互动',
    'marketing.interaction.subtitle': '数智化运营多链路消费者',
    'marketing.interaction.description': '用户在哪里，沟通和体验就在哪里',
    'marketing.email': '邮件营销',
    'marketing.email.subtitle': '无缝衔接Shopify平台，用EDM邮件',
    'marketing.email.description': '营销实现您的私域GMV增长',
    'marketing.wechat': '微信营销',
    'marketing.wechat.subtitle': '微信生态全域营销',
    'marketing.wechat.description': '助力移动端获客·留客',
    'marketing.sms': '短信营销',
    'marketing.sms.subtitle': '国内外高速率高送达',
    'marketing.sms.description': '短链点击追踪｜首视频呈现｜数据累积',
    'marketing.aiCall': 'AI智能外呼',
    'marketing.aiCall.subtitle': '助力企业规模化，精细化会员运营',
    'marketing.aiCall.description': '实现品牌再增长',
    'marketing.tiktok': 'TikTok Ads',
    'marketing.tiktok.subtitle': '出海必占位的主流平台',
    'marketing.tiktok.description': '移动时代领跑用户注意力',
    'marketing.5g': '5G消息',
    'marketing.5g.subtitle': '全方位提升展现与转化链路',
    'marketing.5g.description': '富媒体消息，开启5G营销新时代',
    'marketing.whatsapp': 'WhatsApp消息',
    'marketing.whatsapp.subtitle': '让企业与全球的用户链接起来',
    'marketing.whatsapp.description': '实现无缝的消息交换和互动',
    'marketing.description': '全渠道营销，一站式解决 - 探客AI手机集成多种营销工具',
    
    // 行业案例
    'industry.title': '广泛应用于全行业，只要有账号就可获客',
    'industry.manufacturing': '生产型企业直播',
    'industry.manufacturing.desc': '突破传统直播限制，实时展示生产流程，提升用户体验和关注时长',
    'industry.localBusiness': '本地实体商家',
    'industry.localBusiness.desc': '无人值守智能直播系统，低成本解决本地商家直播需求',
    'industry.beauty': '美容美体行业',
    'industry.beauty.desc': '降低获客成本，通过场景化直播展示专业服务，提升转化率',
    'industry.homeDecor': '家居建材行业',
    'industry.homeDecor.desc': '产品实景直播展示，结合录播功能，实现长期获客效果',
    'industry.anyAccount': '有账号就可开播',
    'industry.anyAccount.desc': '应用场景广泛，任何账号都可轻松开启直播带货赚佣金',
    
    // 定价
    'pricing.title': '定价计划',
    'pricing.subtitle': '各种不同的定价计划，满足不同的需求',
    'pricing.recommended': '推荐',
    'pricing.personal': '个人计划',
    'pricing.personal.feature1': '一年使用期限',
    'pricing.personal.feature2': '2次换绑设备',
    'pricing.personal.feature3': 'Coze空间会员',
    'pricing.personal.feature4': '免费升级',
    'pricing.personal.button': '立即获取',
    'pricing.professional': '专业计划',
    'pricing.professional.feature1': '终身永久使用',
    'pricing.professional.feature2': '任意换绑设备',
    'pricing.professional.feature3': 'Coze空间会员',
    'pricing.professional.feature4': '免费升级',
    'pricing.professional.button': '立即获取',
    'pricing.oem': 'OEM代理',
    'pricing.oem.feature1': 'OEM定制安装包',
    'pricing.oem.feature2': '价格5折起',
    'pricing.oem.feature3': '代理后台',
    'pricing.oem.feature4': '技术支持',
    'pricing.oem.button': '联系我们',
    
    // 联系我们
    'contact.title': '联系我们',
    'contact.subtitle': '探客AI手机期待与您合作，共创智能营销新时代',
    'contact.phone': '电话咨询',
    'contact.phone.number': '400-123-4567',
    'contact.phone.hours': '工作时间：9:00-18:00',
    'contact.email': '邮箱联系',
    'contact.email.business': 'contact@tanke.ai',
    'contact.email.sales': 'sales@tanke.ai',
    'contact.wechat': '微信咨询',
    'contact.wechat.id': '微信号：tanke-ai',
    'contact.wechat.qr': '扫码添加客服',
    'contact.copyright': '© 2024 探客AI手机. All rights reserved.',
    'contact.slogan': '让营销更智能，让增长更简单',
    'contact.customize': '立即定制',
    'contact.brand': '探客AI',
    
    // 页脚
    'footer.title': '📞 联系探客AI',
    'footer.subtitle': '了解更多产品信息，获取专业的AI营销解决方案',
    'footer.company': '公司',
    'footer.about': '关于我们',
    'footer.careers': '招聘信息',
    'footer.contact': '联系我们',
    'footer.products': '产品',
    'footer.aiPhone': 'AI手机',
    'footer.marketing': '营销平台',
    'footer.support': '支持',
    'footer.help': '帮助中心',
    'footer.docs': '开发文档',
    'footer.community': '社区',
    'footer.copyright': '© 2024 探客AI. 保留所有权利。',
    
    // AI营销页面
    'aiMarketing.title': 'AI营销智能体',
    'aiMarketing.subtitle': '智能微信营销引擎，10倍提升私域运营效率',
    'aiMarketing.feature1': '全流程自动化',
    'aiMarketing.feature1.desc': '从引流到转化的闭环管理',
    'aiMarketing.feature2': '微信风控规避',
    'aiMarketing.feature2.desc': '智能分时策略 + 行为模拟技术',
    'aiMarketing.feature3': '数据可视化',
    'aiMarketing.feature3.desc': '实时监控转化漏斗',
    
    // 页面标题
    'page.about.title': '关于我们页面',
    'page.about.description': '页面内容正在开发中...',
    'page.tutorials.title': '使用教程页面',
    'page.tutorials.description': '页面内容正在开发中...',
    'page.contact.title': '您可以通过以下方式联系我们',
    'page.contact.subtitle': '获取产品咨询、合作与技术支持，探客AI手机团队为您服务',
    'page.contact.demo': '预约演示',
    'page.contact.demo.desc': '通过演示，您可以快速了解探客AI增长手机的产品功能和使用场景，判断与您的业务需求是否适配，并获取专属您的解决方案和价格方案',
    'page.contact.email': '邮件联系',
    'page.contact.email.desc': '帮助您快速了解探客AI增长手机产品及价格。',
    'page.contact.partner': '成为合作伙伴',
    'page.contact.partner.desc': '了解我们的合作伙伴体系和对合作伙伴的支持',
    'page.contact.book': '立即预约',
    'page.contact.join': '立即加入我们',
    
    // 管理员面板
    'admin.title': '合作伙伴申请管理',
    'admin.loading': '加载中...',
    'admin.refresh': '刷新数据',
    'admin.total': '共 {count} 条申请记录',
    'admin.table.time': '申请时间',
    'admin.table.name': '姓名',
    'admin.table.company': '公司',
    'admin.table.position': '职位',
    'admin.table.phone': '手机号',
    'admin.table.status': '状态',
    'admin.table.action': '操作',
    'admin.status.pending': '待处理',
    'admin.status.approved': '已通过',
    'admin.status.rejected': '已拒绝',
    'admin.action.view': '查看/编辑',
    'admin.action.delete': '删除',
    'admin.empty': '暂无申请记录',
    'admin.modal.title': '编辑申请状态',
    'admin.modal.cancel': '取消',
    'admin.modal.save': '保存'
  },
  
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Product Features',
    'nav.products.aiMarketing': 'AI Marketing',
    'nav.products.aiLive': 'AI Live',
    'nav.products.aiCall': 'AI Call',
    'nav.tutorials': 'Tutorials',
    'nav.partnership': 'Partnership',
    'nav.about': 'About Us',
    'nav.customize': 'Get Started',
    'nav.language': 'Language',
    
    // Hero
    'hero.title': 'Tanke AI Growth Phone',
    'hero.subtitle': 'Let AI Do Marketing for You',
    'hero.description': 'Revolutionary AI and RPA automation marketing solution providing intelligent marketing, public domain customer acquisition, automated live streaming, intelligent outbound calling and other one-stop marketing growth services',
    'hero.getStarted': 'Start Now',
    'hero.learnMore': 'Start Now',
    
    // Features
    'features.title': 'AI Automated Marketing Platform',
    'features.subtitle': 'Three core product modules empowering enterprise digital marketing',
    'features.privateLive': 'Private Live Streaming',
    'features.privateLive.desc': 'Enterprise-exclusive private live streaming SaaS system',
    'features.scrm': 'SCRM',
    'features.scrm.desc': 'Full lifecycle customer management from leads to customers',
    'features.portal': 'Portal & E-commerce',
    'features.portal.desc': 'Low-cost rapid deployment',
    'features.learnMore': 'Learn More',
    'features.description': 'AI-driven comprehensive marketing solutions to accelerate enterprise digital transformation',
    
    // Marketing
    'marketing.title': '🚀 Comprehensive Marketing Solutions',
    'marketing.subtitle': '8 marketing modules to empower omnichannel digital marketing',
    'marketing.interaction': 'Omni-touchpoint Interaction',
    'marketing.interaction.subtitle': 'Smart multi-channel consumer operations',
    'marketing.interaction.description': 'Communication and experience wherever users are',
    'marketing.email': 'Email Marketing',
    'marketing.email.subtitle': 'Seamless Shopify integration with EDM',
    'marketing.email.description': 'Boost private domain GMV growth',
    'marketing.wechat': 'WeChat Marketing',
    'marketing.wechat.subtitle': 'WeChat ecosystem marketing',
    'marketing.wechat.description': 'Mobile customer acquisition & retention',
    'marketing.sms': 'SMS Marketing',
    'marketing.sms.subtitle': 'High-speed global delivery',
    'marketing.sms.description': 'Link tracking | Video preview | Data analytics',
    'marketing.aiCall': 'AI Intelligent Calling',
    'marketing.aiCall.subtitle': 'Scalable member operations',
    'marketing.aiCall.description': 'Achieve brand growth',
    'marketing.tiktok': 'TikTok Ads',
    'marketing.tiktok.subtitle': 'Essential overseas platform',
    'marketing.tiktok.description': 'Leading user attention in mobile era',
    'marketing.5g': '5G Messaging',
    'marketing.5g.subtitle': 'Enhanced display & conversion',
    'marketing.5g.description': 'Rich media messaging for 5G marketing',
    'marketing.whatsapp': 'WhatsApp Messaging',
    'marketing.whatsapp.subtitle': 'Global user connectivity',
    'marketing.whatsapp.description': 'Seamless messaging and interaction',
    'marketing.description': 'Omnichannel marketing, one-stop solution - Tanke AI Phone integrates multiple marketing tools',
    
    // Industry Cases
    'industry.title': 'Universal Application - Start Streaming with Any Account',
    'industry.manufacturing': 'Manufacturing Live',
    'industry.manufacturing.desc': 'Real-time production showcase, enhanced user engagement',
    'industry.localBusiness': 'Local Business',
    'industry.localBusiness.desc': 'Automated streaming system, cost-effective solution',
    'industry.beauty': 'Beauty & Wellness',
    'industry.beauty.desc': 'Lower acquisition cost with immersive service demos',
    'industry.homeDecor': 'Home & Decor',
    'industry.homeDecor.desc': 'Product showcase streaming for long-term customer acquisition',
    'industry.anyAccount': 'Any Account Streaming',
    'industry.anyAccount.desc': 'Wide applications, easy monetization for any account',
    
    // Pricing
    'pricing.title': 'Pricing Plans',
    'pricing.subtitle': 'Choose the perfect plan that fits your needs',
    'pricing.recommended': 'Recommended',
    'pricing.personal': 'Personal Plan',
    'pricing.personal.feature1': 'One year license',
    'pricing.personal.feature2': '2x device transfers',
    'pricing.personal.feature3': 'Coze workspace access',
    'pricing.personal.feature4': 'Free upgrades',
    'pricing.personal.button': 'Get Started',
    'pricing.professional': 'Professional Plan',
    'pricing.professional.feature1': 'Lifetime license',
    'pricing.professional.feature2': 'Unlimited device transfers',
    'pricing.professional.feature3': 'Coze workspace access',
    'pricing.professional.feature4': 'Free upgrades',
    'pricing.professional.button': 'Get Started',
    'pricing.oem': 'OEM Partnership',
    'pricing.oem.feature1': 'Custom OEM package',
    'pricing.oem.feature2': '50% discount pricing',
    'pricing.oem.feature3': 'Partner dashboard',
    'pricing.oem.feature4': 'Technical support',
    'pricing.oem.button': 'Contact Us',
    
    // Contact Us
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Tanke AI Phone looks forward to collaborating with you to create a new era of intelligent marketing',
    'contact.phone': 'Phone Consultation',
    'contact.phone.number': '400-123-4567',
    'contact.phone.hours': 'Business Hours: 9:00-18:00',
    'contact.email': 'Email Contact',
    'contact.email.business': 'contact@tanke.ai',
    'contact.email.sales': 'sales@tanke.ai',
    'contact.wechat': 'WeChat Consultation',
    'contact.wechat.id': 'WeChat ID: tanke-ai',
    'contact.wechat.qr': 'Scan QR code to add customer service',
    'contact.copyright': '© 2024 Tanke AI Phone. All rights reserved.',
    'contact.slogan': 'Make marketing smarter, make growth simpler',
    'contact.customize': 'Customize Now',
    'contact.brand': 'Tanke AI',
    
    // Footer
    'footer.title': '📞 Contact Tanke AI',
    'footer.subtitle': 'Learn more about our products and get professional AI marketing solutions',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.products': 'Products',
    'footer.aiPhone': 'AI Phone',
    'footer.marketing': 'Marketing Platform',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.docs': 'Documentation',
    'footer.community': 'Community',
    'footer.copyright': '© 2024 Tanke AI. All rights reserved.',
    
    // AI Marketing Page
    'aiMarketing.title': 'AI Marketing Agent',
    'aiMarketing.subtitle': 'Intelligent WeChat Marketing Engine, 10x Boost in Private Domain Operations',
    'aiMarketing.feature1': 'Full Process Automation',
    'aiMarketing.feature1.desc': 'Closed-loop management from lead generation to conversion',
    'aiMarketing.feature2': 'WeChat Risk Control Avoidance',
    'aiMarketing.feature2.desc': 'Smart timing strategy + behavior simulation technology',
    'aiMarketing.feature3': 'Data Visualization',
    'aiMarketing.feature3.desc': 'Real-time conversion funnel monitoring',
    
    // Page titles
    'page.about.title': 'About Us',
    'page.about.description': 'Page content is under development...',
    'page.tutorials.title': 'Tutorials',
    'page.tutorials.description': 'Page content is under development...',
    'page.contact.title': 'You can contact us through the following ways',
    'page.contact.subtitle': 'Get product consultation, cooperation and technical support, Tanke AI Phone team serves you',
    'page.contact.demo': 'Book Demo',
    'page.contact.demo.desc': 'Through the demo, you can quickly understand the product features and usage scenarios of Tanke AI Growth Phone, judge whether it fits your business needs, and get exclusive solutions and pricing plans for you',
    'page.contact.email': 'Email Contact',
    'page.contact.email.desc': 'Help you quickly understand Tanke AI Growth Phone products and pricing.',
    'page.contact.partner': 'Become Partner',
    'page.contact.partner.desc': 'Learn about our partner system and support for partners',
    'page.contact.book': 'Book Now',
    'page.contact.join': 'Join Us Now',
    
    // AdminPanel
    'admin.title': 'Partner Application Management',
    'admin.loading': 'Loading...',
    'admin.refresh': 'Refresh Data',
    'admin.total': 'Total {count} application records',
    'admin.table.time': 'Application Time',
    'admin.table.name': 'Name',
    'admin.table.company': 'Company',
    'admin.table.position': 'Position',
    'admin.table.phone': 'Phone',
    'admin.table.status': 'Status',
    'admin.table.action': 'Action',
    'admin.status.pending': 'Pending',
    'admin.status.approved': 'Approved',
    'admin.status.rejected': 'Rejected',
    'admin.action.view': 'View/Edit',
    'admin.action.delete': 'Delete',
    'admin.empty': 'No application records',
    'admin.modal.title': 'Edit Application Status',
    'admin.modal.cancel': 'Cancel',
    'admin.modal.save': 'Save'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 从localStorage获取保存的语言，如果没有则使用默认语言
  const getStoredLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('tanke-language');
      if (stored && ['zh-CN', 'en'].includes(stored)) {
        return stored as Language;
      }
    }
    return 'zh-CN';
  };

  const [language, setLanguageState] = useState<Language>(getStoredLanguage);
  
  // 自定义setLanguage函数，同时保存到localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tanke-language', lang);
    }
  };

  // 在组件挂载时检查localStorage
  useEffect(() => {
    const stored = getStoredLanguage();
    if (stored !== language) {
      setLanguageState(stored);
    }
  }, [language]);
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
