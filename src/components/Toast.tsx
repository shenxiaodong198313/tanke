import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ isOpen, onClose, message, type }) => {
  useEffect(() => {
    if (isOpen) {
      // 3秒后自动关闭
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const toastStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px 32px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    zIndex: 9999,
    minWidth: '300px',
    maxWidth: '500px',
    border: `2px solid ${type === 'success' ? '#10B981' : '#EF4444'}`,
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: type === 'success' ? '#10B981' : '#EF4444'
  };

  const messageStyle: React.CSSProperties = {
    flex: 1,
    fontSize: '16px',
    color: '#374151',
    fontWeight: '500'
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    color: '#9CA3AF',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 9998
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div style={overlayStyle} onClick={onClose} />
          <motion.div
            style={toastStyle}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div style={iconStyle}>
              {type === 'success' ? '✓' : '✕'}
            </div>
            <div style={messageStyle}>
              {message}
            </div>
            <button
              style={closeButtonStyle}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Toast;