/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//  function for count of each unique Product 
function getUniqueProductCount(arr){
    var obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i].productName] == undefined){
            obj[arr[i].productName] = 1;
        }else{
            obj[arr[i].productName] = obj[arr[i].productName]+1;
        }
    }
    return obj;
}

var unique  = getUniqueProductCount(listOfProducts);
console.log(unique)

//  function for count of each unique Product return an array of unique objects by grouping the products based on the productName and summing up the quantity
function getUniquePrducts(arr){
    var res = [];
    for(let i=0;i<arr.length;i++){
        var x = res.some(el => el.productName === arr[i].productName)
        if(x == false){
            res.push(arr[i])
        }else{
            res.map((e)=>{
                if(e.productName === arr[i].productName){
                    e.quantity += arr[i].quantity; 
                }else{
                    return
                }
            })
        }
    }
    return res;
}

var grouping  = getUniquePrducts(listOfProducts);
console.log(grouping)
