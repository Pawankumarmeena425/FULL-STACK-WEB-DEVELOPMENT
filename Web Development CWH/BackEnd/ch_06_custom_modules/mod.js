console.log("This is modules");

function average(arr){
    let sum=0;
arr.forEach(element => {
    sum+=element;
});
return sum/arr.length;
}

module.exports  = average; // this is naive way for export one moudles

// But how to exports multiple modules : by creating objects
module.exports = {
    avg : average,
    name : "harry",
    repo : "Github"
}

// module.exports is a objects , so we can also do the following
module.exports.class = "ABC";