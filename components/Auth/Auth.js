// @flow
import { Button, message, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import AdminPanel from './../AdminPanel/AdminPanel';

const Auth = ({onsetPermision}) => {

    const logIn = ()=> {
        message.success("logged in", 4);
        onsetPermision(true);
    }
    return (
        <div id="auth-form">
            <Form labelCol={{span: 10}} wrapperCol={{span: 3}}>
                <Form.Item label="Username" name="username" rules={[{required: true, message: 'Input username !'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input your password!'}]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 10}}>
                    <Button type="primary" onClick={logIn}>Log in</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Auth;