import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { getPlans } from '../../../DB/db';

function MyPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getPlans();
    const ttl = res.length;
   
    const { completed, uncompleted } = res.reduce(
      (acc, curr) => {
        if (curr.taskPlan.status === 'completed') {
          acc.completed += 1;
        } else {
          acc.uncompleted += 1;
        }
        return acc;
      },
      { completed: 0, uncompleted: 0 }
    );

    setData([
      { title: `${(completed/ttl)*100+'%'}`, value: completed, color: '#00ff00' },
      { title: `${(uncompleted/ttl)*100+'%'}`, value: uncompleted, color: '#FF0000' }
    ]);
  };

  return (
    <div className="w-64 h-64">
     <PieChart
        data={data}
        label={({ dataEntry }) => dataEntry.value !== 0 ? `${dataEntry.title}` : ''}
        animate={true}
        animationDuration={1000}
      />
    </div>
  );
}

export default MyPieChart;
