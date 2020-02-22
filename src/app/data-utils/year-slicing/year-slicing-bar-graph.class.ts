import { BaseBarGraph } from 'src/app/shared-classes/base-bar-graph';

export class YearSlicingBarGraph extends BaseBarGraph {

    constructor() {
        super();

        this.layout.title = 'Year';
        this.data = null;
    }
}
