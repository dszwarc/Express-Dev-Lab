let skillsModel = require('../models/skills');

function index(req, res){
    res.render('skills/index', {
        skills: skillsModel.getAll()
    });
}

function show(req, res){
    console.log(req.params.id, " <--- req id")
    res.render('skills/show',{
        skill: skillsModel.getOne(req.params.id)
    });
}

function newSkill(req, res){
    res.render('skills/new')
}

function create(req,res){
    skillsModel.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    skillsModel.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    let skill = skillsModel.getOne(req.params.id)
    res.render('skills/edit', {skill: skill})
}

function update(req, res){
    const skillToUdpdate = skillsModel.getOne(req.params.id);
    skillToUdpdate.skill = req.body.update;
    res.redirect('/skills');
}

module.exports = {
    index: index,
    show: show,
    new : newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}