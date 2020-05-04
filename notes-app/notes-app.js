const notes = getSavedNotes()
<!DOCTYPE html>

<html>
    <head>
        
    </head>
    <body>
        <h1>Notes App</h1>
        <h2>Take notes and never forget</h2>
        <input id="search-text" type="text" placeholder="Filter notes">
        <select id="filter-by">
            <option value="byEdited">Sort by last edited</option>
            <option value="byCreated">Sort by recently created</option>
            <option value="alphabetical">Sort alphabetically</option>
        </select>
        <div id="notes"></div>
        <button id="create-note">Create Note</button>  
        <script src="http://wzrd.in/standalone/uuid%2Fv4@latest"></script>
        <script src="notes-functions.js"></script>
        <script src="notes-app.js"></script>
    </body>
</html>
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})