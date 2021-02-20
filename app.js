const note = document.querySelector('.textarea');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const outputContainer = document.querySelector('.output-container');

submitBtn.addEventListener('click',submitNote);
modalBtn.addEventListener('click',function(){
    modal.style.display = 'none';
})
let count =0;
function createElements(){
   
    for(let i = 0; i<=0; i++){

        noteParagraph = note.value;
        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.innerText = 'Note ';
    
        const p = document.createElement('p');
        p.innerHTML = noteParagraph;
        p.classList.add('output-p');
        
        const btn = document.createElement('button');
        btn.innerText = 'View Details';
        btn.classList.add('output-btn');
        btn.addEventListener('click',function(event){
            modal.style.display = 'block';
            const modalParagraph = document.querySelector('.modal-p');
            modalParagraph.innerText = event.target.previousElementSibling.innerText; 
        })
        // append elements
        div.append(header,p,btn);
        outputContainer.appendChild(div);
        note.value = '';
    }
    
}
//check number of word in the input
// function wordCount(words){
//     return words.split(' ').length;
// }


function submitNote(event){
    event.preventDefault();
    //check if input is empty
    if(note.value === ''){
        alert('Empty input!...type your notes.')
        return
    }
    document.querySelector('.check-items').style.display = 'none';
    createElements();
    
    // console.log(wordCount(toString(note.value)));

}

 