let isPrice= num =>{
    if (num<2){
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num%i===0){
            return false
        }
    }
    return true;
}
const array=[1,2,3,4,5,6,7,8]
// cách 1
// const arrayPrice = array.filter(isPrice);
// cách 2
const arrayPrice = array.filter((e)=>isPrice(e));
console.log(arrayPrice)

//yêu cầu 2
const person={
    firstName:'Jonny',
    lastName : 'Dang',
    age:25,
    gender: 'male',
    occupation:'developer',
    nationality:'Việt Nam',
    city:'Đà Nẵng',
    hobbies:['volleyball','badminton','swimming'],
    language:['English','American'],
    education:{
        degree:'Bachelor',
        major:'Computer Science',
        university:'Harvard University'
    }
};
const {firstName,gender,education:{degree,major},language:[english]}=person;
const student={
    firstName,
    gender,
    english,
    education: {
        degree,
        major
    }

}
console.log(student);
const getInfo=({firstName='Quan',degree='N/A'})=>{
    console.log(firstName);
    console.log(degree);
}

const sv1={
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english:'English',

};

const sv2={
    ...sv1,
    firstName: 'John11'
}

getInfo(sv2);
getInfo(sv1);

