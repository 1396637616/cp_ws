// src/pages/login/index.tsx
import React from 'react';
import ModelForm from '@/components/pages/login/ModelForm';
import useLoginForm from '@/hooks/useLoginForm';
export default function Login() {
  const { onSubmit } = useLoginForm();
  // 处理表单提交
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    // 简单的验证
    if (!values.username || !values.password) {
      throw new Error('用户名和密码不能为空');
    }

    // 发送登录请求到后端
    try {
      const response = await onSubmit(values);
      if (response.ok) {
        const data = await response.json();
        console.log('登录成功', data);
        // 处理登录成功后的逻辑，比如跳转到主页
      } else {
        console.error('登录失败', response.statusText);
        throw new Error('登录失败，请检查用户名和密码');
      }
    } catch (error) {
      console.error('请求错误', error);
      throw new Error('请求错误，请稍后再试');
    }
  };

  return <ModelForm onSubmit={handleSubmit} />;
}
