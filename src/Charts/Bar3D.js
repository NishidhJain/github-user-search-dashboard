import React from "react";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import UmberTheme from "fusioncharts/themes/fusioncharts.theme.umber";

ReactFC.fcRoot(FusionCharts, Chart, UmberTheme);


function Bar3D({ data }) {

    // Create a JSON object to store the chart configurations
    const chartConfigs = {
        type: "bar3D", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "Most Forked",    //Set the chart caption
                yAxisName: 'Forks',
                xAxisName: 'Repos',
                xAxisNameFontSize: '20px',
                yAxisNameFontSize: '20px',
                theme: "umber",             //Set the theme for your chart
            },
            // Chart Data - from step 2
            data: data
        }
    };

    return (
        <ReactFC {...chartConfigs} />
    )
}

export default Bar3D
