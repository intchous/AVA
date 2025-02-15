---
title: g2plotRender
order: 4
---

`markdown:docs/common/style.md`

<div class='doc-md'>

通过 G2Plot 绘制，返回 G2Plot 图表实例

```sign
g2plotRender(container: string | HTMLElement, data: any, libConfigs: G2PlotConfig)
```

### 参数

* **container** * 图表所需要被放置的 DOM 容器。
  * _必要参数_
  * `参数类型`: HTMLElement

* **data** * 包含对象型数据行的数组。
  * _必要参数_
  * `参数类型`: Record<string, any>[]

* **container** * G2Plot 配置项。
  * _必要参数_
  * `参数类型`: G2PlotConfig

### 返回值

*`G2PlotInstance`*

G2Plot 绘图实例。

</div>
