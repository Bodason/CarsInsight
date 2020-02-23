import { BaseHistogramGraph } from 'src/app/shared-classes/base-histogram-graph.class';

export class BrandSlicingHistogramGraph extends BaseHistogramGraph {

    constructor() {
        super();

        this.layout.title = 'Brand';
    }
}
