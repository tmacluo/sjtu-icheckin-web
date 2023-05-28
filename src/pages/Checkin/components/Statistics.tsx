import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';

const DemoBar = () => {

  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('/api/checkin/statistics')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
     setInterval(() => {
      asyncFetch();
    }, 3000);

    //asyncFetch();
  }, []);



  const config = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    dodgePadding: 4,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Bar {...config} />;
};
export default DemoBar;
