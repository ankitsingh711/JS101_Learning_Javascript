/* ### **Problem-2 Grade Student Marks**

- Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total */

/* V-Prateek-90
VI-Albert-90
VII-Sandhya-90 */

// console.log(details[i].grade+"-"+ details[i].students[j].name + "-" +     details[i].students[j].marks);

let details = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];

for (i=0;i<details.length;i++){
  let total = 0;
  for (j=0;j<2;j++){
    total += details[i].students[j].marks[i];
  }
  console.log(total);
}
