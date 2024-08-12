declare module 'react-heatmap-grid' {
  import * as React from 'react';

  interface HeatMapProps {
    xLabels: string[];
    yLabels: string[];
    xLabelsLocation?: 'top' | 'bottom';
    xLabelWidth?: number;
    yLabelWidth?: number;
    labelStyle?: React.CSSProperties;
    data: number[][];
    squares?: boolean;
    height?: number;
    cellStyle?: (
      background: string,
      value: number,
      min: number,
      max: number
    ) => React.CSSProperties;
    cellRender?: (value: number) => string | JSX.Element;
    title?: (value: number, unit?: string) => string;
  }

  const HeatMap: React.FC<HeatMapProps>;

  export default HeatMap;
}