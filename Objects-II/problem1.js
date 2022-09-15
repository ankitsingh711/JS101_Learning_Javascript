//## **Problem-1 User Age Filter**

/*- Given a list of user data with name and age, create a list of key-value pairs from the input
- From the generated data, print the users whose age is more than 30
- Sample Input */

let details = [
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
];

for (i=0;i<details.length;i++){
  if (details[i].age > 30){
    console.log(details[i].name);
  }
}