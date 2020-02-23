import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';

export class YearSlicingBarGraph extends BaseBarGraph {

    constructor() {
        super();

        this.baseColor = 'rgba(10,10,200,0.1)';
        this.layout.title = 'Year';
        this.data[0].marker.color = [this.baseColor];
    }
}
