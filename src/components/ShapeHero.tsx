"use client";

import React from "react";
import { motion } from "framer-motion";

// 单个漂浮几何体（优化版）
function FloatingShape({
  width, height, left, top, rotate, delay, gradient
}: {
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  delay: number;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      style={{
        position: 'absolute',
        left,
        top,
        width,
        height,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height, position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 9999,
            background: gradient,
            filter: 'blur(0.7px)', // 更细致的模糊
            border: '1px solid rgba(255,255,255,0.08)', // 更淡的边框
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', // 更自然的阴影
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 9999,
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 70%)', // 更淡的高光
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric() {
  // 优化后的漂浮几何体参数
  const shapes = [
    {
      width: 600, height: 140, left: -80, top: 120, rotate: 12, delay: 0.3,
      gradient: 'linear-gradient(90deg, rgba(99,102,241,0.12), transparent)'
    },
    {
      width: 500, height: 120, left: 700, top: 400, rotate: -15, delay: 0.5,
      gradient: 'linear-gradient(90deg, rgba(244,63,94,0.12), transparent)'
    },
    {
      width: 300, height: 80, left: 120, top: 600, rotate: -8, delay: 0.4,
      gradient: 'linear-gradient(90deg, rgba(139,92,246,0.12), transparent)'
    },
    {
      width: 200, height: 60, left: 900, top: 100, rotate: 20, delay: 0.6,
      gradient: 'linear-gradient(90deg, rgba(245,158,11,0.12), transparent)'
    },
    {
      width: 150, height: 40, left: 400, top: 60, rotate: -25, delay: 0.7,
      gradient: 'linear-gradient(90deg, rgba(6,182,212,0.12), transparent)'
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 漂浮几何体 */}
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}

      {/* 内容区 */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
        }}
      >
        {/* 左侧内容区域 */}
        <div style={{flex: 1, maxWidth: '500px'}}>
          <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%'}}></div>
            <span style={{fontSize: '14px', color: '#6b7280', fontWeight: 500}}>TANKE AI</span>
          </div>
          <h1 style={{
            fontSize: '2.6rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '32px',
            marginTop: '0',
            textAlign: 'left',
            letterSpacing: '2px',
          }}>用 AI 提升营销效率</h1>
          <p style={{fontSize: '18px', color: '#6b7280', lineHeight: '1.6', marginBottom: '32px'}}>
            让 AI 自动化为人工打造销售的产品
          </p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <div style={{padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '14px', color: '#374151'}}>通用风</div>
            <div style={{padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '14px', color: '#374151'}}>文采风</div>
            <div style={{padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '14px', color: '#374151'}}>种草风</div>
            <div style={{padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '14px', color: '#374151'}}>情感风</div>
            <div style={{padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '14px', color: '#374151'}}>科普风</div>
          </div>
          <div style={{marginTop: '32px', textAlign: 'center'}}>
            <h3 style={{fontSize: '24px', fontWeight: 600, color: '#1f2937', marginBottom: '8px'}}>万亿级商品知识</h3>
            <p style={{fontSize: '16px', color: '#6b7280', marginBottom: '24px'}}>最专业商品讲解</p>
            <h3 style={{fontSize: '24px', fontWeight: 600, color: '#1f2937', marginBottom: '8px'}}>沉浸式描绘购买场景</h3>
            <p style={{fontSize: '16px', color: '#6b7280'}}>直击痛点巧妙促单</p>
          </div>
        </div>
        
        {/* 右侧手机展示区域 */}
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', position: 'relative'}}>
          {/* 第一个手机 - 神草风 */}
          <div style={{position: 'relative', transform: 'rotate(-5deg)'}}>
            <div style={{width: '200px', height: '400px', backgroundColor: '#1f2937', borderRadius: '25px', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
              <div style={{backgroundColor: '#3b82f6', borderRadius: '15px', padding: '16px', marginBottom: '16px', textAlign: 'center'}}>
                <h4 style={{color: 'white', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0'}}>神草风</h4>
                <p style={{color: 'white', fontSize: '12px', margin: 0}}>营光</p>
              </div>
              <div style={{backgroundColor: '#f8fafc', borderRadius: '12px', padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{fontSize: '24px'}}>👤</span>
                  </div>
                  <p style={{fontSize: '10px', color: '#6b7280', lineHeight: '1.4', margin: 0}}>一键生成优质内容文案</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第二个手机 - 文学风 */}
          <div style={{position: 'relative', zIndex: 2}}>
            <div style={{width: '200px', height: '400px', backgroundColor: '#1f2937', borderRadius: '25px', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: '0 15px 40px rgba(0,0,0,0.3)'}}>
              <div style={{backgroundColor: '#ec4899', borderRadius: '15px', padding: '16px', marginBottom: '16px', textAlign: 'center'}}>
                <h4 style={{color: 'white', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0'}}>文学风</h4>
                <p style={{color: 'white', fontSize: '12px', margin: 0}}>文郭儿</p>
              </div>
              <div style={{backgroundColor: '#f8fafc', borderRadius: '12px', padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{fontSize: '24px'}}>👩</span>
                  </div>
                  <p style={{fontSize: '10px', color: '#6b7280', lineHeight: '1.4', margin: 0}}>智能生成文学风格内容</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 第三个手机 - 科普风 */}
          <div style={{position: 'relative', transform: 'rotate(5deg)'}}>
            <div style={{width: '200px', height: '400px', backgroundColor: '#1f2937', borderRadius: '25px', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
              <div style={{backgroundColor: '#10b981', borderRadius: '15px', padding: '16px', marginBottom: '16px', textAlign: 'center'}}>
                <h4 style={{color: 'white', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0'}}>科普风</h4>
                <p style={{color: 'white', fontSize: '12px', margin: 0}}>科技达人</p>
              </div>
              <div style={{backgroundColor: '#f8fafc', borderRadius: '12px', padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{fontSize: '24px'}}>🔬</span>
                  </div>
                  <p style={{fontSize: '10px', color: '#6b7280', lineHeight: '1.4', margin: 0}}>专业科普内容生成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}