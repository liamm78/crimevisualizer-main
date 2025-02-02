const fs = require('fs')
//console.log(nydata1.features[1].properties["total_felonies" + selectedYear])
//let feature;

const nydata1 = JSON.parse(fs.readFileSync('nycrimedata.json', 'utf8'));

var sum;
for(let i=0;i<nydata1.features.length;i++) { //Loops through all the precincts
    let properties=nydata1.features[i].properties
    var totalFeloniesSum = 0;
    console.log("ORDER "+i)

    for(let j =2000;j<2024;j++){
       // console.log(properties["total_felonies" + j])
        totalFeloniesSum+=parseInt(properties["total_felonies" + j], 10)
    }
    console.log("Total Sum "+totalFeloniesSum);
    properties.total_feloniesSum = totalFeloniesSum
}

let newData = {
    "type": "FeatureCollection",
    "features": nydata1.features // This will include the modified features with the new 'total_feloniesSum' property
};

// Write the new data to a new JSON file
fs.writeFile('new_nydata.json', JSON.stringify(newData, null, 2), (err) => {
    if (err) throw err;
    console.log('New JSON file has been saved!');
});