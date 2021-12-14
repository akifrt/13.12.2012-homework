const buttons = document.querySelectorAll('button')
const boxes = document.querySelectorAll('.box')

buttons.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		clearBox()
		boxes.forEach(box=>{
			if(box.classList.contains(e.target.innerHTML.toLowerCase())){
				box.style.backgroundColor = e.target.innerHTML.toLowerCase()
			}
		})
	})
})

function clearBox(){
	boxes.forEach(box=>{
		box.style.backgroundColor = ''
	})
}
