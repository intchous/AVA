import { View, parse } from 'vega';
import { compile } from 'vega-lite';

export function drawWithVegaLite(spec: any, data: Record<string, unknown>, dom: HTMLDivElement) {
  new View(parse(compile({ ...spec, data: { values: data } }).spec)).initialize(dom).runAsync();
}
