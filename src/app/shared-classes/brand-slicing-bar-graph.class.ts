import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';

export class BrandSlicingBarGraph extends BaseBarGraph {

    constructor() {
        super();

        this.baseColor = 'rgba(200,10,10,0.1)';
        this.layout.title = 'Brand';
        this.data[0].marker.color = [this.baseColor];
    }
}
