// read json file
d3.json("samples.json").then((data) => {
  // console.log(importedData);
  console.log(data)
});

d3.json("samples.json").then(data => {
  // console.log(data);

  // populate drop box with values and get new data when selecting new value. 
  var id_names = data.names;
  console.log(id_names);
  id_names.forEach((name) => {
    var menu = d3.select("#selDataset");
    var newSelection = menu.append("option");
    newSelection.attr("value",name);
    newSelection.text(name);
    var selectedID = menu.node().value;
    console.log(selectedID)
  })
})

// set a default ID so the page loads with the plots straight away
var defaultID = "940"
optionChanged(defaultID)

// run functions to update page each time you selct new ID from dropdown
function optionChanged(selectedID){
  getMetadata(selectedID);
  buildPlots(selectedID);
}

// get metadata, filter the data and store in variables
function getMetadata(selectedID) {
  d3.json("samples.json").then(data => {
    var metadata = data.metadata;
    var filteredData = metadata.filter(row => row.id == selectedID)[0];
    var info = d3.select("#sample-metadata");
    info.html("");
    Object.entries(filteredData).forEach(([key,value]) => {
      info.append("h6").text(`${key}: ${value}`);

    })
  })
}

// create function to build each plot when a new ID is selected 
function buildPlots(selectedID) {
  d3.json("samples.json").then(data => {
    var samples = data.samples;
    var filteredData = samples.filter(row => row.id == selectedID)[0];
    console.log(filteredData)
    var OTU_id = filteredData.otu_ids;
    var sample_values = filteredData.sample_values;
    var OTU_labels = filteredData.otu_labels;
    var barlabels = OTU_id.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
    // console.log(OTU_id)
    // console.log(sample_values)
    // console.log(OTU_labels)

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






















