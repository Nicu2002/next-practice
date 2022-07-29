import {useState, useRef} from 'react';
import {useRouter} from 'next/router';
import { Button, Tabs, List, Input, message, Form, Select } from 'antd';
import {HomeOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';


const AdminPanel = () => {
    const router = useRouter();
    const initialUsers = [
        'No name',
        'No name',
        'No name',
        'No name',
        'No name'
    ]
    const [users, setUsers] = useState(initialUsers);
    const newUserField = useRef(null);

    const goHomePage = () => {
        router.push('/');
    }

    const addNewUser = () => {
        if(newUserField.current.value.length) {
            setUsers([...users, newUserField.current.value]);
            message.success("User Was Added", 2);
        }
        else {
            message.error("Fill Input", 2);
        }
    }

    return (
        <div id="admin-panel">
            <Button type="primary" size='large' icon={<HomeOutlined />} onClick={goHomePage}>Home</Button>
            <Tabs defaultActiveKey="1" tabPosition="left" className="tabs">
                <Tabs.TabPane tab="Users" key="1">
                    <List 
                        bordered
                        dataSource={users}
                        renderItem ={(item) => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Add User" key="2">
                    <input ref={newUserField} className="newUserInput" placeholder="User Name"/>
                    <Button type="primary" onClick={addNewUser}>Add User</Button>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Add Product" key="3">
                    <Form labelCol={{span: 10}} wrapperCol={{span: 3}}>
                        <Form.Item label="Product" name="product" rules={[{required: true, message: 'Input product name !'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Product type" name="productType" rules={[{required: true, message: 'Please choose product type!'}]}>
                            <Select>
                                <Select.Option value="home">Home</Select.Option>
                                <Select.Option value="garden">Garden</Select.Option>
                                <Select.Option value="auto">Auto</Select.Option>
                                <Select.Option value="soft">Soft</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 10}}>
                            <Button type="primary">Add Product</Button>
                        </Form.Item>
                    </Form>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
}

export default AdminPanel;