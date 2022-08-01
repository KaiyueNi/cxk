import React from 'react';
import { Layout, Menu, Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Welcome from './components/Welcome/index.jsx';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const menuList = [
  {
    key: 'all',
    label: '全部'
  },
  {
    key: 'movie',
    label: '电影'
  },
  {
    key: 'tv',
    label: '剧集'
  },
  {
    key: 'person',
    label: '个人'
  }
];
const onSearch = (value) => console.log(value);

export default function app () {
  return  (
    <>
      <Layout>
        <Header className='header'>
          <div className="logo">
            <span className='name'>Movie DB</span>
          </div>
          <Menu
            className='middle'
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['all']}
            items={menuList}
          />
          <div className='search'>
            <Search placeholder="输入电影名称" onSearch={onSearch} style={{ width: 300 }}  enterButton/>
          </div>
          <div className='login'>
            <Avatar icon={<UserOutlined />} />
            <span className='name'>cxk</span>
          </div>
        </Header>
        <Content className="site-layout" style={{ padding: '0px 40px', marginTop: 64 }}>
          <Welcome/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>CXK ©2022</Footer>
      </Layout>
    </>
  )
}
