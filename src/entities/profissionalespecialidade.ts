export default function (sequelize, DataTypes){
    const ProfissionalEspecialidade = sequelize.define('ProfissionalEspecialidade', {
        idProfissionalEspecialidade: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProfissional: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        idEspecialidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
     
    });
    
    return ProfissionalEspecialidade;
}