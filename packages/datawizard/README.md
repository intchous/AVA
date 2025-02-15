<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [简体中文](./zh-CN/README.zh-CN.md)

<h1 align="center">
  <p>DataWizard</p>
  <span style="font-size: 24px;">AVA/DataWizard</span>
</h1>

<div align="center">

A JavaScript library for data processing and dataset analysis.

</div>

DataWizard is a js/ts library for data processing. In the AVA framework, it is used to 'understand' the input dataset. However, it can also be used independently to develop some statistical or data mocking functions.

## Features

### Dataset Analysis

DataWizard can help you extract information of fields from a dataset sample by its `dw-analyzer` module. The information includes the field's **characteristics** (field name, data type, statistics, etc.) and **properties** (continuity, discreteness, etc.), as well as **field-to-field relationships** (correlation, periodicity, etc.).

In short, DataWizard can help you understand a dataset. This is the premise of data analysis and Automatic chart recommendation.

### Data Mocking

The `dw-random` module of DataWizard provides you comprehensive data mocking options. You can use it to quickly develop some data generating or auto-filling functions. For example, the auto-fill function in the desgin engineering plugin <img src="https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg" width="18"> [Kitchen](https://kitchen.alipay.com/) 

<div align="center">
<img src="https://gw.alipayobjects.com/zos/antfincdn/r4gEasYXD%24/kitchendatamocken.png" width="600" />
</div>

## Installation

```bash
$ npm install @antv/dw-analyzer
$ npm install @antv/dw-random
```

## Usage

### dw-analyzer

```js
import { type }  from '@antv/dw-analyzer';

const a = [1, 2, 3];

const info = type(a);

// the info of the dataset:
// {
//   "count": 3,
//   "distinct": 3,
//   "type": "integer",
//   "recommendation": "integer",
//   "missing": 0,
//   "samples": [1, 2, 3],
//   "valueMap": {"1": 1, "2": 1, "3": 1},
//   "minimum": 1,
//   "maximum": 3,
//   "mean": 2,
//   "percentile5": 1,
//   "percentile25": 1,
//   "percentile50": 2,
//   "percentile75": 3,
//   "percentile95": 3,
//   "sum": 6,
//   "variance": 0.6666666666666666,
//   "stdev": 0.816496580927726,
//   "zeros": 0
// }
```

### dw-random

```js
import random from '@antv/dw-random';

const name = random.name();

// some random name such as:
// Julian Brady, Louise Gonzales, Polly Maxwell...
```

## Documentation

* dw-anayzer
  * [Quick Start](./analyzer/README.md)
  * [API Reference](../../docs/api/dw-analyzer.md)
* dw-random
  * Quick Start
  * [API Reference](../../docs/api/dw-random.md)

## License

MIT
