export class BaseHistogramGraph {
    data: BaseHistogramGraphData[];
    layout: BaseHistogramGraphLayout;
    config: BaseHistogramGraphConfig;

    constructor() {
        this.data = [new BaseHistogramGraphData()];
        this.layout = new BaseHistogramGraphLayout();
        this.config = new BaseHistogramGraphConfig();
    }
}

export class BaseHistogramGraphData {
    type = 'histogram';
    histfunc: 'count'|'sum'| null = null;
    x: string[];
    y: string[];
    orientation?: 'h' | 'v' = 'h';  // in this demo, it makes sense to default to vertical orientation - not in general though
    marker?: BaseHistogramGraphMarker;
    xbins: BaseHistogramGraphXbins;

    constructor() {
        this.xbins = new BaseHistogramGraphXbins();
    }
}

export class BaseHistogramGraphXbins {
    end: number;
    size: number;
    start: number;
}

export class BaseHistogramGraphLayout {
    title = 'Histogram';
    showlegend = false;
    constructor() {}
}

export class BaseHistogramGraphConfig {
    displayModeBar = false;
    constructor() {}
}

export interface BaseHistogramGraphMarker {
    color?: string|string[]; // rgba
    line?: BaseHistogramGraphMarkerLine;
}
export interface BaseHistogramGraphMarkerLine {
    color?: string; // rgb
    width?: number;
}
