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
        background: '#030303',
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
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* 徽章 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 9999,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 48,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 9999, background: 'rgba(244,63,94,0.8)', marginRight: 6 }} />
          <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', letterSpacing: 1 }}>Kokonut UI</span>
        </motion.div>
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h1
            style={{
              fontWeight: 700,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              marginBottom: 24,
              lineHeight: 1.1,
              letterSpacing: -2,
              color: 'white',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(to right, #a5b4fc, #fca5a5 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              探客AI增长手机
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
} 