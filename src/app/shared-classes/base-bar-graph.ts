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
    orientation?: 'h' | 'v' = 'v';  // in this demo, it makes sense to default to vertical orientation - not in general though
    marker?: BaseBarGraphMarker;

    constructor() {
        this.marker = new BaseBarGraphMarker();
    }
}

export class BaseBarGraphLayout {
    title = 'Bar graph';
    showlegend = false;
}

export class BaseBarGraphConfig {
    displayModeBar = false;
}

export class BaseBarGraphMarker {
    color?: string|string[] = 'rgba(200,200,200,1)'; // rgba
    line?: BaseBarGraphMarkerLine;

    constructor() {
        this.line = new BaseBarGraphMarkerLine();
    }
}
export class BaseBarGraphMarkerLine {
    color = 'rgb(0,0,0)';
    width = '1';
}
