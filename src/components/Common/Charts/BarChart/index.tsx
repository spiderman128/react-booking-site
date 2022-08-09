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
              <div>${point.name} September</div>
              <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="12" height="12" rx="4" fill="#B5E4CA"/>
                </svg>              
                ${value}k
              </div>
            </div>
          `;
        },
      },
      xAxis: {
        categories: [22, 23, 24, 25, 26, 27, 28],
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
            return this.value;
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

  return (
    <S.BarChartWrapper>
      <ReactHighcharts config={chartOptions} />
    </S.BarChartWrapper>
  );
};
