const skills = [
    {id: 1, skill: 'HTML', learned: true, level: 'Beginner'},
    {id: 2, skill: 'CSS', learned: true, level: 'Beginner'},
    {id: 3, skill: 'JavaScript', learned: true, level: 'Master'},
    {id: 4, skill: 'C++', learned: false, level: 'Beginner'},
    {id: 5, skill: 'Unity', learned: false, level: 'Beginner'}
]

function getAll(){
    return skills
}

function getOne(id){
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}

function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx,1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.level = 'Beginner';
    skill.learned = false;
    skills.push(skill);
  }

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}