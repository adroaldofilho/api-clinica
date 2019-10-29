
export default function (sequelize, DataTypes){

    const Consulta = sequelize.define('Consulta', {
        idConsulta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        idProfissionalClinica: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dataHoraConsulta: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        statusConsulta: {
            type: DataTypes.INTEGER, // 1 - Marcada, 2 - Confirmada, 3 - Paciente Chegou, 4 - Em Andamento, 5 - Cancelada, 9 - Encerrada
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        idPlano: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    
    return Consulta;
}