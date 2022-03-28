class Team {
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

exports.Team = Team;