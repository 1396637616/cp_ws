// src/components/pages/login/ModelForm.tsx
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface ModelFormProps {
  onSubmit: (values: { username: string; password: string }) => void;
}

const ModelForm: React.FC<ModelFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      // 调用 onSubmit 处理登录逻辑
      await onSubmit(values);
      message.success('登录成功');
    } catch (error) {
      message.error('登录失败，请检查用户名和密码');
    }
  };

  return (
    <div
      style={{
        width: '600px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '2px 2px  16px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          textAlign: 'center',
          lineHeight: '80px',
        }}
      >
        参盘问数
      </div>
      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModelForm;
