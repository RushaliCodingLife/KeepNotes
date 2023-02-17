// const addBtn = document.getElementById("add");

// // add data in local storage
// const updateLocalStorage = () => {
//   const textareaData = document.querySelectorAll("textarea");
//   const notes = [];
//   console.log(textareaData);
//   textareaData.forEach((note) => {
//     return notes.push(note.value);
//   });

//   console.log(notes);

//   localStorage.setItem("notes", JSON.stringify(notes));
// };

// // add input
// const addNewNote = (text = "",local_note) => {
  
//   const note = document.createElement("div");
//   note.classList.add("note");

//   const htmlData = `
//   <div class="notes">
// <div class="operation">
//   <button class="edit"><i class="fas fa-edit"></i></button>
//   <button class="delete"><i class="fas fa-trash-alt"></i></button>
// </div>

// <div class="main ${text ? "" : "hidden"}"></div>
// <textarea class=" ${text ? "hidden" : ""}"></textarea>
// </div>
// `;

//   note.innerHTML = htmlData;

//   document.body.appendChild(note);

//   //by reference
//   const editButton = note.querySelector(".edit");
//   const delButton = note.querySelector(".delete");
//   const mainDiv = note.querySelector(".main");
//   const textarea = note.querySelector("textarea");

//   // delete button
//   delButton.addEventListener("click", () => {
//     note.remove();
//   });

//   // toggle using edit button
//   textarea.value = text;
//   mainDiv.innerHTML = text;

//   editButton.addEventListener("click", () => {
//     mainDiv.classList.toggle("hidden");
//     textarea.classList.toggle("hidden");
//   });

//   textarea.addEventListener("change", (event) => {
//     const value = event.target.value;
//     mainDiv.innerHTML = value;
//     // console.log(value)

//     updateLocalStorage();
//   });
// };

// // get back the data
// //parse convert string of json text into a javascript object
// const notes = JSON.parse(localStorage.getItem("notes"));
// if (notes) {
//   notes.forEach((note) => addNewNote(note));
// }

// // autocomplete


// const searchNote=(event)=>{
//   console.log({value : event.target.value})
//   let value = event.target.value;
//   const notes = JSON.parse(localStorage.getItem("notes"));
//   console.log({notes})

//   let filterValue = null;
//   if (notes) {
//     filterValue = notes.filter((v) => v.toLowerCase() === value);
//   }
//   console.log({filterValue})
//   const allDiv = document.querySelectorAll(".notes");
//   console.log('divs',allDiv);
//   for(let i =0;i<allDiv.length;i++){
//     const textarea = allDiv[i].querySelector('textarea');
//     if(textarea !== value){
//       allDiv[i].style.display = 'none';
//     }
//   }
// }

// addBtn.addEventListener("click", () => addNewNote());







