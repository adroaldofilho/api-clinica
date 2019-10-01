export default function (sequelize, DataTypes){
    const ProfissionalClinica = sequelize.define('ProfissionalClinica', {
        idProfissionalClinica: {
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
        idClinica: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
     
    });
    
    return ProfissionalClinica;
}