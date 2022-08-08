// Dependencies
import React, { FC, useEffect, useMemo, useState } from 'react';
import ReactHighcharts from 'react-highcharts';

import * as S from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';

// Interface
export interface IChartProps {
  data: any[];
}

// Colors
const Colors = [
  '#799FE5',
  '#4ED2A2',
  '#FFA67B',
  '#B67FEF',
  '#67E2E2',
  '#D7D7D7',
];
const size = { xl: 320, lg: 320, md: 240, sm: 196 };

// Export bar chart component
export const BarChart: FC<IChartProps> = ({ data }) => {
  const breakpoint = useSelector(
    ({ uiReducer: { breakpoint } }: RootState) => breakpoint
  );

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    setChartData(
      data.map((item, index) => ({
        ...item,
        y: item.value,
        color: Colors[index % Colors.length],
      }))
    );
  }, [data]);

  const chartOptions: any = useMemo(
    () => ({
      chart: {
        type: 'column',
        height: size[breakpoint],
        marginLeft: 30,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          pointWidth: breakpoint === 'sm' ? 30 : 48,
        },
        column: {
          borderRadius: 8,
          dataLabels: {
            enabled: false,
          },
          showInLegend: false,
        },
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: 'transparent',
        borderWidth: 0,
        animation: true,
        padding: 12,
        className: 'pie-chart-tooltip',
        shadow: false,
        style: {
          color: '#333333',
          cursor: 'default',
          fontSize: '14px',
          lineHeight: '24px',
          whiteSpace: 'nowrap',
        },
        shape: 'square',
        formatter() {
          // @ts-ignore
          const { point } = this;
          var value = point.y
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
          return `
            <div class="bar-chart-tooltip">
              <div>${value}€</div>
              <div>
                <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;" fill='#799FE5'><path d="M405.333 974.222v-249.27c0-17.397 17.778-35.174 35.556-35.174h142.222c17.778 0 35.556 17.778 35.556 35.556v248.889c0 19.638 15.918 35.556 35.556 35.556h284.444c19.638 0 35.556-15.918 35.556-35.556v-497.778c0-9.43-3.743-18.474-10.416-25.141l-96.25-96.253v-234.161c0-19.637-15.918-35.556-35.556-35.556h-71.111c-19.638 0-35.556 15.919-35.556 35.556v91.939l-188.192-188.192c-13.885-13.885-36.398-13.885-50.283 0l-426.667 426.667c-6.668 6.668-10.414 15.712-10.414 25.141v497.778c0 19.638 15.919 35.556 35.556 35.556h284.444c19.637 0 35.556-15.918 35.556-35.556z" fill="#799FE5"></path></svg>
                ${point.objects}
              </div>
            </div>
          `;
        },
      },
      xAxis: {
        visible: false,
        labels: {
          enabled: false,
        },
        categories: ['Comdominium', 'Delivery Indicative Offer', 'Assessment'],
        gridLineColor: '#00fff0',
        startOnTick: false,
        endOnTick: false,
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
        gridLineDashStyle: 'Dash',
        plotLines: [
          {
            value: 10,
            zIndex: 2,
            width: 2,
            dashStyle: 'Dash',
          },
        ],
        labels: {
          align: 'left',
          x: 0,
          y: -10,
          style: {
            color: '#697990',
          },
          formatter: function () {
            // @ts-ignore
            return this.value + '€';
          },
        },
      },
      series: [
        {
          name: 'object overview',
          data: chartData.filter((item) => !item.disabled),
        },
      ],
    }),
    [chartData, breakpoint]
  );

  const handleClickLegendItem = (seriesName: string) => {
    setChartData(
      chartData.map((item: any) => {
        if (item.name === seriesName) {
          item = {
            ...item,
            disabled: !item.disabled,
          };
        }
        return item;
      })
    );
  };

  return (
    <S.BarChartWrapper>
      <ReactHighcharts config={chartOptions} />
      <S.LegendWrapper>
        {chartData.map((item, index) => (
          <div
            key={`item-${index}`}
            className={`legend-item ${item.disabled ? 'disabled' : ''}`}
            onClick={() => handleClickLegendItem(item.name)}
          >
            <div className="legend-symbol" style={{ background: item.color }} />
            <div className="legend-label">
              <p>{item.name}</p>
              <p>{`${item.objects} Objects`}</p>
            </div>
          </div>
        ))}
      </S.LegendWrapper>
    </S.BarChartWrapper>
  );
};
