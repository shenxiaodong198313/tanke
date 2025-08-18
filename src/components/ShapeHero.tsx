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
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)', // 深色背景
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
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
          textAlign: 'center',
        }}
      >
        {/* 标题区域 */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          marginBottom: '20px',
          marginTop: '0',
          color: 'white',
          letterSpacing: '2px',
          lineHeight: '1.2'
        }}>
          基于AI的全自动营销手机
        </h1>
        
        <p style={{
          fontSize: '1.2rem', 
          color: 'rgba(255,255,255,0.8)', 
          marginBottom: '60px',
          lineHeight: '1.6'
        }}>
          全面开启高感影像时代
        </p>

        {/* 手机展示区域 */}
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '40px',
          marginTop: '40px'
        }}>
          {/* 第一个手机 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: '180px',
              height: '360px',
              backgroundColor: '#1f1f1f',
              borderRadius: '25px',
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              position: 'relative',
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '20px',
              width: '40%',
              height: '4px',
              backgroundColor: '#333',
              borderRadius: '2px'
            }} />
            <div style={{
              color: '#666',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              手机占位图
            </div>
          </motion.div>

          {/* 第二个手机（中间，稍大） */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              width: '200px',
              height: '400px',
              backgroundColor: '#1f1f1f',
              borderRadius: '28px',
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              position: 'relative',
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
              zIndex: 2
            }}
          >
            <div style={{
              position: 'absolute',
              top: '22px',
              width: '40%',
              height: '4px',
              backgroundColor: '#333',
              borderRadius: '2px'
            }} />
            <div style={{
              color: '#666',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              手机占位图
            </div>
          </motion.div>

          {/* 第三个手机 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              width: '180px',
              height: '360px',
              backgroundColor: '#1f1f1f',
              borderRadius: '25px',
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              position: 'relative',
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '20px',
              width: '40%',
              height: '4px',
              backgroundColor: '#333',
              borderRadius: '2px'
            }} />
            <div style={{
              color: '#666',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              手机占位图
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}