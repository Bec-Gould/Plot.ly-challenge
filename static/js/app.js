// read json file
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


function init() {
  d3.json("samples.json").then(data => {
    console.log(data);
    
}





function buildPlots(selection) {
  d3.json("samples.json").then(data => {
    var samples = data.samples;
    var filteredData = samples.filter(row => row.id == selection)[0];
    // console.log(filteredData)
    var OTU_id = filteredData.otu_ids;
    var sample_values = filteredData.sample_values;
    var OTU_labels = filteredData.otu_labels;
    var barlabels = OTU_id.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
    console.log(OTU_id)
    console.log(sample_values)
    console.log(OTU_labels)


    var trace1 = {
      type: "bar",
      text: OTU_labels.slice(0,10).reverse(),
      x: sample_values.slice(0,10).reverse(),
      y: barlabels.slice(0,10),
      orientation: "h",
    }

    var bardata = [trace1];

    Plotly.newPlot("bar", bardata);

    var trace2 = {
      x: OTU_id,
      y: sample_values,
      mode: "markers",
      marker: {
        color: OTU_id,
        size: sample_values,
      } 
    }

    var bubbledata = [trace2];

    var layout = {
      title: "OTU ID",
      showlegend: false,
      height: 600,
      width: 1200,

    }

    Plotly.newPlot("bubble", bubbledata, layout);

});
};

buildPlots("940")






d3.selectAll("body").on("change", menuChange);

function menuChange(selection) {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selDataset").node();
  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.id;
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;
}


















//   Slice the first 10 objects for plotting
//   data = data.slice(0, 10);

//   // Reverse the array due to Plotly's defaults
//   data = data.reverse();

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



