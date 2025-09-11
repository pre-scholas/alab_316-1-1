
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const heading = document.createElement("h1");
const headingtitle = document.createTextNode("DOM Manipulation");
heading.appendChild(headingtitle);
heading.style.color = "white";
mainEl.appendChild(heading);
mainEl.classList.add('flex-ctr')



document.body.appendChild(mainEl);

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')

console.log(topMenuEl);

// Part 3: Adding Menu Buttons

const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let a = document.createElement("a")

for(let menuLink of menuLinks){
    const link=document.createElement("a");
    link.textContent=menuLink["text"]; 
    link.href=menuLink["href"];
    topMenuEl.appendChild(link);}


// Part 3: Creating the submenu

const subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// Part 4

const topMenuLinks = topMenuEl.querySelectorAll("a")
console.log(topMenuLinks)


