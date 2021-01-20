var visualize = function() {
    var config = {
        "axis": {
            "labelColor": "#A9ACB5",
            "gridColor": "#A9ACB5",
            "tickColor": "#A9ACB5",
            "domainColor": "#A9ACB5",
            "labelFont": "SF Mono, meslo_lg_sregular, Menlo, Source Code Pro, monospace",
            "labelFontSize": 12
        }
    };

    var canvases = document.getElementsByClassName('visualization');
    for (var i = 0; i < canvases.length; i++) {
        var canvas = canvases.item(i);
        var id = canvas.id;
        var container = '#' + canvas.id;

        var uuid = id.split('_')[1];
        var tag = document.getElementById('spec_' + uuid);
        var src = tag.dataset.src;
        var spec = JSON.parse(tag.textContent);
        if (src.endsWith('.vl.json')) {
            spec = vl.compile(spec).spec;
        }

        var width = Math.min(canvas.parentElement.parentElement.clientWidth, document.getElementsByClassName('container')[0].clientWidth - (document.getElementsByTagName('nav')[0].clientWidth + document.querySelectorAll('.container .gutter')[0].clientWidth) - 80 - 40);

        var view = new vega.View(vega.parse(spec, config))
            .renderer('svg') // set renderer (canvas or svg)
            .initialize(container) // init view within parent DOM container
            .hover() // enable hover encode set processing
            .width(width) // initial width
            .run(); // run the dataflow and render the view

        window.addEventListener('resize', function() {
            var width = Math.min(canvas.parentElement.parentElement.clientWidth, document.getElementsByClassName('container')[0].clientWidth - (document.getElementsByTagName('nav')[0].clientWidth + document.querySelectorAll('.container .gutter')[0].clientWidth) - 80 - 40);

            var el = this.width(width);
            el.resize();
            el.run();
        }.bind(view));
    }
};

window.addEventListener('load', visualize);
