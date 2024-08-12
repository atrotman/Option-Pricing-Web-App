declare module 'react-plotly.js' {
    import { Component } from 'react';
    import Plotly from 'plotly.js';
  
    interface PlotParams {
      data: Plotly.Data[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
      frames?: Plotly.Frame[];
      revision?: number;
      onInitialized?: (figure: Readonly<Plotly.Figure>, graphDiv: Readonly<HTMLDivElement>) => void;
      onUpdate?: (figure: Readonly<Plotly.Figure>, graphDiv: Readonly<HTMLDivElement>) => void;
      onPurge?: (graphDiv: Readonly<HTMLDivElement>) => void;
      onError?: (error: Error) => void;
      useResizeHandler?: boolean;
      style?: React.CSSProperties;
      className?: string;
      divId?: string;
  }
  
    export default class Plot extends Component<PlotParams> {}
  }
  