export default function ItemList() {

const item1 = {
    name: "Milk, 4L carton",
    quantity: 1,
    category: "Dairy"
};

const item2 = {
    name: "Bread, whole wheat",
    quantity: 2,
    category: "Bakery"
};

const item3 = {
    name: "Eggs, dozen",
    quantity: 2,
    category: "Dairy"
};

const item4 = {
    name: "Bananas, bunch",
    quantity: 6,
    category: "Produce"
};

const item5 ={
    name: "broccoli",
    quantity: 3,
    category: "Produce"
};

const item6 = {
  name: "chicken breasts, 1 kg",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "pasta sauce",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "dish soap",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "hand soap",
  quantity: 4,
  category: "household",
};
    return (<div>
        <ul>
             <li>{item1.name}</li>
                <li>{item2.name}</li>
                <li>{item3.name}</li>
                <li>{item4.name}</li>
                <li>{item5.name}</li>
                <li>{item6.name}</li>
                <li>{item7.name}</li>
                <li>{item8.name}</li>
                <li>{item9.name}</li>
                <li>{item10.name}</li>
                <li>{item11.name}</li>
                <li>{item12.name}</li>
        </ul>
    </div>);
}
