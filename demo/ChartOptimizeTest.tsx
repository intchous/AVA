import React, { useRef, useEffect } from 'react';
import { dataInJSON, JSONFrame, assignDeep } from './utils';
import { autoChart, dataToAdvices, specRender } from '../packages/chart-advisor/src';

export function ChartOptimizeTest() {
  const datasample = [
    { yearmonth: '2019-03', gdp: 0.385, city: 'Paris' },
    { yearmonth: '2019-04', gdp: 0.888, city: 'Paris' },
    { yearmonth: '2019-05', gdp: 0.349, city: 'Paris' },
    { yearmonth: '2019-06', gdp: 0.468, city: 'Paris' },
    { yearmonth: '2019-07', gdp: 0.477, city: 'Paris' },
    { yearmonth: '2019-03', gdp: 0.291, city: 'London' },
    { yearmonth: '2019-04', gdp: 0.484, city: 'London' },
    { yearmonth: '2019-05', gdp: 0.293, city: 'London' },
    { yearmonth: '2019-06', gdp: 0.147, city: 'London' },
    { yearmonth: '2019-07', gdp: 0.618, city: 'London' },
  ];

  const chartdom1 = useRef(null);
  const chartdom2 = useRef(null);

  const advice1 = dataToAdvices(datasample)[0];

  const advice2 = assignDeep({}, advice1, { spec: { mark: { type: 'bar' } } });
  console.log('done');

  useEffect(() => {
    // @ts-ignore
    specRender('origin-chart', datasample, advice1);

    console.log('need');
    // @ts-ignore
    specRender('optimized-chart', datasample, advice2);
  });

  return (
    <>
      <h1>Line</h1>
      {/* 若 y 轴为百分比，默认展示 0-100% */}
      <h3>y axis shows 0-100% if it is percentage</h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '600px' }}>
        {dataInJSON(datasample)}
        <div style={{ width: '30%' }}>
          <h4>origin</h4>
          <div style={{ height: '50%' }}>{JSONFrame(advice1.spec)}</div>
          <div style={{ height: '50%' }} id="origin-chart"></div>
        </div>
        <div style={{ width: '30%' }}>
          <h4>optimized</h4>
          <div style={{ height: '50%' }}>{JSONFrame(advice2.spec)}</div>
          <div style={{ height: '50%' }} id="optimized-chart"></div>
        </div>
      </div>
    </>
  );
}
