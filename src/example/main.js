// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import ReactDOM from 'react-dom';
import document from 'global/document';

import ComplexChart from './plot/complex-chart';
import LineChart from './plot/line-chart';
import LineMarkChart from './plot/linemark-chart';
import BarChart from './plot/bar-chart';
import StackedVerticalBarChart from './plot/stacked-vertical-bar-chart';
import StackedHorizontalBarChart from './plot/stacked-horizontal-bar-chart';
import StackedHistogram from './plot/stacked-histogram';
import AreaChart from './plot/area-chart';
import AreaChartElevated from './plot/area-chart-elevated';
import ScatteplotChart from './plot/scatterplot';
import HeatmapChart from './plot/heatmap-chart';
import WidthHeightMarginChart from './plot/width-height-margin';
import CustomScales from './plot/custom-scales';
import CustomAxesOrientation from './plot/custom-axes-orientation';
import CustomAxisChart from './plot/custom-axis';
import AxisWithTurnedLabels from './plot/axis-with-turned-labels';
import GridLinesChart from './plot/grid';
import StaticHints from './plot/static-hints';
import DynamicHints from './plot/dynamic-hints';
import StaticCrosshair from './plot/static-crosshair';
import DynamicCrosshair from './plot/dynamic-crosshair';
import SyncedCharts from './plot/synced-charts';
import TimeChart from './plot/time-chart';
import SimpleTreemap from './treemap/simple-treemap';
import TreemapExample from './treemap/dynamic-treemap';
import StaticTable from './table/static-table';
import DynamicTable from './table/dynamic-table';
import SimpleRadialChart from './radial-chart/simple-radial-chart';
import DonutChartExample from './radial-chart/donut-chart';
import CustomRadiusRadialChart from './radial-chart/custom-radius-radial-chart';
import VerticalDiscreteColorLegendExample
  from './legends/vertical-discrete-color';
import HorizontalDiscreteColorLegendExample
  from './legends/horizontal-discrete-color';
import SearchableDiscreteColorLegendExample
  from './legends/searchable-discrete-color';
import ContinuousColorLegendExample from './legends/continuous-color';
import ContinuousSizeLegendExample from './legends/continuous-size';
import {isReactDOMSupported} from '../lib/utils/react-utils';

const examples = (
  <main>
    <header>
      <div className="header-contents">
        <a className="header-logo" href="#">react-vis</a>
        <nav>
          <li><a href="#plots">Plots</a></li>
          <li><a href="#radial-charts">Radial Charts</a></li>
          <li><a href="#treemaps">Treemaps</a></li>
          <li><a href="#tables">Tables</a></li>
          <li><a href="#legends">Legends</a></li>
        </nav>
      </div>
    </header>
    <article id="plots">
      <h1>Plots</h1>
      <section>
        <ComplexChart />
      </section>
      <h2>Series Types</h2>
      <section>
        <h3>Line Series</h3>
        <LineChart />
      </section>
      <section>
        <h3>LineMark Series</h3>
        <LineMarkChart />
      </section>
      <section>
        <h3>Mark Series</h3>
        <ScatteplotChart />
      </section>
      <section>
        <h3>Area Series</h3>
        <AreaChart />
      </section>
      <section>
        <h3>Area Series With vertical offset</h3>
        <AreaChartElevated />
      </section>
      <section>
        <h3>Bar Series</h3>
        <BarChart />
      </section>
      <section>
        <h3>Stacked Horizontal Bar Series</h3>
        <StackedHorizontalBarChart />
      </section>
      <section>
        <h3>Stacked Vertical Bar Series</h3>
        <StackedVerticalBarChart />
      </section>
      <section>
        <h3>Stacked Vertical Rect Series (histogram)</h3>
        <StackedHistogram />
      </section>
      <section>
        <h3>Heatmap Series</h3>
        <HeatmapChart />
      </section>
      <h2>Basic Components</h2>
      <section>
        <h3>Custom Size and Margin</h3>
        <WidthHeightMarginChart />
      </section>
      <section>
        <h3>Custom scales</h3>
        <CustomScales />
      </section>
      <section>
        <h3>Custom GridLines</h3>
        <GridLinesChart />
      </section>
      <h2>Axes</h2>
      <section>
        <h3>Custom Axes Orientation</h3>
        <CustomAxesOrientation />
      </section>
      <section>
        <h3>Custom Axis</h3>
        <CustomAxisChart />
      </section>
      <section>
        <h3>Turned axis labels</h3>
        <AxisWithTurnedLabels />
      </section>
      <h2>Tooltips</h2>
      <section>
        <h3>Static Hints</h3>
        <StaticHints />
      </section>
      <section>
        <h3>Dynamic Hints</h3>
        <p>Move mouse over the point to see the hint.</p>
        <DynamicHints />
      </section>
      <section>
        <h3>Static Crosshair</h3>
        <StaticCrosshair />
      </section>
      <section>
        <h3>Dynamic Crosshair</h3>
        <p>Move your mouse over the chart to see the point.</p>
        <DynamicCrosshair />
      </section>
      <h2>Miscellaneous</h2>
      <section>
        <h3>Synced Charts</h3>
        <SyncedCharts />
      </section>
      <section>
        <h3>Time Chart</h3>
        <TimeChart />
      </section>
    </article>
    <article id="radial-charts">
      <h1>Radial Chart</h1>
      <section>
        <h3>Simple Radial Chart</h3>
        <SimpleRadialChart />
      </section>
      <section>
        <h3>Simple Donut Chart</h3>
        <DonutChartExample />
      </section>
      <section>
        <h3>Custom Radius</h3>
        <CustomRadiusRadialChart />
      </section>
    </article>
    <article id="treemaps">
      <h1>Treemap</h1>
      <section>
        <h3>Simple Treemap</h3>
        <SimpleTreemap />
      </section>
      <section>
        <h3>Animated Treemap</h3>
        <TreemapExample />
      </section>
    </article>
    <article id="tables">
      <h1>Table</h1>
      <section>
        <h3>Static Table</h3>
        <StaticTable />
      </section>
      <section>
        <h3>Dynamic Table</h3>
        <p>Updates each 5 seconds</p>
        <DynamicTable />
      </section>
    </article>
    <article id="legends">
      <h1>Legends</h1>
      <h2>Discrete color legend</h2>
      <section>
        <h3>Vertical legend</h3>
        <VerticalDiscreteColorLegendExample />
      </section>
      <section>
        <h3>Horizontal legend</h3>
        <HorizontalDiscreteColorLegendExample />
      </section>
      <section>
        <h3>Discrete color legend with search</h3>
        <SearchableDiscreteColorLegendExample />
      </section>
      <h2>Continuous color legend</h2>
      <section>
        <h3>Default legend</h3>
        <ContinuousColorLegendExample />
      </section>
      <h2>Continuous size legend</h2>
      <section>
        <h3>Default legend</h3>
        <ContinuousSizeLegendExample />
      </section>
    </article>
  </main>
);

// Cannot render to body anymore: react is throwing warnings.
// Adding new element instead.
const el = document.createElement('div');
const render = isReactDOMSupported() ? ReactDOM.render : React.render;
document.body.appendChild(el);
render(examples, el);
