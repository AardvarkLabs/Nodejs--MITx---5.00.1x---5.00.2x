let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,

    // methods 
    checkAvailability: function (partySize) {
       // console.log(partySize) 
       // this - refers to the whole object

        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(72)
console.log(restaurant.checkAvailability(4))

