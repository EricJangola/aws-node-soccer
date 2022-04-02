const { DataTypes } = require('sequelize');
const Team = require('./team.model');

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        birthplace: { type: DataTypes.STRING, allowNull: false },
        country: { type: DataTypes.STRING, allowNull: false },
        teamId: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    
    const player = sequelize.define('Players', attributes, options);
    //player.hasOne(Team);

    return player;
}

module.exports = model;

/*class Player {
    fields = {
        Name: null,
        BirthDate: null,
        Country: new Date(),
        Team: null
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

    getBirthDate() {
        return this.fields.BirthDate;
    }

    getCountry() {
        return this.fields.Country;
    }

    getTeam() {
        return this.fields.Team;
    }

    setName(Name) {
        this.fields.Name = Name;
    }

    setBirthDate(BirthDate) {
        this.fields.BirthDate = BirthDate;
    }

    setCountry(Country) {
        this.fields.Country = Country;
    }

    setTeam(Team) {
        this.fields.Team = Team;
    }
}

exports.Player = Player;*/