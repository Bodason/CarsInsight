export class BaseBarGraph {
    data: BaseBarGraphData[];
    layout: BaseBarGraphLayout;
    config: BaseBarGraphConfig;

    constructor() {
        this.data = [new BaseBarGraphData()];
        this.layout = new BaseBarGraphLayout();
        this.config = new BaseBarGraphConfig();
    }
}

export class BaseBarGraphData {
    type = 'bar';
    x?: string[];
    y?: string[];
    orientation?: 'h' | 'v' = 'h';  // in this demo, it makes sense to default to vertical orientation - not in general though
    marker?: BaseBarGraphMarker;
}

export class BaseBarGraphLayout {
    title = 'Bar graph';
    showlegend = false;
}

export class BaseBarGraphConfig {
    displayModeBar = false;
}

export interface BaseBarGraphMarker {
    color?: string|string[]; // rgba
    line?: BaseBarGraphMarkerLine;
}
export interface BaseBarGraphMarkerLine {
    color?: string; // rgb
    width?: number;
}
