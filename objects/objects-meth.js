//

let restorant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailavility: function (partySize) {
        //console.log(this.guestCapacity)
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
      // console.log(partySize)
 
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty : function (partySize) {
        this.guestCount = this.guestCount - partySize

    }
}

// seatParty
//removeParty
restorant.seatParty(72)
console.log(restorant.checkAvailavility(4))
restorant.removeParty(5)
console.log(restorant.checkAvailavility(4))