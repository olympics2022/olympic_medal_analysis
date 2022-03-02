// FROM BELLY BUTTON MODULE
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      console.log(data, "line 60");
      // 3. Create a variable that holds the samples array. 
      var samplesArray = data.samples;
      console.log(samplesArray, "line 63");
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var newSampleArray = samplesArray.filter(sampleObj => sampleObj.id == sample);
      console.log(newSampleArray, "line 65");
      //  5. Create a variable that holds the first sample in the array.
      var firstSample = newSampleArray[0];
      console.log(firstSample);
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuids = firstSample.otu_ids;
      var otuLabels = firstSample.otu_labels;
      var sampleVal = firstSample.sample_values;
      console.log(otuids, "line 74");
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      var yticks = otuids.slice(0,10).map(otuid => `OTU${otuid}`).reverse();
      var xvalue = sampleVal.slice(0,10).reverse();
      var hoverTxt = otuLabels.slice(0,10).reverse();
      console.log(yticks, "line79");
      console.log(xvalue, "line80");
      console.log(xvalue, "line81");
      // 8. Create the trace for the bar chart. 
      var barData = [
        {
           x: xvalue,
           y: yticks ,
          order: 'descending',
           type: 'bar',
           orientation: 'h',
          //  line: {
          // width: 40
        
          //   }, 
          // width: 50,
           text: hoverTxt
         }
       ];
       //Plotly paperbg colour: https://stackoverflow.com/questions/48798507/change-the-background-color-of-a-plot
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        paper_bgcolor: "FBEEE6",
        plot_bgcolor: "FBEEE6",
        title: "Top 10 Bacteria Cultures Found",
        height: 500,
        width: 500
      //  barmode: 'group'
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar-plot", barData, barLayout);
          // 1. Create the trace for the bubble chart.
          var bubbleData = [
            {
              x: otuids,
              y: sampleVal,
              mode: 'markers',
              marker: { color: sampleVal,
              size: sampleVal},
              text: hoverTxt
            }
          ];
      console.log(bubbleData);
          // 2. Create the layout for the bubble chart.
          var bubbleLayout = {
            paper_bgcolor: "FBEEE6",
            plot_bgcolor: "#1d6b9e",
            title: "Bacteria Cultures Per Sample",
            xaxis: {title: 'OTU ID'},
          height: 600,
          width: 1000
          };
          // 3. Use Plotly to plot the data with the layout.
          Plotly.newPlot('myDiv', bubbleData, bubbleLayout); 
  // 3b Create a Variable that filters the metadata array for an obj in the 
   // array whose id property matches the ID # passed in buldCharts funct.
  var metadata = data.metadata;
      // Create a varaible that holds the first sample in the array
      var gaugeFilterArray = metadata.filter((sampleObj => sampleObj.id == sample));
      var gaugeFirstSample = gaugeFilterArray[0];
      console.log(gaugeFirstSample, "line 141");
      // 4a create a variable that converts the washing frequency to a floating point number data
    var gaugeSample = parseFloat(gaugeFirstSample.wfreq);
    console.log(gaugeSample, "line 144");
      // 4. Create the trace for the gauge chart.
      var gaugeData = [
        {
        
          value: gaugeSample,
          title: { text: "Belly Button Washing Frequency"},
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 380 },
          gauge: {
            axis: { range: [null, 10], dtick: 2},
            steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange" },
              { range: [4, 6], color: "yellow" },
              { range: [6, 8], color: "yellowgreen"},
              { range: [8, 10], color: "green" }
            ],
            },
          },
      ];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        paper_bgcolor: "FBEEE6",
        width: 600, height: 500, margin: { t: 0, b: 0 } 
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot('myGauge', gaugeData, gaugeLayout);
    });
  }
  
  