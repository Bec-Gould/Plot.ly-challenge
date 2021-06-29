// copied from class exercise
d3.json("samples.json").then((data) => {
  // console.log(importedData);
  console.log(data)
});



function getMetadata(selection) {
  d3.json("samples.json").then(data => {
    var metadata = data.metadata;
    var filteredData = metadata.filter(row => row.id == selection)[0];
    var info = d3.select("#sample-metadata");
    info.html("");
    Object.entries(filteredData).forEach(([key,value]) => {
      info.append("h6").text(`${key}: ${value}`);

    })
  })
}

getMetadata("940")

function buildPlots(selection) {
  d3.json("samples.json").then(data => {
    var samples = data.samples;
    var filteredData = samples.filter(row => row.id == selection)[0];
    // console.log(filteredData)
    var OTU_id = filteredData.otu_ids;
    var sample_values = filteredData.sample_values;
    var OTU_labels = filteredData.out_labels;
});
};

buildPlots("940")



  // Slice the first 10 objects for plotting
  // data = data.slice(0, 10);

  // // Reverse the array due to Plotly's defaults
  // data = data.reverse();

//   // Trace1 for the Greek Data
//   var trace1 = {
//     x: data.map(row => row.sample_values),
//     y: data.map(row => row.otu_ids),
//     text: data.map(row => row.otu_labels),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
//   };

//   // data
//   var chartData = [trace1];

//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "The highest critically acclaimed movies.",
//     xaxis: { title: "Title" },
//     yaxis: { title: "Metascore (Critic) Rating"}
//   };


//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", chartData, layout);
// });



