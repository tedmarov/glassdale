import { criminalList } from "./criminals/criminalList.js"
import { convictionSelect } from "./convictions/convictionSelect.js"
import { officerSelect } from "./officers/officerSelect.js"
import { NoteForm } from "./notes/noteForm.js"
import { NoteList } from "./notes/noteList.js"
import { officerList } from "./officers/officerList.js"
import "./criminals/alibiList.js"
import { renderWitnessButton } from "./witnesses/witnessStatementButton.js"
import "./witnesses/witnessStatementList.js"
import { renderFacilityButton } from "./facilities/displayFacilitiesButton.js"
import "./facilities/facilityList.js"

convictionSelect()
officerList()
criminalList()
officerSelect()
NoteForm()
NoteList()
renderWitnessButton()
renderFacilityButton()