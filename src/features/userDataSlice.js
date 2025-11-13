const { createSlice } = require("@reduxjs/toolkit");


const educationData = {collegeName : "", passedOutYear :"", course :"", cgpa:"", percentage :"" }
const projectStructure  ={projectName:"",projectDetails : "",preview:"",gitHub:""}
const educationStructure = {higherSchool : educationData,degree : educationData}

const initialState = {
    intro : {firstName : "", lastName :"", phoneNo: "", email :"", gitHub : "", linkedIn:""},
    objective : "",
    skills : [],
    Projects : [projectStructure],
    education : [educationStructure]
}

const userDataSlice = createSlice({
    name : "userData",
    initialState ,
    reducers : {}
})


export default userDataSlice.reducer