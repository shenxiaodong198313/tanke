import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "解决方案",
      links: [
        "智能客服系统",
        "数据分析平台",
        "客户关系管理",
        "移动办公",
        "企业级安全"
      ]
    },
    {
      title: "价格",
      links: [
        "基础版",
        "专业版",
        "企业版",
        "定制方案",
        "免费试用"
      ]
    },
    {
      title: "探客学院",
      links: [
        "产品教程",
        "最佳实践",
        "案例分析",
        "技术文档",
        "视频教学"
      ]
    },
    {
      title: "关于我们",
      links: [
        "公司简介",
        "团队介绍",
        "发展历程",
        "招聘信息",
        "联系我们"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "电话",
      value: "400-888-8888"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "邮箱",
      value: "contact@tanke.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "地址",
      value: "深圳市南山区科技园南区(总部)"
    }
  ];

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, label: "微信", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold">探客</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                专注于为企业提供全方位的数字化转型解决方案，让科技真正成为商业发展的普惠性工具。
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <div className="text-blue-600">
                      {contact.icon}
                    </div>
                    <span className="text-sm">{contact.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-800">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">订阅我们的资讯</h3>
            <p className="text-gray-600 text-sm mb-4">
              获取最新的产品更新和行业资讯
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm text-gray-800"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-r-lg text-sm font-medium"
              >
                订阅
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm"
            >
              © 2024 探客科技. 保留所有权利. | 粤ICP备12345678号
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;