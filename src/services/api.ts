// API基础配置（兼容 CRA 与 Vite 环境变量）
const viteApiUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_API_URL) || '';
// 在浏览器环境中 process 可能不存在
const craApiUrl = (typeof process !== 'undefined' && (process as any).env && (process as any).env.REACT_APP_API_URL) || '';
const API_BASE_URL = viteApiUrl || craApiUrl || 'http://localhost:3001/api';

// API响应类型定义
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
  error?: string;
}

// 合作伙伴申请数据类型
export interface PartnerApplication {
  id: string;
  name: string;
  company: string;
  position: string;
  phone: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

// 提交申请的数据类型
export interface SubmitApplicationData {
  name: string;
  company: string;
  position: string;
  phone: string;
}

// 更新申请状态的数据类型
export interface UpdateApplicationData {
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

// 通用API请求函数
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API请求失败:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '网络请求失败',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// 合作伙伴申请API服务
export const partnerApplicationApi = {
  // 获取所有申请记录
  getAll: async (): Promise<ApiResponse<PartnerApplication[]>> => {
    return apiRequest<PartnerApplication[]>('/partner-applications');
  },

  // 提交新申请
  submit: async (data: SubmitApplicationData): Promise<ApiResponse<PartnerApplication>> => {
    return apiRequest<PartnerApplication>('/partner-applications', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // 更新申请状态
  updateStatus: async (
    id: string,
    data: UpdateApplicationData
  ): Promise<ApiResponse<PartnerApplication>> => {
    return apiRequest<PartnerApplication>(`/partner-applications/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // 删除申请记录
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiRequest<void>(`/partner-applications/${id}`, {
      method: 'DELETE',
    });
  },
};

// 健康检查API
export const healthApi = {
  check: async (): Promise<ApiResponse<{ timestamp: string }>> => {
    return apiRequest<{ timestamp: string }>('/health');
  },
};

// 表单验证工具
export const formValidation = {
  // 验证手机号格式
  validatePhone: (phone: string): boolean => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  },

  // 验证必填字段
  validateRequired: (fields: Record<string, string>): string[] => {
    const errors: string[] = [];
    Object.entries(fields).forEach(([field, value]) => {
      if (!value || value.trim() === '') {
        errors.push(`${field} 是必填字段`);
      }
    });
    return errors;
  },

  // 验证合作伙伴申请表单
  validatePartnerApplication: (data: SubmitApplicationData): string[] => {
    const errors: string[] = [];

    // 验证必填字段
    if (!data.name || data.name.trim() === '') {
      errors.push('姓名是必填字段');
    }
    if (!data.company || data.company.trim() === '') {
      errors.push('公司名称是必填字段');
    }
    if (!data.position || data.position.trim() === '') {
      errors.push('职位是必填字段');
    }
    if (!data.phone || data.phone.trim() === '') {
      errors.push('手机号是必填字段');
    }

    // 验证手机号格式
    if (data.phone && !formValidation.validatePhone(data.phone)) {
      errors.push('请输入正确的手机号码');
    }

    return errors;
  },
};

// 避免 import/no-anonymous-default-export 警告：使用具名导出
export const api = {
  partnerApplicationApi,
  healthApi,
  formValidation,
};
