import React, { Component } from 'react';
import { Tag, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';

export default function TagList () {
  return (
    <>
    <Button icon={<PlusOutlined />} size={'small'} className="addTag">
        添加标签
    </Button>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
  </>
  )
}
