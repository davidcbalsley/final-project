

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING
        },
        password: {
        type: DataTypes.STRING
    },
        firstname: {
        type: DataTypes.STRING
    },
        lastname: {
        type: DataTypes.STRING
    },
        streetaddress: {
        type: DataTypes.STRING
    },
        aptnumber: {
        type: DataTypes.STRING
    },
        city: {
        type: DataTypes.STRING
    },
        state: {
        type: DataTypes.STRING
    },
        zip: {
        type: DataTypes.STRING
    },
        license: {
        type: DataTypes.STRING
    },
        platestate: {
        type: DataTypes.STRING
    }  ,
    })
}