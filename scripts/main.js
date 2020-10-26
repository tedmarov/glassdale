import { criminalList } from "./criminals/criminalList.js"
import { convictionSelect } from "./convictions/convictionSelect.js"
import { officerSelect } from "./officers/officerSelect.js"
import { NoteForm } from "./notes/noteForm.js"
import { NoteList } from "./notes/noteList.js"
import { createAlibiEventListener } from "./criminals/alibiList.js"
import { officerList } from "./officers/officerList.js"


convictionSelect()
officerList()
criminalList()
officerSelect()
NoteForm()
NoteList()
createAlibiEventListener()