import React, { Component } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Card, Rate } from 'antd';
import './index.scss';

const { Meta } = Card;
const cardlist = [
  {
    title: '神雕侠侣',
    data: 4.5,
    like: 1
  },
  {
    title: '鹿鼎记',
    data: 3.5,
    like: 0
  },
  {
    title: '大话西游',
    data: 4.0,
    like: 1
  },
  {
    title: '老友记',
    data: 4.5,
    like: 0
  },
  {
    title: '吸血鬼日记',
    data: 3.5,
    like: 1
  },
  {
    title: '红高粱',
    data: 4.0,
    like: 1
  },
  {
    title: '老友记',
    data: 4.5,
    like: 0
  },
  {
    title: '吸血鬼日记',
    data: 3.5,
    like: 1
  }
];

export default class index extends Component {
  render () {
    return (
      <div className='cardlist'>
        {cardlist.map((item, index) => (
          <Card
            key={index}
            hoverable
            className='oneCard'
            // actions={[
            //   <HeartOutlined key="like" />,
            //   <SmileOutlined  key="ellipsis"/>
            // ]}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title={item.title} />
            <Rate disabled allowHalf defaultValue={item.data} />
            <span className="ant-rate-text">{item.data}</span>
            {item.like ? <HeartOutlined />
              : <HeartFilled className='like' />}
            {/* <SmileOutlined  key="ellipsis"/> */}
          </Card>
        )
        )}
        <i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i>
      </div>
    )
  }
}
