//////////////////////// Q1
function firstName(persons){
return Object.values(persons);
}

let persons = {};
////// Add values
persons.firstName1 = "John";
persons.firstName2 = "Alex";
persons.firstName3 = "Alice";
persons.firstName4 = "Thor";
persons.firstName5 = "Soso";

console.log (firstName(persons));

////////////////////////////////// Q2
function ObjectToArray(ranaobj){
let arr =[];
arr.push(Object.keys(ranaobj)[0]);
arr.push(Object.values(ranaobj)[0]);
arr.push (Object.keys(ranaobj)[1]);
arr.push(Object.values(ranaobj)[1]);

return arr;
}

let ranaobj = {};
////// Add values and properity
ranaobj.firstName = "Moh";
ranaobj.age = 24;

console.log (ObjectToArray(ranaobj));


////////////////// Q3
function Car(brand, model,year){
this.brand = brand;
this.model = model;
this.year = year;

this.getDetails = function(){
return "Brand: " +this.brand +", model:"+ this.model+ ", year:"+this.year;
}

}
let Car1 = new Car('Toyota', 'Corolla', 2020);
let Car2 = new Car('Tesla', 'Model 3', 2022);
let Car3 = new Car('Ford', 'Mustang', 2019);
let arr1 =[Car1, Car2, Car3];
for (let i =0; i<arr1.length;i++){
    console.log(arr1[i].getDetails());
}

