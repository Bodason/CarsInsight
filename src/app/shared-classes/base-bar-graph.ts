export class BaseBarGraph {
    protected baseColor = 'rgba(200,200,200,1)';
    data: BaseBarGraphData[];
    layout: BaseBarGraphLayout;
    config: BaseBarGraphConfig;

    constructor() {
        this.data = [new BaseBarGraphData()];
        this.data[0].marker.color = [this.baseColor];
        this.layout = new BaseBarGraphLayout();
        this.config = new BaseBarGraphConfig();
    }

    public GetBaseColor(): string {
        return this.baseColor;
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
    title: string;
    showlegend: boolean;
    xaxis: BaseBarGraphXaxis;
    yaxis: BaseBarGraphXaxis;


    constructor() {
        this.title = 'Bar graph';
        this.showlegend = false;
        this.xaxis = new BaseBarGraphXaxis();
        this.yaxis = new BaseBarGraphYaxis();
    }
}

export class BaseBarGraphXaxis {
    tickformat: string;
    range: number[];
    fixedrange = true;
}

export class BaseBarGraphYaxis {
    tickformat: string;
    range: number[];
    fixedrange = true;
}

export class BaseBarGraphConfig {
    displayModeBar = false;
}

export class BaseBarGraphMarker {
    color?: string[]; // rgba
    line?: BaseBarGraphMarkerLine;

    constructor() {
        this.line = new BaseBarGraphMarkerLine();
    }
}
export class BaseBarGraphMarkerLine {
    color = 'rgb(0,0,0)';
    width = '1';
}
