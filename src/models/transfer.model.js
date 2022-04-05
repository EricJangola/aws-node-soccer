const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        originalTeam: { type: DataTypes.STRING, allowNull: false },
        newTeam: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.STRING, allowNull: false },
        player: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Transfers', attributes, options);
}

/*class Transfer {
    fields = {
        OriginalTeam: null,
        NewTeam: null,
        Date: new Date(),
        Price: null
    };

    fill(newFields) {
        for(var field in this.fields) {
            if(this.fields[field] !== 'undefined') {
                this.fields[field] = newFields[field];
            }
        }
    }

    getOriginalTeam() {
        return this.fields.OriginalTeam;
    }

    getNewTeam() {
        return this.fields.NewTeam;
    }

    getPrice() {
        return this.fields.Price;
    }

    setOriginalTeam(OriginalTeam) {
        this.fields.OriginalTeam = OriginalTeam;
    }

    setOriginalTeam(NewTeam) {
        this.fields.NewTeam = NewTeam;
    }

    setPrice(Price) {
        this.fields.Price = Price;
    }
}

exports.Transfer = Transfer;*/