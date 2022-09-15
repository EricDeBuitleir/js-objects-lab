const aCar = {

    previous_owners: [ " Pat Smith - 1 Main Street " , " Shiela Dwyer - 2 High Street "],

    owner : "Joe Bloggs",
    milage : "10000",
    colour : {
        exterior : "red",
        interior : "fabric",
        texture : "leather",
        sahde : "cream"
    },
    registration : {
        year : "201",
        code : "WD",
        num : "1058"

    },
    type : {
        make : "Toyota",
        model : "Corolla",
        cc : "1.8",
    }
    
    
};


console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log(aCar.registration.year + "-" + aCar.registration.code + "-" + aCar.registration.num)
console.log("It is a " + aCar.colour.exterior + "car," + " with a " + aCar.milage + " milage,"  + " with " + aCar.colour.texture + " interior ")
console.log(' First owner : ' + aCar.previous_owners [0] )
