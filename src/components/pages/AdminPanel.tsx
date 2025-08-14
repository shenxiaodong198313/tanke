import React, { useState, useEffect } from 'react';
import SEOHead from '../SEOHead';
import { partnerApplicationApi, PartnerApplication } from '../../services/api';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminPanel: React.FC = () => {
  const { t } = useLanguage();
  const [applications, setApplications] = useState<PartnerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<PartnerApplication | null>(null);
  const [updateStatus, setUpdateStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [notes, setNotes] = useState('');

  // 获取所有申请记录
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await partnerApplicationApi.getAll();
      if (response.success) {
        setApplications(response.data || []);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(t('admin.error'));
      console.error('获取申请记录失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 更新申请状态
  const handleUpdateStatus = async () => {
    if (!selectedApplication) return;

    try {
      const response = await partnerApplicationApi.updateStatus(selectedApplication.id, {
        status: updateStatus,
        notes: notes.trim() || undefined,
      });

      if (response.success) {
        // 更新本地数据
        setApplications(prev => 
          prev.map(app => 
            app.id === selectedApplication.id 
              ? { ...app, status: updateStatus, notes: notes.trim() || app.notes, updatedAt: new Date().toISOString() }
              : app
          )
        );
        setSelectedApplication(null);
        setNotes('');
        alert('状态更新成功');
      } else {
        alert(response.message || '更新失败');
      }
    } catch (error) {
      alert('更新失败，请重试');
      console.error('更新状态失败:', error);
    }
  };

  // 删除申请记录
  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这条申请记录吗？')) return;

    try {
      const response = await partnerApplicationApi.delete(id);
      if (response.success) {
        setApplications(prev => prev.filter(app => app.id !== id));
        alert('删除成功');
      } else {
        alert(response.message || '删除失败');
      }
    } catch (error) {
      alert('删除失败，请重试');
      console.error('删除申请记录失败:', error);
    }
  };

  // 格式化日期
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN');
  };

  // 获取状态显示文本和样式
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { text: t('admin.status.pending'), color: '#f39c12', bgColor: '#fef3cd' };
      case 'approved':
        return { text: t('admin.status.approved'), color: '#27ae60', bgColor: '#d4edda' };
      case 'rejected':
        return { text: t('admin.status.rejected'), color: '#e74c3c', bgColor: '#f8d7da' };
      default:
        return { text: '未知', color: '#6c757d', bgColor: '#f8f9fa' };
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    paddingTop: '64px',
    background: 'linear-gradient(135deg, #f4f8ff 0%, #e8f2ff 50%, #dbeafe 100%)',
    padding: '32px 24px',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#222',
    marginBottom: '32px',
    textAlign: 'center',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '24px',
  };

  const thStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '12px 16px',
    textAlign: 'left',
    borderBottom: '2px solid #dee2e6',
    fontWeight: 600,
    color: '#495057',
  };

  const tdStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderBottom: '1px solid #dee2e6',
    verticalAlign: 'top',
  };

  const statusBadgeStyle = (status: string) => {
    const info = getStatusInfo(status);
    return {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 600,
      color: info.color,
      backgroundColor: info.bgColor,
      display: 'inline-block',
    };
  };

  const buttonStyle: React.CSSProperties = {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    marginRight: '8px',
    transition: 'background-color 0.2s',
  };

  const modalOverlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  };

  const modalContent: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '32px',
    width: '500px',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflow: 'auto',
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <div>{t('admin.loading')}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="管理员面板 - 探客AI手机"
        description="合作伙伴申请管理"
        keywords="管理员, 合作伙伴, 申请管理"
      />
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{t('admin.title')}</h1>
          
          {error && (
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              borderRadius: '6px',
              marginBottom: '24px',
            }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '24px' }}>
            <button 
              onClick={fetchApplications}
              style={{
                ...buttonStyle,
                backgroundColor: '#007bff',
                color: 'white',
              }}
            >
              {t('admin.refresh')}
            </button>
            <span style={{ color: '#6c757d', fontSize: '14px' }}>
              {t('admin.total').replace('{count}', applications.length.toString())}
            </span>
          </div>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>{t('admin.table.time')}</th>
                <th style={thStyle}>{t('admin.table.name')}</th>
                <th style={thStyle}>{t('admin.table.company')}</th>
                <th style={thStyle}>{t('admin.table.position')}</th>
                <th style={thStyle}>{t('admin.table.phone')}</th>
                <th style={thStyle}>{t('admin.table.status')}</th>
                <th style={thStyle}>{t('admin.table.action')}</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td style={tdStyle}>{formatDate(app.createdAt)}</td>
                  <td style={tdStyle}>{app.name}</td>
                  <td style={tdStyle}>{app.company}</td>
                  <td style={tdStyle}>{app.position}</td>
                  <td style={tdStyle}>{app.phone}</td>
                  <td style={tdStyle}>
                    <span style={statusBadgeStyle(app.status)}>
                      {getStatusInfo(app.status).text}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => setSelectedApplication(app)}
                      style={{
                        ...buttonStyle,
                        backgroundColor: '#17a2b8',
                        color: 'white',
                      }}
                    >
                      {t('admin.action.view')}
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      style={{
                        ...buttonStyle,
                        backgroundColor: '#dc3545',
                        color: 'white',
                      }}
                    >
                      {t('admin.action.delete')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {applications.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', color: '#6c757d' }}>
              {t('admin.empty')}
            </div>
          )}
        </div>

        {/* 编辑模态窗口 */}
        {selectedApplication && (
          <div style={modalOverlay} onClick={() => setSelectedApplication(null)}>
            <div style={modalContent} onClick={(e) => e.stopPropagation()}>
              <h2 style={{ marginTop: 0, marginBottom: '24px' }}>{t('admin.modal.title')}</h2>
              
              <div style={{ marginBottom: '16px' }}>
                <strong>申请人：</strong>{selectedApplication.name}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <strong>公司：</strong>{selectedApplication.company}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <strong>职位：</strong>{selectedApplication.position}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <strong>手机号：</strong>{selectedApplication.phone}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <strong>申请时间：</strong>{formatDate(selectedApplication.createdAt)}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  状态：
                </label>
                <select
                  value={updateStatus}
                  onChange={(e) => setUpdateStatus(e.target.value as any)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                >
                  <option value="pending">待处理</option>
                  <option value="approved">已通过</option>
                  <option value="rejected">已拒绝</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  备注：
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="添加备注信息..."
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    minHeight: '80px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedApplication(null)}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  {t('admin.modal.cancel')}
                </button>
                <button
                  onClick={handleUpdateStatus}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  {t('admin.modal.save')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPanel;
