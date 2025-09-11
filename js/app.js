// import '.css/styles.css';
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


const mainEl = document.querySelector('main')
mainEl.style.backgroundColor =
	'var(--main-bg)';
    mainEl.innerHTML =
        '<h1>DOM Manipulation</h1>';
        
        mainEl.classList.add(
			'flex-ctr',
		);


console.log(mainEl)

const topMenuEl =
    document.getElementById('top-menu');
topMenuEl.style.height = '100%';
    topMenuEl.style.backgroundColor =
	'var(--top-menu-bg)';
console.log(topMenuEl)

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.