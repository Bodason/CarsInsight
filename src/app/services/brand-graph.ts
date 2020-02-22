import { BaseBarGraph } from './base-bar-graph';

export class BrandBarGraph implements BaseBarGraph {
    layout = {
        showlegend: false,
        title: 'Brand'
    };

    config = {
        displayModeBar: false
    };

    data = null;
}
