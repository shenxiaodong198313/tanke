import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone, 
  Globe,
  MessageSquare,
  TrendingUp,
  Database
} from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "智能客服系统",
      description: "24小时AI智能客服，自动回复客户问题，提升服务效率",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "数据分析平台", 
      description: "实时数据分析和可视化报表，让业务决策更精准",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "客户关系管理",
      description: "全面的CRM系统，管理客户生命周期和销售流程",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "移动办公",
      description: "随时随地移动办公，支持多平台同步和协作",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "企业级安全",
      description: "银行级数据加密，保障企业数据安全和隐私",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "全球化部署",
      description: "支持多语言和多地区部署，助力企业全球化发展",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "自动化流程",
      description: "智能工作流引擎，自动化业务流程，提升工作效率",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "业务增长",
      description: "数据驱动的增长策略，帮助企业实现可持续发展",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "云端存储",
      description: "安全可靠的云端存储，支持海量数据存储和备份",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            为什么选择
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              探客
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            我们提供全方位的数字化解决方案，帮助企业实现数字化转型和业务增长
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                className="mt-6 flex items-center text-blue-600 font-medium"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm">了解更多</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 