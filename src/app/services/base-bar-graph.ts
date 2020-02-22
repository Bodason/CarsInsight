export interface BaseBarGraph {
    data?: BaseBarGraphData[];
    layout?: BaseBarGraphLayout;
    config?: BaseBarGraphConfig;
}

export interface BaseBarGraphData {
    type: string;
    x: string[];
    y: string[];
    orientation: 'h' | 'v';
}

export interface BaseBarGraphLayout {
    title: string;
    showlegend: boolean;
}

export interface BaseBarGraphConfig {
    displayModeBar: boolean;
}
