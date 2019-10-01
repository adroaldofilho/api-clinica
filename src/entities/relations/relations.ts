const Relations = (model) => {
    model.Author.hasMany(model.Post, { foreignKey: 'authorId'});
    model.Post.belongsTo(model.Author, { foreignKey: 'authorId'});

    model.Usuario.hasMany(model.Profissional, { foreignKey: 'idUsuario' });
    model.Profissional.belongsTo(model.Usuario, { foreignKey: 'idUsuario'});

    model.Profissional.hasMany(model.ProfissionalEspecialidade, { foreignKey: 'idProfissional' });
    model.ProfissionalEspecialidade.belongsTo(model.Profissional, { foreignKey: 'idProfissional' });

    model.Especialidade.hasMany(model.ProfissionalEspecialidade, { foreignKey: 'idEspecialidade' });
    model.ProfissionalEspecialidade.belongsTo(model.Especialidade, { foreignKey: 'idEspecialidade' });

    model.Clinica.hasMany(model.ProfissionalClinica, { foreignKey: 'idClinica' });
    model.ProfissionalClinica.belongsTo(model.Clinica, { foreignKey: 'idClinica' });

    model.Profissional.hasMany(model.ProfissionalClinica, { foreignKey: 'idProfissional' });
    model.ProfissionalClinica.belongsTo(model.Profissional, { foreignKey: 'idProfissional' });

    model.ProfissionalClinica.hasMany(model.Consulta, { foreignKey: 'idProfissionalClinica' });
    model.Consulta.belongsTo(model.ProfissionalClinica, { foreignKey: 'idProfissionalClinica' });

    model.Usuario.hasMany(model.Consulta, { foreignKey: 'idUsuario' });
    model.Consulta.belongsTo(model.Usuario, { foreignKey: 'idUsuario'});

    // model.Profissional.belongsToMany(model.Especialidade, { through: 'especialidadedoprofissional' });
    // model.Especialidade.belongsToMany(model.Profissional, { through: 'especialidadedoprofissional' });
};
module.exports = Relations;