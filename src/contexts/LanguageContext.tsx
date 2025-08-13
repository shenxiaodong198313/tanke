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
    
    // 实时服务数据
    'realTimeData.title': '实时服务数据',
    'realTimeData.messageSent': '累计发送消息',
    'realTimeData.momentsPublished': '累计发布朋友圈',
    'realTimeData.friendsAdded': '累计添加好友',
    'realTimeData.aiChats': '累计AI对话',
    
    // 专注私域营销自动化
    'privateDomain.number': '01',
    'privateDomain.title': '专注私域营销自动化',
    'privateDomain.about': 'ABOUT SIKEBAO',
    'privateDomain.desc1': '专注社群营销自动化，给您私有化部署一款微信群管理系统。',
    'privateDomain.desc2': '登陆任意微信作为机器人小助手，智能管理微信社群，实现社群营销自动化。',
    'privateDomain.feature1': '批量导入好友',
    'privateDomain.feature1.sub1': '一键通讯录备份',
    'privateDomain.feature1.sub2': '批量智能打招呼',
    'privateDomain.feature1.sub3': '朋友圈自动关怀',
    'privateDomain.feature1.sub4': '多号同时运行',
    'privateDomain.feature2': '极大提升微信群管理效率和活跃度等等',
    'privateDomain.consultButton': '立即咨询',
    
    // 24H高效群聊管理
    'groupManagement.title': '24H高效群聊管理',
    'groupManagement.subtitle': '千群管理，一人搞定，快速高效促活群成员，解放双手，省时省力',
    'groupManagement.autoApprove': '自动通过',
    'groupManagement.autoApprove.desc': '自动通过入群申请，并可设置时间间隔规避风险',
    'groupManagement.welcome': '入群欢迎',
    'groupManagement.welcome.desc': '新人进群后及时发送消息并@新人，增加入群仪式感及快速了解群规则',
    'groupManagement.keywordJoin': '关键字入群',
    'groupManagement.keywordJoin.desc': '设定关键词，触发关键词即可自动拉群',
    'groupManagement.autoKick': '自动踢人',
    'groupManagement.autoKick.desc': '根据发言名片、频率、异常字、垃圾信息等自动踢出，并进入黑名单系统',
    'groupManagement.trialButton': '免费试用',
    
    // 智能客服聊天工具
    'smartChat.title': '智能客服聊天工具',
    'smartChat.subtitle': '多方式触达用户，24H智能聊天，让沟通更灵活！',
    'smartChat.conversation': '会话沟通',
    'smartChat.conversation.desc': '多人多号会话沟通，一人轻松管理多个微信号',
    'smartChat.keywordReply': '关键词回复',
    'smartChat.keywordReply.desc': '设定关键词，触发关键词即可自动回复，实现24H智能问答',
    'smartChat.scriptLib': '话术库',
    'smartChat.scriptLib.desc': '话术集中收录管理，其他功能模块识别可快捷调用，沉淀有价值内容',
    'smartChat.quickReply': '快捷回复',
    'smartChat.quickReply.desc': '预设常见问题的回复用语，人机协作，快速高效解答用户问题',
    
    // 强大的功能特点
    'powerfulFeatures.title': '强大的功能特点',
    'powerfulFeatures.subtitle': '微云营提供全方位的微信营销解决方案，助您轻松管理微信营销活动',
    'powerfulFeatures.cleanFans': '清理无效粉丝',
    'powerfulFeatures.cleanFans.desc': '智能识别并一键清理僵尸粉、黑名单等无效粉丝，保持粉丝质量',
    'powerfulFeatures.addGroupFriends': '加群好友',
    'powerfulFeatures.addGroupFriends.desc': '快速构群成员添加为好友，扩大人脉网络',
    'powerfulFeatures.batchImport': '批量导入手机号',
    'powerfulFeatures.batchImport.desc': '支持Excel批量导入手机号，一键添加为微信好友',
    'powerfulFeatures.batchSend': '批量群发',
    'powerfulFeatures.batchSend.desc': '定时发送消息给选定好友或群组，提高营销效率',
    'powerfulFeatures.autoSwitchGroup': '自动换群',
    'powerfulFeatures.autoSwitchGroup.desc': '智能管理多个群组，自动执行群组切换策略',
    'powerfulFeatures.exportMembers': '导出群成员',
    'powerfulFeatures.exportMembers.desc': '一键导出群成员信息，便于后续精准营销',
    'powerfulFeatures.autoMoments': '自动朋友圈',
    'powerfulFeatures.autoMoments.desc': '定时自动发布朋友圈内容，保持活跃度',
    'powerfulFeatures.multiAccount': '无限多开',
    'powerfulFeatures.multiAccount.desc': '支持同时登录多个微信账号，高效管理多个营销渠道',
    'powerfulFeatures.dataAnalysis': '数据分析',
    'powerfulFeatures.dataAnalysis.desc': '全面分析营销数据，助您做出明智的决策',
    
    // 成功案例
    'successCases.title': '用户成功案例',
    'successCases.subtitle': '数千家企业的共同选择',
    'successCases.activeUsers': '活跃用户',
    'successCases.satisfaction': '客户满意度',
    'successCases.conversionImprovement': '平均转化提升',
    
    // 手机占位图标题
    'mobileApp.smartMarketing': '智能营销助手',
    'mobileApp.groupManagement': '群聊管理助手',
    'mobileApp.autoManagement': '24小时自动化管理',
    'mobileApp.efficient': '高效便捷',
    'mobileApp.smartCustomerService': '智能客服助手',
    'mobileApp.smartChat': '24小时智能对话',
    'mobileApp.efficientCommunication': '高效沟通'
  },
  
  'zh-TW': {
    // 導航欄
    'nav.home': '首頁',
    'nav.products': '產品功能',
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
    'footer.copyright': '© 2024 探客AI. 保留所有權利。',
    
    // AI營銷頁面
    'aiMarketing.title': 'AI營銷智能體',
    'aiMarketing.subtitle': '智能微信營銷引擎，10倍提升私域運營效率',
    'aiMarketing.feature1': '全流程自動化',
    'aiMarketing.feature1.desc': '從引流到轉化的閉環管理',
    'aiMarketing.feature2': '微信風控規避',
    'aiMarketing.feature2.desc': '智能分時策略 + 行為模擬技術',
    'aiMarketing.feature3': '數據可視化',
    'aiMarketing.feature3.desc': '實時監控轉化漏斗',
    
    // 實時服務數據
    'realTimeData.title': '實時服務數據',
    'realTimeData.messageSent': '累計發送消息',
    'realTimeData.momentsPublished': '累計發布朋友圈',
    'realTimeData.friendsAdded': '累計添加好友',
    'realTimeData.aiChats': '累計AI對話',
    
    // 專注私域營銷自動化
    'privateDomain.number': '01',
    'privateDomain.title': '專注私域營銷自動化',
    'privateDomain.about': 'ABOUT SIKEBAO',
    'privateDomain.desc1': '專注社群營銷自動化，給您私有化部署一款微信群管理系統。',
    'privateDomain.desc2': '登陸任意微信作為機器人小助手，智能管理微信社群，實現社群營銷自動化。',
    'privateDomain.feature1': '批量導入好友',
    'privateDomain.feature1.sub1': '一鍵通訊錄備份',
    'privateDomain.feature1.sub2': '批量智能打招呼',
    'privateDomain.feature1.sub3': '朋友圈自動關懷',
    'privateDomain.feature1.sub4': '多號同時運行',
    'privateDomain.feature2': '極大提升微信群管理效率和活躍度等等',
    'privateDomain.consultButton': '立即諮詢',
    
    // 24H高效群聊管理
    'groupManagement.title': '24H高效群聊管理',
    'groupManagement.subtitle': '千群管理，一人搞定，快速高效促活群成員，解放雙手，省時省力',
    'groupManagement.autoApprove': '自動通過',
    'groupManagement.autoApprove.desc': '自動通過入群申請，並可設置時間間隔規避風險',
    'groupManagement.welcome': '入群歡迎',
    'groupManagement.welcome.desc': '新人進群後及時發送消息並@新人，增加入群儀式感及快速了解群規則',
    'groupManagement.keywordJoin': '關鍵字入群',
    'groupManagement.keywordJoin.desc': '設定關鍵詞，觸發關鍵詞即可自動拉群',
    'groupManagement.autoKick': '自動踢人',
    'groupManagement.autoKick.desc': '根據發言名片、頻率、異常字、垃圾信息等自動踢出，並進入黑名單系統',
    'groupManagement.trialButton': '免費試用',
    
    // 智能客服聊天工具
    'smartChat.title': '智能客服聊天工具',
    'smartChat.subtitle': '多方式觸達用戶，24H智能聊天，讓溝通更靈活！',
    'smartChat.conversation': '會話溝通',
    'smartChat.conversation.desc': '多人多號會話溝通，一人輕鬆管理多個微信號',
    'smartChat.keywordReply': '關鍵詞回復',
    'smartChat.keywordReply.desc': '設定關鍵詞，觸發關鍵詞即可自動回復，實現24H智能問答',
    'smartChat.scriptLib': '話術庫',
    'smartChat.scriptLib.desc': '話術集中收錄管理，其他功能模塊識別可快捷調用，沉澱有價值內容',
    'smartChat.quickReply': '快捷回復',
    'smartChat.quickReply.desc': '預設常見問題的回復用語，人機協作，快速高效解答用戶問題',
    
    // 強大的功能特點
    'powerfulFeatures.title': '強大的功能特點',
    'powerfulFeatures.subtitle': '微雲營提供全方位的微信營銷解決方案，助您輕鬆管理微信營銷活動',
    'powerfulFeatures.cleanFans': '清理無效粉絲',
    'powerfulFeatures.cleanFans.desc': '智能識別並一鍵清理殭屍粉、黑名單等無效粉絲，保持粉絲質量',
    'powerfulFeatures.addGroupFriends': '加群好友',
    'powerfulFeatures.addGroupFriends.desc': '快速構群成員添加為好友，擴大人脈網絡',
    'powerfulFeatures.batchImport': '批量導入手機號',
    'powerfulFeatures.batchImport.desc': '支持Excel批量導入手機號，一鍵添加為微信好友',
    'powerfulFeatures.batchSend': '批量群發',
    'powerfulFeatures.batchSend.desc': '定時發送消息給選定好友或群組，提高營銷效率',
    'powerfulFeatures.autoSwitchGroup': '自動換群',
    'powerfulFeatures.autoSwitchGroup.desc': '智能管理多個群組，自動執行群組切換策略',
    'powerfulFeatures.exportMembers': '導出群成員',
    'powerfulFeatures.exportMembers.desc': '一鍵導出群成員信息，便於後續精準營銷',
    'powerfulFeatures.autoMoments': '自動朋友圈',
    'powerfulFeatures.autoMoments.desc': '定時自動發布朋友圈內容，保持活躍度',
    'powerfulFeatures.multiAccount': '無限多開',
    'powerfulFeatures.multiAccount.desc': '支持同時登錄多個微信賬號，高效管理多個營銷渠道',
    'powerfulFeatures.dataAnalysis': '數據分析',
    'powerfulFeatures.dataAnalysis.desc': '全面分析營銷數據，助您做出明智的決策',
    
    // 成功案例
    'successCases.title': '用戶成功案例',
    'successCases.subtitle': '數千家企業的共同選擇',
    'successCases.activeUsers': '活躍用戶',
    'successCases.satisfaction': '客戶滿意度',
    'successCases.conversionImprovement': '平均轉化提升',
    
    // 手機占位圖標題
    'mobileApp.smartMarketing': '智能營銷助手',
    'mobileApp.groupManagement': '群聊管理助手',
    'mobileApp.autoManagement': '24小時自動化管理',
    'mobileApp.efficient': '高效便捷',
    'mobileApp.smartCustomerService': '智能客服助手',
    'mobileApp.smartChat': '24小時智能對話',
    'mobileApp.efficientCommunication': '高效溝通'
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
    
    // Real-time Service Data
    'realTimeData.title': 'Real-time Service Data',
    'realTimeData.messageSent': 'Total Messages Sent',
    'realTimeData.momentsPublished': 'Total Moments Published',
    'realTimeData.friendsAdded': 'Total Friends Added',
    'realTimeData.aiChats': 'Total AI Conversations',
    
    // Private Domain Marketing Automation
    'privateDomain.number': '01',
    'privateDomain.title': 'Focus on Private Domain Marketing Automation',
    'privateDomain.about': 'ABOUT SIKEBAO',
    'privateDomain.desc1': 'Focused on community marketing automation, providing you with a privately deployed WeChat group management system.',
    'privateDomain.desc2': 'Log in any WeChat as a robot assistant to intelligently manage WeChat communities and achieve community marketing automation.',
    'privateDomain.feature1': 'Batch Import Friends',
    'privateDomain.feature1.sub1': 'One-click contact backup',
    'privateDomain.feature1.sub2': 'Batch intelligent greetings',
    'privateDomain.feature1.sub3': 'Automatic Moments care',
    'privateDomain.feature1.sub4': 'Multi-account simultaneous operation',
    'privateDomain.feature2': 'Greatly improve WeChat group management efficiency and activity',
    'privateDomain.consultButton': 'Consult Now',
    
    // 24H Efficient Group Management
    'groupManagement.title': '24H Efficient Group Chat Management',
    'groupManagement.subtitle': 'Manage thousands of groups, one person handles it all, efficiently activate group members, free your hands, save time and effort',
    'groupManagement.autoApprove': 'Auto Approve',
    'groupManagement.autoApprove.desc': 'Automatically approve group join requests with time interval settings to avoid risks',
    'groupManagement.welcome': 'Group Welcome',
    'groupManagement.welcome.desc': 'Send welcome messages and @new members promptly after joining to enhance joining ceremony and quick understanding of group rules',
    'groupManagement.keywordJoin': 'Keyword Join Group',
    'groupManagement.keywordJoin.desc': 'Set keywords to automatically invite to group when triggered',
    'groupManagement.autoKick': 'Auto Kick',
    'groupManagement.autoKick.desc': 'Automatically kick out based on name cards, frequency, abnormal words, spam, etc., and add to blacklist system',
    'groupManagement.trialButton': 'Free Trial',
    
    // Smart Customer Service Chat Tool
    'smartChat.title': 'Smart Customer Service Chat Tool',
    'smartChat.subtitle': 'Multi-channel user reach, 24H smart chat, making communication more flexible!',
    'smartChat.conversation': 'Conversation Communication',
    'smartChat.conversation.desc': 'Multi-person multi-account conversation communication, easily manage multiple WeChat accounts',
    'smartChat.keywordReply': 'Keyword Reply',
    'smartChat.keywordReply.desc': 'Set keywords for automatic replies when triggered, achieving 24H smart Q&A',
    'smartChat.scriptLib': 'Script Library',
    'smartChat.scriptLib.desc': 'Centralized script collection and management, quick access by other function modules, accumulating valuable content',
    'smartChat.quickReply': 'Quick Reply',
    'smartChat.quickReply.desc': 'Preset common question replies, human-AI collaboration for efficient user problem solving',
    
    // Powerful Features
    'powerfulFeatures.title': 'Powerful Features',
    'powerfulFeatures.subtitle': 'WeCloud Marketing provides comprehensive WeChat marketing solutions to help you easily manage WeChat marketing activities',
    'powerfulFeatures.cleanFans': 'Clean Invalid Fans',
    'powerfulFeatures.cleanFans.desc': 'Intelligently identify and one-click clean zombie fans, blacklisted users to maintain fan quality',
    'powerfulFeatures.addGroupFriends': 'Add Group Friends',
    'powerfulFeatures.addGroupFriends.desc': 'Quickly add group members as friends to expand your network',
    'powerfulFeatures.batchImport': 'Batch Import Phone Numbers',
    'powerfulFeatures.batchImport.desc': 'Support Excel batch import of phone numbers, one-click add as WeChat friends',
    'powerfulFeatures.batchSend': 'Batch Send',
    'powerfulFeatures.batchSend.desc': 'Schedule messages to selected friends or groups to improve marketing efficiency',
    'powerfulFeatures.autoSwitchGroup': 'Auto Switch Groups',
    'powerfulFeatures.autoSwitchGroup.desc': 'Intelligently manage multiple groups with automatic group switching strategies',
    'powerfulFeatures.exportMembers': 'Export Group Members',
    'powerfulFeatures.exportMembers.desc': 'One-click export group member information for precise follow-up marketing',
    'powerfulFeatures.autoMoments': 'Auto Moments',
    'powerfulFeatures.autoMoments.desc': 'Schedule automatic Moments posting to maintain activity',
    'powerfulFeatures.multiAccount': 'Unlimited Multi-open',
    'powerfulFeatures.multiAccount.desc': 'Support simultaneous login of multiple WeChat accounts for efficient multi-channel marketing management',
    'powerfulFeatures.dataAnalysis': 'Data Analysis',
    'powerfulFeatures.dataAnalysis.desc': 'Comprehensive marketing data analysis to help you make informed decisions',
    
    // Success Cases
    'successCases.title': 'User Success Stories',
    'successCases.subtitle': 'The common choice of thousands of enterprises',
    'successCases.activeUsers': 'Active Users',
    'successCases.satisfaction': 'Customer Satisfaction',
    'successCases.conversionImprovement': 'Average Conversion Improvement',
    
    // Mobile App Placeholders
    'mobileApp.smartMarketing': 'Smart Marketing Assistant',
    'mobileApp.groupManagement': 'Group Chat Management Assistant',
    'mobileApp.autoManagement': '24-hour Automated Management',
    'mobileApp.efficient': 'Efficient & Convenient',
    'mobileApp.smartCustomerService': 'Smart Customer Service Assistant',
    'mobileApp.smartChat': '24-hour Smart Chat',
    'mobileApp.efficientCommunication': 'Efficient Communication'
  },
  
  'ja': {
    // ナビゲーション
    'nav.home': 'ホーム',
    'nav.products': '製品機能',
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
    'footer.copyright': '© 2024 TankeAI. 全著作権所有。',
    
    // AIマーケティングページ
    'aiMarketing.title': 'AIマーケティングエージェント',
    'aiMarketing.subtitle': 'インテリジェントWeChatマーケティングエンジン、プライベートドメイン運営効率を10倍向上',
    'aiMarketing.feature1': '全プロセス自動化',
    'aiMarketing.feature1.desc': '集客からコンバージョンまでの閉ループ管理',
    'aiMarketing.feature2': 'WeChatリスク制御回避',
    'aiMarketing.feature2.desc': 'スマートタイミング戦略+行動シミュレーション技術',
    'aiMarketing.feature3': 'データ可視化',
    'aiMarketing.feature3.desc': 'リアルタイムコンバージョンファネル監視',
    
    // リアルタイムサービスデータ
    'realTimeData.title': 'リアルタイムサービスデータ',
    'realTimeData.messageSent': '累計送信メッセージ数',
    'realTimeData.momentsPublished': '累計モーメント投稿数',
    'realTimeData.friendsAdded': '累計友達追加数',
    'realTimeData.aiChats': '累計AI会話数',
    
    // プライベートドメインマーケティング自動化
    'privateDomain.number': '01',
    'privateDomain.title': 'プライベートドメインマーケティング自動化に特化',
    'privateDomain.about': 'ABOUT SIKEBAO',
    'privateDomain.desc1': 'コミュニティマーケティング自動化に特化し、プライベート展開のWeChatグループ管理システムを提供します。',
    'privateDomain.desc2': '任意のWeChatにロボットアシスタントとしてログインし、WeChatコミュニティをインテリジェントに管理し、コミュニティマーケティング自動化を実現します。',
    'privateDomain.feature1': '友達の一括インポート',
    'privateDomain.feature1.sub1': 'ワンクリック連絡先バックアップ',
    'privateDomain.feature1.sub2': '一括インテリジェント挨拶',
    'privateDomain.feature1.sub3': 'モーメント自動ケア',
    'privateDomain.feature1.sub4': '複数アカウント同時運行',
    'privateDomain.feature2': 'WeChatグループ管理効率とアクティビティを大幅向上',
    'privateDomain.consultButton': '今すぐ相談',
    
    // 24H効率的グループ管理
    'groupManagement.title': '24H効率的グループチャット管理',
    'groupManagement.subtitle': '千のグループ管理、一人で対応、迅速かつ効率的にグループメンバーを活性化、手間を省き時間と労力を節約',
    'groupManagement.autoApprove': '自動承認',
    'groupManagement.autoApprove.desc': 'グループ参加申請を自動承認し、時間間隔を設定してリスクを回避',
    'groupManagement.welcome': '入群歓迎',
    'groupManagement.welcome.desc': '新メンバーがグループに参加後、速やかにメッセージを送信し@新メンバー、入群儀式感を高めグループルールを素早く理解',
    'groupManagement.keywordJoin': 'キーワード入群',
    'groupManagement.keywordJoin.desc': 'キーワードを設定し、キーワードトリガーで自動グループ招待',
    'groupManagement.autoKick': '自動キック',
    'groupManagement.autoKick.desc': '発言名刺、頻度、異常文字、迷惑情報などに基づく自動キックアウトとブラックリストシステム登録',
    'groupManagement.trialButton': '無料体験',
    
    // スマートカスタマーサービスチャットツール
    'smartChat.title': 'スマートカスタマーサービスチャットツール',
    'smartChat.subtitle': '多方式ユーザーリーチ、24Hスマートチャット、コミュニケーションをより柔軟に！',
    'smartChat.conversation': '会話コミュニケーション',
    'smartChat.conversation.desc': '多人数・多アカウント会話コミュニケーション、一人で複数のWeChatアカウントを簡単管理',
    'smartChat.keywordReply': 'キーワード返信',
    'smartChat.keywordReply.desc': 'キーワードを設定し、キーワードトリガーで自動返信、24Hスマート問答を実現',
    'smartChat.scriptLib': '話術ライブラリ',
    'smartChat.scriptLib.desc': '話術集中収録管理、他機能モジュールが識別し迅速呼び出し、価値あるコンテンツを蓄積',
    'smartChat.quickReply': 'クイック返信',
    'smartChat.quickReply.desc': 'よくある質問の返信文を予設定、人機協作でユーザー問題を迅速かつ効率的に解答',
    
    // 強力な機能特徴
    'powerfulFeatures.title': '強力な機能特徴',
    'powerfulFeatures.subtitle': 'WeCloudマーケティングは全方位のWeChatマーケティングソリューションを提供し、WeChatマーケティング活動を簡単に管理',
    'powerfulFeatures.cleanFans': '無効ファンのクリーンアップ',
    'powerfulFeatures.cleanFans.desc': 'ゾンビファン、ブラックリストなど無効ファンをインテリジェント識別・ワンクリッククリーンアップ、ファン品質維持',
    'powerfulFeatures.addGroupFriends': 'グループメンバー追加',
    'powerfulFeatures.addGroupFriends.desc': 'グループメンバーを迅速に友達追加、人脈ネットワークを拡大',
    'powerfulFeatures.batchImport': '携帯番号一括インポート',
    'powerfulFeatures.batchImport.desc': 'Excel携帯番号一括インポートをサポート、ワンクリックでWeChat友達追加',
    'powerfulFeatures.batchSend': '一括送信',
    'powerfulFeatures.batchSend.desc': '選択した友達やグループに定時メッセージ送信、マーケティング効率向上',
    'powerfulFeatures.autoSwitchGroup': '自動グループ切替',
    'powerfulFeatures.autoSwitchGroup.desc': '複数グループをインテリジェント管理、自動グループ切替戦略実行',
    'powerfulFeatures.exportMembers': 'グループメンバーエクスポート',
    'powerfulFeatures.exportMembers.desc': 'ワンクリックでグループメンバー情報をエクスポート、後続の精密マーケティングに便利',
    'powerfulFeatures.autoMoments': '自動モーメント',
    'powerfulFeatures.autoMoments.desc': '定時自動モーメントコンテンツ投稿、アクティビティ維持',
    'powerfulFeatures.multiAccount': '無制限マルチオープン',
    'powerfulFeatures.multiAccount.desc': '複数WeChatアカウント同時ログインをサポート、複数マーケティングチャネルを効率管理',
    'powerfulFeatures.dataAnalysis': 'データ分析',
    'powerfulFeatures.dataAnalysis.desc': 'マーケティングデータを全面分析、賢明な決定をサポート',
    
    // 成功事例
    'successCases.title': 'ユーザー成功事例',
    'successCases.subtitle': '数千の企業の共通選択',
    'successCases.activeUsers': 'アクティブユーザー',
    'successCases.satisfaction': '顧客満足度',
    'successCases.conversionImprovement': '平均コンバージョン向上',
    
    // モバイルアプリプレースホルダー
    'mobileApp.smartMarketing': 'スマートマーケティングアシスタント',
    'mobileApp.groupManagement': 'グループチャット管理アシスタント',
    'mobileApp.autoManagement': '24時間自動化管理',
    'mobileApp.efficient': '効率的で便利',
    'mobileApp.smartCustomerService': 'スマートカスタマーサービスアシスタント',
    'mobileApp.smartChat': '24時間スマートチャット',
    'mobileApp.efficientCommunication': '効率的コミュニケーション'
  },
  
  'ko': {
    // 내비게이션
    'nav.home': '홈페이지',
    'nav.products': '제품 기능',
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
    'footer.copyright': '© 2024 Tanke AI. 모든 권리 보유.',
    
    // AI 마케팅 페이지
    'aiMarketing.title': 'AI 마케팅 에이전트',
    'aiMarketing.subtitle': '지능형 WeChat 마케팅 엔진, 프라이빗 도메인 운영 효율 10배 향상',
    'aiMarketing.feature1': '전체 프로세스 자동화',
    'aiMarketing.feature1.desc': '고객 유치부터 전환까지의 폐쇄 루프 관리',
    'aiMarketing.feature2': 'WeChat 리스크 제어 회피',
    'aiMarketing.feature2.desc': '스마트 타이밍 전략 + 행동 시뮬레이션 기술',
    'aiMarketing.feature3': '데이터 시각화',
    'aiMarketing.feature3.desc': '실시간 전환 퍼널 모니터링',
    
    // 실시간 서비스 데이터
    'realTimeData.title': '실시간 서비스 데이터',
    'realTimeData.messageSent': '누적 메시지 전송',
    'realTimeData.momentsPublished': '누적 모멘트 게시',
    'realTimeData.friendsAdded': '누적 친구 추가',
    'realTimeData.aiChats': '누적 AI 대화',
    
    // 프라이빗 도메인 마케팅 자동화
    'privateDomain.number': '01',
    'privateDomain.title': '프라이빗 도메인 마케팅 자동화에 집중',
    'privateDomain.about': 'ABOUT SIKEBAO',
    'privateDomain.desc1': '커뮤니티 마케팅 자동화에 집중하여 프라이빗 배포 WeChat 그룹 관리 시스템을 제공합니다.',
    'privateDomain.desc2': '임의의 WeChat에 로봇 어시스턴트로 로그인하여 WeChat 커뮤니티를 지능적으로 관리하고 커뮤니티 마케팅 자동화를 실현합니다.',
    'privateDomain.feature1': '친구 일괄 가져오기',
    'privateDomain.feature1.sub1': '원클릭 연락처 백업',
    'privateDomain.feature1.sub2': '일괄 지능 인사',
    'privateDomain.feature1.sub3': '모멘트 자동 관리',
    'privateDomain.feature1.sub4': '다중 계정 동시 운영',
    'privateDomain.feature2': 'WeChat 그룹 관리 효율성과 활동성을 크게 향상',
    'privateDomain.consultButton': '즉시 상담',
    
    // 24시간 효율적 그룹 관리
    'groupManagement.title': '24시간 효율적 그룹 채팅 관리',
    'groupManagement.subtitle': '수천 개 그룹 관리, 한 사람이 처리, 신속하고 효율적으로 그룹 구성원 활성화, 손을 자유롭게 하여 시간과 노력 절약',
    'groupManagement.autoApprove': '자동 승인',
    'groupManagement.autoApprove.desc': '그룹 가입 신청 자동 승인, 시간 간격 설정으로 위험 회피',
    'groupManagement.welcome': '그룹 환영',
    'groupManagement.welcome.desc': '신규 회원 그룹 가입 후 즉시 메시지 전송 및 @신규 회원, 가입 의식감 증가 및 그룹 규칙 빠른 이해',
    'groupManagement.keywordJoin': '키워드 그룹 가입',
    'groupManagement.keywordJoin.desc': '키워드 설정, 키워드 트리거 시 자동 그룹 초대',
    'groupManagement.autoKick': '자동 추방',
    'groupManagement.autoKick.desc': '발언 명함, 빈도, 이상 문자, 스팸 정보 등을 기반으로 자동 추방 및 블랙리스트 시스템 등록',
    'groupManagement.trialButton': '무료 체험',
    
    // 스마트 고객 서비스 채팅 도구
    'smartChat.title': '스마트 고객 서비스 채팅 도구',
    'smartChat.subtitle': '다양한 방식으로 사용자 접근, 24시간 스마트 채팅으로 소통을 더욱 유연하게!',
    'smartChat.conversation': '대화 소통',
    'smartChat.conversation.desc': '다인원 다계정 대화 소통, 한 사람이 여러 WeChat 계정을 쉽게 관리',
    'smartChat.keywordReply': '키워드 답변',
    'smartChat.keywordReply.desc': '키워드 설정, 키워드 트리거 시 자동 답변, 24시간 스마트 Q&A 실현',
    'smartChat.scriptLib': '대화 라이브러리',
    'smartChat.scriptLib.desc': '대화 집중 수록 관리, 다른 기능 모듈이 인식하여 빠른 호출, 가치 있는 콘텐츠 축적',
    'smartChat.quickReply': '빠른 답변',
    'smartChat.quickReply.desc': '자주 묻는 질문의 답변 용어 사전 설정, 인간-AI 협력으로 사용자 문제를 신속하고 효율적으로 해결',
    
    // 강력한 기능 특징
    'powerfulFeatures.title': '강력한 기능 특징',
    'powerfulFeatures.subtitle': 'WeCloud 마케팅은 전방위 WeChat 마케팅 솔루션을 제공하여 WeChat 마케팅 활동을 쉽게 관리',
    'powerfulFeatures.cleanFans': '무효 팬 정리',
    'powerfulFeatures.cleanFans.desc': '좀비 팬, 블랙리스트 등 무효 팬을 지능적으로 식별 및 원클릭 정리, 팬 품질 유지',
    'powerfulFeatures.addGroupFriends': '그룹 친구 추가',
    'powerfulFeatures.addGroupFriends.desc': '그룹 구성원을 빠르게 친구로 추가하여 인맥 네트워크 확장',
    'powerfulFeatures.batchImport': '휴대폰 번호 일괄 가져오기',
    'powerfulFeatures.batchImport.desc': 'Excel 휴대폰 번호 일괄 가져오기 지원, 원클릭으로 WeChat 친구 추가',
    'powerfulFeatures.batchSend': '일괄 전송',
    'powerfulFeatures.batchSend.desc': '선택한 친구나 그룹에 정시 메시지 전송, 마케팅 효율 향상',
    'powerfulFeatures.autoSwitchGroup': '자동 그룹 전환',
    'powerfulFeatures.autoSwitchGroup.desc': '여러 그룹을 지능적으로 관리, 자동 그룹 전환 전략 실행',
    'powerfulFeatures.exportMembers': '그룹 구성원 내보내기',
    'powerfulFeatures.exportMembers.desc': '원클릭으로 그룹 구성원 정보 내보내기, 후속 정밀 마케팅에 편리',
    'powerfulFeatures.autoMoments': '자동 모멘트',
    'powerfulFeatures.autoMoments.desc': '정시 자동 모멘트 콘텐츠 게시, 활동성 유지',
    'powerfulFeatures.multiAccount': '무제한 멀티 오픈',
    'powerfulFeatures.multiAccount.desc': '여러 WeChat 계정 동시 로그인 지원, 여러 마케팅 채널 효율적 관리',
    'powerfulFeatures.dataAnalysis': '데이터 분석',
    'powerfulFeatures.dataAnalysis.desc': '마케팅 데이터 전면 분석, 현명한 결정 지원',
    
    // 성공 사례
    'successCases.title': '사용자 성공 사례',
    'successCases.subtitle': '수천 개 기업의 공통 선택',
    'successCases.activeUsers': '활성 사용자',
    'successCases.satisfaction': '고객 만족도',
    'successCases.conversionImprovement': '평균 전환 개선',
    
    // 모바일 앱 플레이스홀더
    'mobileApp.smartMarketing': '스마트 마케팅 어시스턴트',
    'mobileApp.groupManagement': '그룹 채팅 관리 어시스턴트',
    'mobileApp.autoManagement': '24시간 자동화 관리',
    'mobileApp.efficient': '효율적이고 편리',
    'mobileApp.smartCustomerService': '스마트 고객 서비스 어시스턴트',
    'mobileApp.smartChat': '24시간 스마트 채팅',
    'mobileApp.efficientCommunication': '효율적인 소통'
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