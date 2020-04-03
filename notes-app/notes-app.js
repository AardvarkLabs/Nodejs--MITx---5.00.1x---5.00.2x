const notes = []

const filters = {
  searchText: ""
}


// localStorage.setItem('location', 'Philadelphia')
/*   
   console.log(localStorage.getItem('location'))
   localStorage.removeItem('location')
   
 */
// localStorage.clear();

/* const user = {
    name: 'Andrew',
    age: 27

}
const userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem('user', userJSON)

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  }); */
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}


/* const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)
 */

   const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
  document.querySelector("#notes").innerHTML = "";
  // document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
       noteEl.textContent = 'unnamed note'
    }

    // noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  })
 // END OF CONST RENDERFILTES CONST
   }

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  /* e.target.textContent = "The button was clicked"; */
  notes.push ({
          title: '',
          body: ''
      })
      localStorage.setItem('notes'.JSON.stringify(notes))
      renderNotes(notes, filters)
})


document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);

});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
