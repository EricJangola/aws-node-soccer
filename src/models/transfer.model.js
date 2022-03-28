class Transfer {
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

exports.Transfer = Transfer;