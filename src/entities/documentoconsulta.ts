export default function (sequelize, DataTypes){
    const DocumentoConsulta = sequelize.define('DocumentoConsulta', {
        idDocumentoConsulta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idConsulta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        textoDocumentoConsulta: {
            type: DataTypes.TEXT
        }
     
    });
    
    return DocumentoConsulta;
}