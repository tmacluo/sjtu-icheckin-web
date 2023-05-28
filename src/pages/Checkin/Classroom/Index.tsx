import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import {Alert, Card, Col, Row, Typography, Statistic} from 'antd';
import React from 'react';
import Summary from '../components/Summary';

const Admin: React.FC = () => {
  useIntl();
  return (
    <PageContainer
      // content='to be developed'

    >
      {/*<Summary/>*/}
      <Card>
        <Alert
          message='SJTU iCheckin'
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> SJTU <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      {/*<p style={{ textAlign: 'center', marginTop: 24 }}>*/}
      {/*  Want to add more pages? Please refer to{' '}*/}
      {/*  <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">*/}
      {/*    use block*/}
      {/*  </a>*/}
      {/*  。*/}
      {/*</p>*/}
    </PageContainer>
  );
};

export default Admin;
