import React, { useEffect } from 'react';
import { dataInJSON, JSONFrame, assignDeep } from './utils';
import { dataToAdvices, specToLibConfig, g2plotRender, Specification } from '../packages/chart-advisor/src';

type Case = {
  spec: Specification;
  // vegaDOM: string;
  config: any;
  g2DOM: string;
};

type TestProps = {
  title: string;
  data: any[];
  modData?: any[];
  origin: Case;
  optimized: Case;
};

const ChartOptimizeTestView = ({ title, data, modData, origin, optimized }: TestProps) => {
  useEffect(() => {
    // @ts-ignore
    g2plotRender(origin.g2DOM, data, origin.config);
    // specRender('origin-chart', datasample, advice1);

    // @ts-ignore
    g2plotRender(optimized.g2DOM, modData ? modData : data, optimized.config);
    // specRender('optimized-chart', datasample, advice2);
  });

  return (
    <>
      <h3>{title}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '600px' }}>
        {dataInJSON(data)}
        <div style={{ width: '30%' }}>
          <h4>origin</h4>
          <div style={{ height: '50%' }}>{JSONFrame(origin.spec)}</div>
          <div style={{ height: '50%' }} id={origin.g2DOM}></div>
        </div>
        <div style={{ width: '30%' }}>
          <h4>optimized</h4>
          <div style={{ height: '50%' }}>{JSONFrame(optimized.spec)}</div>
          <div style={{ height: '50%' }} id={optimized.g2DOM}></div>
        </div>
      </div>
    </>
  );
};

export function ChartOptimizeTest() {
  const datasample1 = [
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
  ////
  const datasample2 = [
    { yearmonth: '2019-03', gdp: 323, city: 'Paris' },
    { yearmonth: '2019-04', gdp: 123, city: 'Paris' },
    // { yearmonth: '2019-05', gdp: null, city: 'Paris' },
    { yearmonth: '2019-06', gdp: 122, city: 'Paris' },
    { yearmonth: '2019-07', gdp: 235, city: 'Paris' },
  ];

  const datasample2b = [
    { yearmonth: '2019-03', gdp: 323, city: 'Paris' },
    { yearmonth: '2019-04', gdp: 123, city: 'Paris' },
    { yearmonth: '2019-05', gdp: null, city: 'Paris' },
    { yearmonth: '2019-06', gdp: 122, city: 'Paris' },
    { yearmonth: '2019-07', gdp: 235, city: 'Paris' },
  ];

  const advice1 = dataToAdvices(datasample1)[0];
  const advice2 = assignDeep({}, advice1, { spec: { encoding: { y: { scale: { domain: [0, 1] } } } } });

  const libConfig1 = specToLibConfig(advice1);
  const libConfig2 = assignDeep({}, specToLibConfig(advice2), {
    configs: { meta: { gdp: { max: 1, formatter: (n: number) => `${n * 100}%` } } },
  });

  ////

  const advice3 = dataToAdvices(datasample2)[0];
  const advice4 = assignDeep({}, advice3, {});

  const libConfig3 = specToLibConfig(advice3);
  const libConfig4 = assignDeep({}, specToLibConfig(advice4), {});

  return (
    <>
      <h1>Line</h1>

      <ChartOptimizeTestView
        title={'y axis shows 0-100% if it is percentage'}
        data={datasample1}
        origin={{ spec: advice1.spec as Specification, config: libConfig1, g2DOM: 'origin-chart1' }}
        optimized={{ spec: advice2.spec as Specification, config: libConfig2, g2DOM: 'optimized-chart1' }}
      />

      <br />
      <br />
      <br />
      <br />

      <ChartOptimizeTestView
        title={'diff between series greater than 10000 times'}
        data={datasample2}
        modData={datasample2b}
        origin={{ spec: advice3.spec as Specification, config: libConfig3, g2DOM: 'origin-chart2' }}
        optimized={{ spec: advice4.spec as Specification, config: libConfig4, g2DOM: 'optimized-chart2' }}
      />
    </>
  );
}

export function ChartOptimizeTestX() {
  const datasample1 = [
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
  ////
  const datasample2 = [
    { yearmonth: '2019-03', gdp: 323, city: 'Paris' },
    { yearmonth: '2019-04', gdp: 123, city: 'Paris' },
    // { yearmonth: '2019-05', gdp: null, city: 'Paris' },
    { yearmonth: '2019-06', gdp: 122, city: 'Paris' },
    { yearmonth: '2019-07', gdp: 235, city: 'Paris' },
  ];

  const datasample2b = [
    { yearmonth: '2019-03', gdp: 323, city: 'Paris' },
    { yearmonth: '2019-04', gdp: 123, city: 'Paris' },
    { yearmonth: '2019-05', gdp: null, city: 'Paris' },
    { yearmonth: '2019-06', gdp: 122, city: 'Paris' },
    { yearmonth: '2019-07', gdp: 235, city: 'Paris' },
  ];

  const advice1 = dataToAdvices(datasample1)[0];
  const advice2 = assignDeep({}, advice1, { spec: { encoding: { y: { scale: { domain: [0, 1] } } } } });

  const libConfig1 = specToLibConfig(advice1);
  const libConfig2 = assignDeep({}, specToLibConfig(advice2), {
    configs: { meta: { gdp: { max: 1, formatter: (n: number) => `${n * 100}%` } } },
  });

  ////

  const advice3 = dataToAdvices(datasample2)[0];
  const advice4 = assignDeep({}, advice3, {});

  const libConfig3 = specToLibConfig(advice3);
  const libConfig4 = assignDeep({}, specToLibConfig(advice4), {});

  useEffect(() => {
    // @ts-ignore
    g2plotRender('origin-chart', datasample1, libConfig1);
    // specRender('origin-chart', datasample, advice1);

    // @ts-ignore
    g2plotRender('optimized-chart', datasample1, libConfig2);
    // specRender('optimized-chart', datasample, advice2);
    ////
    // @ts-ignore
    g2plotRender('origin-chart2', datasample2, libConfig3);
    // specRender('origin-chart', datasample, advice1);

    // @ts-ignore
    g2plotRender('optimized-chart2', datasample2b, libConfig4);
    // specRender('optimized-chart', datasample, advice2);
  });

  return (
    <>
      <h1>Line</h1>

      {/* 若 y 轴为百分比，默认展示 0-100% */}
      <h3>y axis shows 0-100% if it is percentage</h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '600px' }}>
        {dataInJSON(datasample1)}
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

      {/* 两条线至于范围数量级相差万倍 */}
      <h3>diff between series greater than 10000 times </h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '600px' }}>
        {dataInJSON(datasample2)}
        <div style={{ width: '30%' }}>
          <h4>origin</h4>
          <div style={{ height: '50%' }}>{JSONFrame(advice3.spec)}</div>
          <div style={{ height: '50%' }} id="origin-chart2"></div>
        </div>
        <div style={{ width: '30%' }}>
          <h4>optimized</h4>
          <div style={{ height: '50%' }}>{JSONFrame(advice4.spec)}</div>
          <div style={{ height: '50%' }} id="optimized-chart2"></div>
        </div>
      </div>
    </>
  );
}
