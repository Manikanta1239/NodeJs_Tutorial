const nnrg_people = [
    { name : 'mani', rollNo: 6706, age: 20},
    { name : 'rahul', rollNo: 6705, age: 21},
    { name : 'vishnu', rollNo: 6734, age: 23},
    { name : 'koushik', rollNo: 6703, age: 24}
]

const nrg = nnrg_people.filter((nnrg_people) => nnrg_people.name === 'rahul' && nnrg_people.age === 21);
console.log(nrg);

const nrg_upper = nnrg_people.map(nnrg_people => nnrg_people.age <= 23 && nnrg_people.name.toUpperCase());
console.log(nrg_upper);