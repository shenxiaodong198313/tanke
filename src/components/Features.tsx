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
import { useModal } from '../contexts/ModalContext';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openContactModal } = useModal();

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
    <section id="solutions" style={{ background: '#030303', padding: '64px 0' }}>
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
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              letterSpacing: '-2px',
              background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            为什么选择
            <span style={{
              background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              探客
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.7,
              textShadow: '0 2px 8px rgba(0,0,0,0.18)'
            }}
          >
            我们提供全方位的数字化解决方案，帮助企业实现数字化转型和业务增长
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'rgba(30,30,40,0.92)',
                borderRadius: '1.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                border: '1.5px solid',
                borderImage: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%) 1',
                padding: '2.5rem 2rem',
                transition: 'all 0.3s cubic-bezier(0.23,0.86,0.39,0.96)',
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{
                padding: 18,
                borderRadius: 18,
                background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
                marginBottom: 24,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 24px rgba(165,180,252,0.12)',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: 16,
                letterSpacing: '-1px',
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.7,
                fontSize: '1rem',
                marginBottom: 0,
              }}>
                {feature.description}
              </p>
              <motion.div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  background: 'linear-gradient(90deg, #a5b4fc 0%, #fca5a5 100%)',
                  borderRadius: 9999,
                  padding: '0.5rem 1.5rem',
                  boxShadow: '0 4px 24px rgba(165,180,252,0.10)',
                  transition: 'all 0.3s cubic-bezier(0.23,0.86,0.39,0.96)',
                  letterSpacing: '1px',
                }}
                whileHover={{ x: 5 }}
                onClick={() => openContactModal()}
              >
                <span style={{ color: '#030303' }}>了解更多</span>
                <motion.svg
                  style={{ marginLeft: 8 }}
                  fill="none"
                  stroke="#030303"
                  width={18}
                  height={18}
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