import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'zh-CN' | 'zh-TW' | 'en' | 'ja' | 'ko';

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
    'nav.products': '产品方案',
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
    'footer.copyright': '© 2024 探客AI. 保留所有权利。'
  },
  
  'zh-TW': {
    // 導航欄
    'nav.home': '首頁',
    'nav.products': '產品方案',
    'nav.products.aiMarketing': 'AI營銷智能體',
    'nav.products.aiLive': 'AI直播智能體',
    'nav.products.aiCall': 'AI外呼智能體',
    'nav.tutorials': '使用教程',
    'nav.partnership': '代理合作',
    'nav.about': '關於我們',
    'nav.customize': '立即定制',
    'nav.language': '語言',
    
    // 首頁Hero
    'hero.title': '探客AI手機',
    'hero.subtitle': '讓營銷更智能，讓直播更簡單',
    'hero.description': '基於人工智能技術的全新營銷解決方案，為企業提供私域直播、客戶管理、智能營銷等一站式服務',
    'hero.getStarted': '開始體驗',
    'hero.learnMore': '了解更多',
    
    // 功能特性
    'features.title': 'AI自動化營銷平台',
    'features.subtitle': '三大核心產品模塊，全方位賦能企業數字化營銷',
    'features.privateLive': '私域直播',
    'features.privateLive.desc': '企業專屬私域直播SaaS系統',
    'features.scrm': 'SCRM',
    'features.scrm.desc': '從線索到客戶的全流程客戶生命週期管理',
    'features.portal': '門戶和商城',
    'features.portal.desc': '低成本快速搭建',
    'features.learnMore': '了解更多',
    'features.description': 'AI驅動的全方位營銷解決方案，助力企業數字化轉型',
    
    // 營銷模塊
    'marketing.title': '🚀 全方位營銷解決方案',
    'marketing.subtitle': '8大營銷模塊，助力企業實現全渠道數字化營銷',
    'marketing.interaction': '全觸點互動',
    'marketing.interaction.subtitle': '數智化運營多鏈路消費者',
    'marketing.interaction.description': '用戶在哪裡，溝通和體驗就在哪裡',
    'marketing.email': '郵件營銷',
    'marketing.email.subtitle': '無縫銜接Shopify平台，用EDM郵件',
    'marketing.email.description': '營銷實現您的私域GMV增長',
    'marketing.wechat': '微信營銷',
    'marketing.wechat.subtitle': '微信生態全域營銷',
    'marketing.wechat.description': '助力移動端獲客·留客',
    'marketing.sms': '短信營銷',
    'marketing.sms.subtitle': '國內外高速率高送達',
    'marketing.sms.description': '短鏈點擊追蹤｜首視頻呈現｜數據累積',
    'marketing.aiCall': 'AI智能外呼',
    'marketing.aiCall.subtitle': '助力企業規模化，精細化會員運營',
    'marketing.aiCall.description': '實現品牌再增長',
    'marketing.tiktok': 'TikTok Ads',
    'marketing.tiktok.subtitle': '出海必佔位的主流平台',
    'marketing.tiktok.description': '移動時代領跑用戶注意力',
    'marketing.5g': '5G消息',
    'marketing.5g.subtitle': '全方位提升展現與轉化鏈路',
    'marketing.5g.description': '富媒體消息，開啟5G營銷新時代',
    'marketing.whatsapp': 'WhatsApp消息',
    'marketing.whatsapp.subtitle': '讓企業與全球的用戶鏈接起來',
    'marketing.whatsapp.description': '實現無縫的消息交換和互動',
    'marketing.description': '全渠道營銷，一站式解決 - 探客AI手機集成多種營銷工具',
    
    // 行業案例
    'industry.title': '廣泛應用於全行業，只要有賬號就可獲客',
    'industry.manufacturing': '生產型企業直播',
    'industry.manufacturing.desc': '突破傳統直播限制，實時展示生產流程，提升用戶體驗',
    'industry.localBusiness': '本地實體商家',
    'industry.localBusiness.desc': '無人值守智能直播系統，低成本解決商家直播需求',
    'industry.beauty': '美容美體行業',
    'industry.beauty.desc': '降低獲客成本，場景化直播展示專業服務',
    'industry.homeDecor': '家居建材行業',
    'industry.homeDecor.desc': '產品實景直播展示，實現長期獲客效果',
    'industry.anyAccount': '有賬號就可開播',
    'industry.anyAccount.desc': '應用場景廣泛，輕鬆開啟直播帶貨賺佣金',
    
    // 定價
    'pricing.title': '定價計劃',
    'pricing.subtitle': '各種不同的定價計劃，滿足不同的需求',
    'pricing.recommended': '推薦',
    'pricing.personal': '個人計劃',
    'pricing.personal.feature1': '一年使用期限',
    'pricing.personal.feature2': '2次換綁設備',
    'pricing.personal.feature3': 'Coze空間會員',
    'pricing.personal.feature4': '免費升級',
    'pricing.personal.button': '立即獲取',
    'pricing.professional': '專業計劃',
    'pricing.professional.feature1': '終身永久使用',
    'pricing.professional.feature2': '任意換綁設備',
    'pricing.professional.feature3': 'Coze空間會員',
    'pricing.professional.feature4': '免費升級',
    'pricing.professional.button': '立即獲取',
    'pricing.oem': 'OEM代理',
    'pricing.oem.feature1': 'OEM定制安裝包',
    'pricing.oem.feature2': '價格5折起',
    'pricing.oem.feature3': '代理後台',
    'pricing.oem.feature4': '技術支持',
    'pricing.oem.button': '聯繫我們',
    
    // 聯繫我們
    'contact.title': '聯繫我們',
    'contact.subtitle': '探客AI手機期待與您合作，共創智能營銷新時代',
    'contact.phone': '電話諮詢',
    'contact.phone.number': '400-123-4567',
    'contact.phone.hours': '工作時間：9:00-18:00',
    'contact.email': '郵箱聯繫',
    'contact.email.business': 'contact@tanke.ai',
    'contact.email.sales': 'sales@tanke.ai',
    'contact.wechat': '微信諮詢',
    'contact.wechat.id': '微信號：tanke-ai',
    'contact.wechat.qr': '掃碼添加客服',
    'contact.copyright': '© 2024 探客AI手機. All rights reserved.',
    'contact.slogan': '讓營銷更智能，讓增長更簡單',
    'contact.customize': '立即定制',
    'contact.brand': '探客AI',
    
    // 頁腳
    'footer.title': '📞 聯繫探客AI',
    'footer.subtitle': '了解更多產品信息，獲取專業的AI營銷解決方案',
    'footer.company': '公司',
    'footer.about': '關於我們',
    'footer.careers': '招聘信息',
    'footer.contact': '聯繫我們',
    'footer.products': '產品',
    'footer.aiPhone': 'AI手機',
    'footer.marketing': '營銷平台',
    'footer.support': '支持',
    'footer.help': '幫助中心',
    'footer.docs': '開發文檔',
    'footer.community': '社區',
    'footer.copyright': '© 2024 探客AI. 保留所有權利。'
  },
  
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
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
    'footer.copyright': '© 2024 Tanke AI. All rights reserved.'
  },
  
  'ja': {
    // ナビゲーション
    'nav.home': 'ホーム',
    'nav.products': '製品ソリューション',
    'nav.products.aiMarketing': 'AIマーケティングインテリジェント',
    'nav.products.aiLive': 'AIライブインテリジェント',
    'nav.products.aiCall': 'AIコールインテリジェント',
    'nav.tutorials': '使用チュートリアル',
    'nav.partnership': '代理パートナー',
    'nav.about': '会社概要',
    'nav.customize': '今すぐカスタマイズ',
    'nav.language': '言語',
    
    // ヒーロー
    'hero.title': 'TankeAI Phone',
    'hero.subtitle': 'スマートマーケティング、簡単ライブ配信',
    'hero.description': 'AI技術による革新的マーケティングソリューション、企業向けワンストップサービス',
    'hero.getStarted': '開始',
    'hero.learnMore': '詳細',
    
    // 機能
    'features.title': 'AI自動マーケティング',
    'features.subtitle': '3つのコアモジュールで企業DXを支援',
    'features.privateLive': 'プライベート配信',
    'features.privateLive.desc': '企業専用ライブ配信SaaS',
    'features.scrm': 'SCRM',
    'features.scrm.desc': 'リードから顧客まで一貫管理',
    'features.portal': 'ポータル・EC',
    'features.portal.desc': '低コスト迅速構築',
    'features.learnMore': '詳細',
    'features.description': 'AI主導の総合マーケティングで企業DXを加速',
    
    // マーケティング
    'marketing.title': '🚀 総合マーケティングソリューション',
    'marketing.subtitle': '8つのマーケティングモジュールで全チャネルDXを実現',
    'marketing.interaction': '全タッチポイント連携',
    'marketing.interaction.subtitle': 'スマートマルチチャネル運営',
    'marketing.interaction.description': 'ユーザーがいる場所でコミュニケーション',
    'marketing.email': 'Eメールマーケティング',
    'marketing.email.subtitle': 'Shopify連携EDMメール',
    'marketing.email.description': 'プライベートドメインGMV成長',
    'marketing.wechat': 'WeChat マーケティング',
    'marketing.wechat.subtitle': 'WeChat生態系マーケティング',
    'marketing.wechat.description': 'モバイル顧客獲得・維持',
    'marketing.sms': 'SMSマーケティング',
    'marketing.sms.subtitle': '高速グローバル配信',
    'marketing.sms.description': 'リンク追跡｜動画プレビュー｜データ分析',
    'marketing.aiCall': 'AI音声発信',
    'marketing.aiCall.subtitle': '拡張可能な会員運営',
    'marketing.aiCall.description': 'ブランド成長実現',
    'marketing.tiktok': 'TikTok Ads',
    'marketing.tiktok.subtitle': '海外必須プラットフォーム',
    'marketing.tiktok.description': 'モバイル時代の注目度向上',
    'marketing.5g': '5Gメッセージ',
    'marketing.5g.subtitle': '表示・転換率向上',
    'marketing.5g.description': 'リッチメディアで5Gマーケティング',
    'marketing.whatsapp': 'WhatsApp メッセージ',
    'marketing.whatsapp.subtitle': 'グローバルユーザー接続',
    'marketing.whatsapp.description': 'シームレスなメッセージ交換',
    'marketing.description': '全チャネルマーケティング、ワンストップソリューション',
    
    // 業界事例
    'industry.title': '全業界対応、アカウントがあれば顧客獲得可能',
    'industry.manufacturing': '製造業ライブ',
    'industry.manufacturing.desc': '生産プロセスのリアルタイム配信で顧客体験向上',
    'industry.localBusiness': '地域実店舗',
    'industry.localBusiness.desc': '無人ライブ配信システム、低コストソリューション',
    'industry.beauty': '美容・エステ業界',
    'industry.beauty.desc': '顧客獲得コスト削減、サービス体験配信',
    'industry.homeDecor': '住宅・建材業界',
    'industry.homeDecor.desc': '商品実演配信で長期顧客獲得を実現',
    'industry.anyAccount': 'アカウント配信',
    'industry.anyAccount.desc': '幅広い応用、簡単収益化配信システム',
    
    // 料金プラン
    'pricing.title': '料金プラン',
    'pricing.subtitle': 'ニーズに合わせたプランをお選びください',
    'pricing.recommended': 'おすすめ',
    'pricing.personal': '個人プラン',
    'pricing.personal.feature1': '1年間ライセンス',
    'pricing.personal.feature2': '2回端末変更可',
    'pricing.personal.feature3': 'Cozeワークスペース',
    'pricing.personal.feature4': '無料アップグレード',
    'pricing.personal.button': 'お申し込み',
    'pricing.professional': 'プロプラン',
    'pricing.professional.feature1': '永続ライセンス',
    'pricing.professional.feature2': '端末変更無制限',
    'pricing.professional.feature3': 'Cozeワークスペース',
    'pricing.professional.feature4': '無料アップグレード',
    'pricing.professional.button': 'お申し込み',
    'pricing.oem': 'OEMパートナー',
    'pricing.oem.feature1': 'OEMカスタムパッケージ',
    'pricing.oem.feature2': '5割引価格',
    'pricing.oem.feature3': 'パートナーダッシュボード',
    'pricing.oem.feature4': '技術サポート',
    'pricing.oem.button': 'お問い合わせ',
    
    // お問い合わせ
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'TankeAIフォンは皆様との協力を通じて、新しいインテリジェントマーケティング時代の創造を期待しています',
    'contact.phone': '電話相談',
    'contact.phone.number': '400-123-4567',
    'contact.phone.hours': '営業時間：9:00-18:00',
    'contact.email': 'メール連絡',
    'contact.email.business': 'contact@tanke.ai',
    'contact.email.sales': 'sales@tanke.ai',
    'contact.wechat': 'WeChat相談',
    'contact.wechat.id': 'WeChat ID：tanke-ai',
    'contact.wechat.qr': 'QRコードをスキャンしてカスタマーサービスを追加',
    'contact.copyright': '© 2024 TankeAIフォン. All rights reserved.',
    'contact.slogan': 'マーケティングをよりスマートに、成長をよりシンプルに',
    'contact.customize': '今すぐカスタマイズ',
    'contact.brand': 'TankeAI',
    
    // フッター
    'footer.title': '📞 TankeAI お問い合わせ',
    'footer.subtitle': '製品詳細やプロフェッショナルAIマーケティングソリューションについて',
    'footer.company': '会社',
    'footer.about': '私たちについて',
    'footer.careers': '採用情報',
    'footer.contact': 'お問い合わせ',
    'footer.products': '製品',
    'footer.aiPhone': 'AIフォン',
    'footer.marketing': 'マーケティングプラットフォーム',
    'footer.support': 'サポート',
    'footer.help': 'ヘルプセンター',
    'footer.docs': '開発ドキュメント',
    'footer.community': 'コミュニティ',
    'footer.copyright': '© 2024 TankeAI. 全著作権所有。'
  },
  
  'ko': {
    // 내비게이션
    'nav.home': '홈페이지',
    'nav.products': '제품 솔루션',
    'nav.products.aiMarketing': 'AI 마케팅',
    'nav.products.aiLive': 'AI 라이브',
    'nav.products.aiCall': 'AI 콜',
    'nav.tutorials': '사용 튜토리얼',
    'nav.partnership': '대리 협력',
    'nav.about': '회사 소개',
    'nav.customize': '즉시 맞춤화',
    'nav.language': '언어',
    
    // 히어로
    'hero.title': 'Tanke AI Phone',
    'hero.subtitle': '스마트 마케팅, 간편 라이브',
    'hero.description': 'AI 기반 혁신 마케팅 솔루션, 기업 원스톱 서비스',
    'hero.getStarted': '시작',
    'hero.learnMore': '더보기',
    
    // 기능
    'features.title': 'AI 자동 마케팅',
    'features.subtitle': '3개 핵심 모듈로 기업 디지털 마케팅 지원',
    'features.privateLive': '프라이빗 라이브',
    'features.privateLive.desc': '기업 전용 라이브 SaaS',
    'features.scrm': 'SCRM',
    'features.scrm.desc': '리드부터 고객까지 통합 관리',
    'features.portal': '포털·쇼핑몰',
    'features.portal.desc': '저비용 신속 구축',
    'features.learnMore': '더보기',
    'features.description': 'AI 기반 통합 마케팅으로 기업 디지털 전환 가속화',
    
    // 마케팅
    'marketing.title': '🚀 통합 마케팅 솔루션',
    'marketing.subtitle': '8개 마케팅 모듈로 전채널 디지털 마케팅 구현',
    'marketing.interaction': '전접점 상호작용',
    'marketing.interaction.subtitle': '스마트 멀티채널 운영',
    'marketing.interaction.description': '사용자가 있는 곳에서 소통과 경험 제공',
    'marketing.email': '이메일 마케팅',
    'marketing.email.subtitle': 'Shopify 연동 EDM 메일',
    'marketing.email.description': '프라이빗 도메인 GMV 성장',
    'marketing.wechat': '위챗 마케팅',
    'marketing.wechat.subtitle': '위챗 생태계 마케팅',
    'marketing.wechat.description': '모바일 고객 확보 및 유지',
    'marketing.sms': 'SMS 마케팅',
    'marketing.sms.subtitle': '고속 글로벌 전송',
    'marketing.sms.description': '링크 추적｜동영상 미리보기｜데이터 분석',
    'marketing.aiCall': 'AI 지능형 발신',
    'marketing.aiCall.subtitle': '확장 가능한 회원 운영',
    'marketing.aiCall.description': '브랜드 재성장 실현',
    'marketing.tiktok': 'TikTok Ads',
    'marketing.tiktok.subtitle': '해외 필수 플랫폼',
    'marketing.tiktok.description': '모바일 시대 사용자 주목도 선도',
    'marketing.5g': '5G 메시지',
    'marketing.5g.subtitle': '표시 및 전환율 향상',
    'marketing.5g.description': '리치 미디어로 5G 마케팅 시대 개척',
    'marketing.whatsapp': 'WhatsApp 메시지',
    'marketing.whatsapp.subtitle': '글로벌 사용자 연결',
    'marketing.whatsapp.description': '원활한 메시지 교환 및 상호작용',
    'marketing.description': '전채널 마케팅, 원스톱 솔루션',
    
    // 산업 사례
    'industry.title': '전 업계 적용 가능, 계정만 있으면 고객 확보',
    'industry.manufacturing': '제조업 라이브',
    'industry.manufacturing.desc': '생산 과정 실시간 중계로 고객 경험 향상',
    'industry.localBusiness': '지역 실체 상가',
    'industry.localBusiness.desc': '무인 라이브 스트리밍 시스템, 저비용 솔루션',
    'industry.beauty': '미용·에스테틱 업계',
    'industry.beauty.desc': '고객 확보 비용 절감, 서비스 체험 중계',
    'industry.homeDecor': '가정용품·건자재 업계',
    'industry.homeDecor.desc': '제품 실연 중계로 장기 고객 확보 실현',
    'industry.anyAccount': '계정 스트리밍',
    'industry.anyAccount.desc': '광범위한 응용, 간편한 수익화 중계 시스템',
    
    // 가격 계획
    'pricing.title': '가격 계획',
    'pricing.subtitle': '다양한 요구사항에 맞는 최적의 플랜 선택',
    'pricing.recommended': '추천',
    'pricing.personal': '개인 계획',
    'pricing.personal.feature1': '1년 사용 기간',
    'pricing.personal.feature2': '2회 기기 변경',
    'pricing.personal.feature3': 'Coze 워크스페이스',
    'pricing.personal.feature4': '무료 업그레이드',
    'pricing.personal.button': '즉시 가입',
    'pricing.professional': '전문 계획',
    'pricing.professional.feature1': '평생 영구 사용',
    'pricing.professional.feature2': '무제한 기기 변경',
    'pricing.professional.feature3': 'Coze 워크스페이스',
    'pricing.professional.feature4': '무료 업그레이드',
    'pricing.professional.button': '즉시 가입',
    'pricing.oem': 'OEM 대리',
    'pricing.oem.feature1': 'OEM 맞춤 설치 패키지',
    'pricing.oem.feature2': '5할 할인 가격',
    'pricing.oem.feature3': '대리 백오피스',
    'pricing.oem.feature4': '기술 지원',
    'pricing.oem.button': '문의하기',
    
    // 연락처
    'contact.title': '연락처',
    'contact.subtitle': 'Tanke AI Phone은 여러분과의 협력을 통해 지능형 마케팅 신시대 창조를 기대합니다',
    'contact.phone': '전화 상담',
    'contact.phone.number': '400-123-4567',
    'contact.phone.hours': '업무시간: 9:00-18:00',
    'contact.email': '이메일 연락',
    'contact.email.business': 'contact@tanke.ai',
    'contact.email.sales': 'sales@tanke.ai',
    'contact.wechat': 'WeChat 상담',
    'contact.wechat.id': 'WeChat ID: tanke-ai',
    'contact.wechat.qr': 'QR코드 스캔하여 고객서비스 추가',
    'contact.copyright': '© 2024 Tanke AI Phone. All rights reserved.',
    'contact.slogan': '마케팅을 더 스마트하게, 성장을 더 간단하게',
    'contact.customize': '즉시 맞춤화',
    'contact.brand': 'Tanke AI',
    
    // 푸터
    'footer.title': '📞 Tanke AI 연락하기',
    'footer.subtitle': '제품 정보 및 전문 AI 마케팅 솔루션에 대해 자세히 알아보기',
    'footer.company': '회사',
    'footer.about': '회사 소개',
    'footer.careers': '채용 정보',
    'footer.contact': '연락처',
    'footer.products': '제품',
    'footer.aiPhone': 'AI 폰',
    'footer.marketing': '마케팅 플랫폼',
    'footer.support': '지원',
    'footer.help': '도움말 센터',
    'footer.docs': '개발 문서',
    'footer.community': '커뮤니티',
    'footer.copyright': '© 2024 Tanke AI. 모든 권리 보유.'
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
      if (stored && ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'].includes(stored)) {
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