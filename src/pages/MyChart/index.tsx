import { getAllCharts } from '@/services/ant-design-pro/chart';
import { useEffect } from 'react';

export default function MyChart() {
  useEffect(() => {
    getAllCharts({ chartListRequest: {} }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>MyChart</div>;
}
