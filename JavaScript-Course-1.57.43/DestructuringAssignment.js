var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6

var y = voxel.y; // y = 7.4

var z = voxel.z; // z = 6.54

const { x: a, y: b, z: c } = voxel; //asi es como se haria

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
