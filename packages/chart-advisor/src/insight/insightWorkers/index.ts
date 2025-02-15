import { RowData } from '@antv/dw-transform';
import { Insight } from '..';

import { correlationIW } from './correlation';
import { monotonicityIW } from './monotonicity';
import { majorFactorsIW } from './major';
import { overallTrendsIW } from './overallTrends';
import { outlierIW } from './outlier';

import { trendIW as viTrendIW } from './vi-trend';

const tuple = <T extends string[]>(...args: T) => args;

/**
 * @public
 */
export const INSIGHT_TYPES = tuple(
  'Correlation',
  'Monotonicity',
  'MajorFactors',
  'OverallTrends',
  'CategoryOutliers',
  // todo...
  'TimeSeriesOutliers',
  'Seasonality',
  'ChangePoints'
);

/**
 * @public
 */
export type InsightType = typeof INSIGHT_TYPES[number];

/**
 * @public
 */
export type Worker = (data: RowData[]) => Insight[] | Promise<Insight[]>;

/**
 * @public
 */
export const insightWorkers: Partial<Record<InsightType, Worker>> = {
  Correlation: correlationIW,
  Monotonicity: monotonicityIW,
  MajorFactors: majorFactorsIW,
  OverallTrends: overallTrendsIW,
  CategoryOutliers: outlierIW,
  // OverallTrends: viTrendIW,
};

export { correlationIW, viTrendIW, monotonicityIW, overallTrendsIW, outlierIW };
