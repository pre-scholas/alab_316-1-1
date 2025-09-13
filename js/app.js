// import '.css/styles.css';
// Menu data structure
var menuLinks = [
	{ text: 'about', href: '/about' },
	{
		text: 'catalog',
		href: '#',
		subLinks: [
			{
				text: 'all',
				href: '/catalog/all',
			},
			{
				text: 'top selling',
				href: '/catalog/top',
			},
			{
				text: 'search',
				href: '/catalog/search',
			},
		],
	},
	{
		text: 'orders',
		href: '#',
		subLinks: [
			{
				text: 'new',
				href: '/orders/new',
			},
			{
				text: 'pending',
				href: '/orders/pending',
			},
			{
				text: 'history',
				href: '/orders/history',
			},
		],
	},
	{
		text: 'account',
		href: '#',
		subLinks: [
			{
				text: 'profile',
				href: '/account/profile',
			},
			{
				text: 'sign out',
				href: '/account/signout',
			},
		],
	},
];


const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// console.log(mainEl)
// topMenuEl styling
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
// console.log(topMenuEl)

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

// part 2

const a = document.createElement('a')

for(let menuLink of menuLinks) {
    const link = document.createElement('a')
    link.textContent = menuLink['text']
    link.href = menuLink['href']
    topMenuEl.appendChild(link)
    console.log(link)
}

// Part 3: Creating the Submenu

const subMenuEl = document.getElementById('sub-menu',);
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Part 4 Adding Menu Interaction

const topMenuLinks = topMenuEl.querySelectorAll('#top-menu a');
console.log(topMenuLinks)
let showMenu = false;


 topMenuEl.addEventListener('click', function (event) {
// 	// call the event object's preventDefault() method.
 	event.preventDefault();
	 // 	// immediately return if the element clicked was not an <a> element.
	 const link = event.target.textContent;
 	if (event.target.textContent !== 'a') return;
	 console.log(link)
		 
	 if (link.classList.contains('active')) {
		link.classList.remove('active');
		subMenuEl.style.top = '0';
	 }

	 topMenuLinks.forEach(function (link) {
		link.classList.remove('active');
	 });
		
	 link.classList.add('active');

	 const linkData = menuLinks.find(function (linkObject) {
		return linkObject.text === link;
	 });
	 console.log(linkData)
	 if (linkData.subLinks) {
		 showMenu = true;
		 subMenuEl.style.top = '100%';

	 } else {
		 subMenuEl.style.top = '0';
		showMenu = false;
	 }
		
	})
	//	The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// 	topMenuLinks.forEach(function (link) {
// 	link.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		if (event.target.textContent !== 'a') {
// 			return;
// 		} else {
// 			event.target.classList.toggle('active',);
// 		}
// 	});
// } )
	
	// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
	// Hint: Removing a non-existent class from an element does not cause an error!

//});
// Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.



console.log(a)
console.log(topMenuLinks);
console.log(subMenuEl)
