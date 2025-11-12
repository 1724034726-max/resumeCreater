import React, { useCallback } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import styles from './Login.module.less';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_HOME_PATH } from '@/constants/routes';
import apis from '@/api';
type LoginFormType = {
    account?: string;
    password?: string;
};
const LoginView: React.FC<FormProps> = () => {
    const navigate = useNavigate();
    const onFinish = useCallback(async (values: LoginFormType) => {
        console.log('Success:', values);
        const [res, err] = await apis.login({
            data: {
                account: values.account,
                password: values.password,
            },
        });
        if (err) {
            message.error((err as any).message);
            return;
        }
        if (res) {
            localStorage.setItem('resume_token', (res as any).token);
            message.success('登录成功,即将跳转至首页...');
            setTimeout(navigate, 700, DEFAULT_HOME_PATH);
        }
    }, []);
    return (
        <div className={styles.loginForm}>
            <Form
                name="login"
                labelCol={{ span: 8 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 className={styles.formTitle}>欢迎登录</h2>
                <Form.Item<LoginFormType>
                    name="account"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder="请输入账号" />
                </Form.Item>
                <Form.Item<LoginFormType>
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div >

    );
}
export default LoginView;