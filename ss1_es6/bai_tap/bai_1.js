let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    }
    ,
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    }
    ,
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    }
    ,
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    }
    ,
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    }
];
// yêu cầu 1
const newArray = courses.filter(element => (element.rating > 4))
console.log(newArray);
// yêu cầu 2

const lastArray=courses.filter(element=>(element.rating<4))

 const newArray2 = lastArray.map(element =>("<"+ element.id+">" + "-" +"<"+ element.rating+">" + "-" +"<"+element.title+">"))
console.log(newArray2)
// yêu cầu 3
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
const array3=[...courses,...addedCourses];
console.log(array3);