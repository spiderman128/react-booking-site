// Dependencies
import React, { FC, useEffect, useMemo, useState } from 'react';
import ReactHighcharts from 'react-highcharts';
import { useSelector } from 'react-redux';

import * as S from './styles';
import { RootState } from '../../../../redux/reducers';

// Interface
export interface IChartProps {
  data: any[];
  lineColor?: string;
  title?: string;
  month?: string;
  year?: string;
}

const size = { xl: 180, lg: 180, md: 180, sm: 160 };
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

// Export line chart component
export const LineChart: FC<IChartProps> = ({
  title,
  data,
  lineColor,
  year,
  month,
}) => {
  const breakpoint = useSelector(
    ({ uiReducer: { breakpoint } }: RootState) => breakpoint
  );

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    setChartData(
      data.map((item, index) => ({
        ...item,
        y: item.value,
        x: month ? item.date : item.month,
        lineWidth: 3,
      }))
    );
  }, [data, setChartData, month]);

  const chartOptions: any = useMemo(
    () => ({
      chart: {
        type: 'spline',
        height: size[breakpoint],
        showAxes: true,
        marginTop: 20,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        spline: {
          showInLegend: false,
          marker: {
            enabled: false,
          },
          color: lineColor,
        },
        series: {
          point: {
            events: {
              mouseOver: function () {
                // @ts-ignore
                const { series, x } = this;
                const labelNumber = month ? Math.floor(x / 5) : x - 1;
                const element =
                  series.chart.xAxis[0].labelGroup.element.childNodes[
                    labelNumber
                  ];
                if (element) {
                  element.style.fill = '#000';
                }
              },
              mouseOut: function () {
                // @ts-ignore
                const { series, x } = this;
                const labelNumber = month ? Math.floor(x / 5) : x - 1;
                const element =
                  series.chart.xAxis[0].labelGroup.element.childNodes[
                    labelNumber
                  ];
                if (element) {
                  element.style.fill = '#697990';
                }
              },
            },
          },
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
        className: 'line-chart-tooltip',
        shadow: false,
        positioner: function (width, height, point) {
          // @ts-ignore
          const { chartWidth } = this.chart;
          return {
            x:
              chartWidth > point.plotX + width
                ? point.plotX + 10
                : point.plotX - width,
            y: point.plotY - (height - 24) / 2,
          };
        },
        formatter() {
          // @ts-ignore
          const { point } = this;
          return `
            <div class="line-chart-tooltip">
              ${month ? `<div class="date">${point.x} ${month}</div>` : ''}
              <div>
                ${title} - ${point.value}
              </div>
            </div>
          `;
        },
      },
      xAxis: {
        min: month ? -1 : 0,
        gridLineColor: '#00fff0',
        lineWidth: 0,
        tickColor: 'transparent',
        crosshair: {
          width: 1,
          color: '#000',
          dashStyle: 'Dash',
        },
        labels: {
          style: {
            color: '#697990',
            fontFamily: 'Work Sans',
          },
          formatter: function () {
            // @ts-ignore
            return month ? this.value : months[+this.value - 1];
          },
        },
        tickPositions: month
          ? [1, 5, 10, 15, 20, 25, 30]
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      yAxis: {
        min: 0,
        max: 300,
        tickInterval: 100,
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
        },
      },
      series: [
        {
          data: chartData,
        },
      ],
    }),
    [chartData, breakpoint, month, title, lineColor]
  );

  return (
    <S.LineChartWrapper>
      <ReactHighcharts config={chartOptions} />
    </S.LineChartWrapper>
  );
};
