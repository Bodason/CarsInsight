import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';

export class BrandSlicingGraph extends BaseBarGraph {

    constructor() {
        super();

        this.layout.title = 'Brand';
        this.data = null;
    }
}
