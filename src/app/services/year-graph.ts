import { BaseBarGraph } from './base-bar-graph';

export class YearBarGraph implements BaseBarGraph {
    layout = {
        showlegend: false,
        title: 'Year',
    };

    config = {
        displayModeBar: false
    };

    data = null;
}
