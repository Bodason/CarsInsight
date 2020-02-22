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
    x: string[];
    y: string[];
    orientation?: 'h' | 'v' = 'h';  // in this demo, it makes sense to default to vertical orientation - not in general though
}

export class BaseBarGraphLayout {
    title = 'Bar graph';
    showlegend = false;
}

export class BaseBarGraphConfig {
    displayModeBar = false;
}
