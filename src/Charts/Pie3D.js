import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


function Pie3D({ data }) {

    // Create a JSON object to store the chart configurations
    const chartConfigs = {
        type: "pie3D", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "Languages",    //Set the chart caption
                theme: "fusion",             //Set the theme for your chart
                pieRadius: '30%', // to increase the size
            },
            // Chart Data - from step 2
            data: data
        }
    };

    return (
        <ReactFC {...chartConfigs} />
    )
}

export default Pie3D
