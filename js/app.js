var mobileMenu = document.querySelector('.mobileMenu')
var mobileMenuOpened = document.querySelector('.mobileMenuOpened')
var mobileMenuClose = document.querySelector('.mobileMenuClose')

mobileMenu.addEventListener('click', function () {
	mobileMenuOpened.classList.add('visible')
	document.body.classList.add('overflowHidden')
})

mobileMenuClose.addEventListener('click', function () {
	mobileMenuOpened.classList.remove('visible')
	document.body.classList.remove('overflowHidden')
})

var servicesItems = document.querySelector(".servicesItems")

var blockArr = [
    {
        img: 'assets/ic-construction.png',
        text: 'Construction'
    },
    {
        img: 'assets/ic-pantone.svg',
        text: 'Project Development'
    } ,
	{
        img: 'assets/ic-like.svg',
        text: 'Interior Design'
    },
	{
        img: 'assets/ic-plan.svg',
        text: 'Repairs'
    }
]

blockArr.forEach(function(item){
    var block = document.createElement("div")
    var img = document.createElement("img")
    var text = document.createElement("p")
	

    img.setAttribute("src", item.img)
    text.textContent = item.text
    block.append(img)
    block.append(text)

	block.classList.add('block')

	servicesItems.append(block)
})

