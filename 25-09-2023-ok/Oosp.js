class Product {
    // _ProductId = "";
    // _ProductName = "";
    // _ProductPrice = 0.0;
    constructor(Id,Name,Price){
        this._ProductId = Id;
        this._ProductName = Name;
        this._ProductPrice = Price;
    }
    Result(){
        console.log(`\nThe Product id is : ${this._ProductId}`);
        console.log(`The Product Name is : ${this._ProductName}`);
        console.log(`The Product Price is : ${this._ProductPrice}\n`);
    }
}
var dis1 = new Product('P101','Laptop',45000);
var dis2 = new Product('P102','Mobile',25000);
var dis3 = new Product('P103','Tablet',15000);
var dis4 = new Product('P104','Desktop',35000);
var dis5 = new Product('P105','Smartwatch',5000);
dis1.Result();
dis2.Result();
dis3.Result();
dis4.Result();
dis5.Result();
