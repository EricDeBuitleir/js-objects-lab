const aCar = {
    owner : "Joe Bloggs",
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


