const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        place: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Teams', attributes, options);
}

/*class Team {
    fields = {
        Name: null,
        Place: null
    };

    fill(newFields) {
        for(var field in this.fields) {
            if(this.fields[field] !== 'undefined') {
                this.fields[field] = newFields[field];
            }
        }
    }

    getName() {
        return this.fields.Name;
    }

    getPlace() {
        return this.fields.Place;
    }

    setName(Name) {
        this.fields.Name = Name;
    }

    setPlace(Place) {
        this.fields.Place = Place;
    }
}

exports.Team = Team;*/