import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import UmberTheme from "fusioncharts/themes/fusioncharts.theme.umber";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
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
