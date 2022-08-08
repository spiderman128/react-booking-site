// Dependencies
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactHighcharts from 'react-highcharts';

import * as S from './styles';
import { darkIndigo } from '../../../../theme/palette';
import { RootState } from '../../../../redux/reducers';

// Interface
export interface IChartProps {
  data: any[];
}

// Colors
const Colors = [
  '#799FE5',
  '#B67FEF',
  '#4ED2A2',
  '#67E2E2',
  '#FFA67B',
  '#D7D7D7',
];
const sizes = { xl: 285, lg: 285, md: 220, sm: 170 };
const yOffsets = { xl: -8, lg: -8, md: -16, sm: -8 };

// Export pie chart component
export const PieChart: FC<IChartProps> = ({ data }) => {
  const breakpoint = useSelector(
    ({ uiReducer: { breakpoint } }: RootState) => breakpoint
  );

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    setChartData(
      data.map((item, index) => ({
        y: item.value,
        name: item.name,
        color: Colors[index % Colors.length],
      }))
    );
  }, [data]);

  const chartOptions: any = useMemo(
    () => ({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie',
        width: sizes[breakpoint],
        height: sizes[breakpoint],
        spacingTop: 0,
      },
      title: {
        useHTML: true,
        text: `
          <div class='centered-title'>
            <p>29</p>
            <p>Objects</p>
          </div>
        `,
        align: 'center',
        verticalAlign: 'middle',
        y: yOffsets[breakpoint],
        x: 0,
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 8,
        animation: true,
        shadow: false,
        style: {
          color: darkIndigo,
          fontFamily: 'Work Sans',
        },
        shape: 'square',
        formatter() {
          // @ts-ignore
          const { point } = this;
          return `
          <div class='pie-chart-tooltip'>
            <div class='pie-legend-name'>${point.name}</div>
            <div>${point.y}</div>
          </div>
        `;
        },
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          showInLegend: false,
        },
      },
      series: [
        {
          type: 'pie',
          innerSize: '40%',
          borderWidth: '3px',
          data: chartData.filter((item) => !item.disabled),
          size: '100%',
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chartData]
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
    <S.PieChartWrapper>
      <ReactHighcharts config={chartOptions} />
      <S.LegendWrapper>
        {chartData.map((item, index) => (
          <div
            key={`item-${index}`}
            className={`legend-item ${item.disabled ? 'disabled' : ''}`}
            onClick={() => handleClickLegendItem(item.name)}
          >
            <div className="legend-symbol" style={{ background: item.color }} />
            <span>{item.name}</span>
          </div>
        ))}
      </S.LegendWrapper>
    </S.PieChartWrapper>
  );
};
