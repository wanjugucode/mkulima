class Mkulima{
constuctor(){
    this.farm=[];
    this.products=[];
    this.orders=[];
}
addFarm( farmId, name, farmer, phoneNo, address){
   let  farms={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phoneNo:phoneNo,
        address:address,
       
    }
    this.farm.push(farms);
    return this.farm
}

removeFarm(farmId){
let myfarm=this.farms.find(myfarmt=>myfarm.farmId==farmId);
return delete this.farm[myfarm];
}
 updateFarm(){
     let Farm=this.farm.find(Farm=>Farm.farmId==farmId)
        let Farm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNo:phoneNo,
            address:address,
         
            }
            return Farm
        }
 getFarm(farmId){
 let KariukiFarm=this.farm.find(KariukiFarm=>KariukiFarm.farmId==farmId);
            return KariukiFarm
        }
    
addProduct(productId, name, price,){
    let product={
        productId:productId,
        name:name,
        price:price,
    }
    this.products.push(product);
    return this.products
}
removeproductId(productId){
    let myproduct=this.products.find(myproduct=>myproduct.productId==productId);
    return delete this.farm[myproduct];
    }
    updateProduct(productId,name,price){
        let p=this.products.find(p=>p.productId==productId)
           let Farm={
          productId:productId,
               name:name,
               price:price,
        
               }
               return p
           }
           getProduct(productId){
            let xproduct=this.products.find(xproduct=>xproduct.productId==productId);
                       return xproduct
                   }

    printProduct(){
        for(let i of this.products){
            console.log(i.name+" "+i.price)
        }
    }
    calculateOrderCost(productId,quantity){
  let productCost=this.product.find(productCost=>productCost.productId==productId)
  return productCost.price*quantity

}

}

let myFarmers= new Mkulima([],[],[]);

console.log(myFarmers.addFarm("1232","Kanyagia","Nyuki","071234678","13"));
console.log(myFarmers.addFarm("1238","Karaba","Sammy","0709934678","18"));
console.log(myFarmers.addFarm("1239","Kariko","Bull","0708734678","67"));
console.log(myFarmers.removeFarm("1238"));
console.log(myFarmers.getFarm("1232"));
console.log(myFarmers.updateFarm("1233","Kibutio","Kariuki","079034678","93"));
console.log(myFarmers.addProduct("13","apple",30));
console.log(myFarmers.getProduct("13"));
console.log(myFarmers.removeProduct("13"));
console.log(myFarmers.updateProduct("13","banana",20));
console.log(myFarmers.printProducts());
console.log(myFarmers.calculateOrderCost("13",40));






