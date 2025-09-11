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

console.log(mainEl)

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
console.log(topMenuEl)

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

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Part 4

const topMenuLinks = topMenuEl.querySelectorAll('a');
function handleClick(event) {
    event.preventDefault();


}
console.log(topMenuLinks);

console.log(subMenuEl)