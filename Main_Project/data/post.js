// post.js

const posts = [
  {
    id: 1,
    title: "My First Project Using Just HTML, CSS & JS",
    date: "2025-06-30",
    author: "Alex Turner",
    summary: "A personal journey into building a functional website without frameworks.",
    content: `
      <p>I built a blog from scratch using only core frontend tech. It helped me deeply understand how the browser processes HTML and CSS, and how to manipulate the DOM with vanilla JavaScript.</p>
      <p>It was hard at first, but empowering. Now I feel ready to use any framework with a stronger foundation.</p>
    `
  },
  {
    id: 2,
    title: "Why Pure HTML, CSS & JS Still Matter in 2025",
    date: "2025-06-29",
    author: "Riya Patel",
    summary: "Before reaching for a framework, here's why you should know the basics.",
    content: `
      <p>Building with no libraries improves loading speed, accessibility, and device compatibility. I use it for personal sites and prototypes because it's quick and lightweight.</p>
    `
  },
  {
    id: 3,
    title: "Lessons Learned Building a Blog Without Frameworks",
    date: "2025-06-28",
    author: "Dev Sharma",
    summary: "Building a static blog site taught me more than any course ever could.",
    content: `
      <p>I created a full blog using just JavaScript objects and DOM manipulation. The biggest win was learning how routing and rendering actually work under the hood.</p>
    `
  },
  {
    id: 4,
    title: "Mastering CSS Grid Through a Real Project",
    date: "2025-06-27",
    author: "Emily Johnson",
    summary: "I learned CSS Grid by designing a responsive blog layout — here's what worked.",
    content: `
      <p>Working on real layouts helped me understand auto-fit, fractional units, and breakpoints better than tutorials ever did.</p>
    `
  },
  {
    id: 5,
    title: "Debugging JavaScript Without a Framework",
    date: "2025-06-26",
    author: "Mohit Rao",
    summary: "Relying only on browser dev tools, here's how I found and fixed bugs.",
    content: `
      <p>Console logs, breakpoints, and the DOM inspector taught me to trace bugs manually — an essential dev skill often masked by frameworks.</p>
    `
  },
  {
    id: 6,
    title: "How I Made My Blog Mobile-Responsive with Flexbox",
    date: "2025-06-25",
    author: "Sana Ali",
    summary: "Using Flexbox and media queries, I turned a rigid layout into a mobile-friendly design.",
    content: `
      <p>This experience taught me the power of CSS alone to make fluid, adaptable layouts across devices.</p>
    `
  },
  {
    id: 7,
    title: "Storing Blog Posts in JavaScript: A Simple CMS Alternative",
    date: "2025-06-24",
    author: "Daniel Lee",
    summary: "I simulated a database using JS objects — and it worked surprisingly well.",
    content: `
      <p>For static sites, you don't always need a backend. JavaScript can simulate dynamic content easily if structured right.</p>
    `
  },
  {
    id: 8,
    title: "Creating a Search Filter with Vanilla JavaScript",
    date: "2025-06-23",
    author: "Priya Mehta",
    summary: "No libraries — just input events and array filtering.",
    content: `
      <p>I used filter, and dynamic HTML to add instant search. It’s satisfying to watch it work with zero dependencies.</p>
    `
  },
  {
    id: 9,
    title: "How I Handled URL Parameters Without Routing Libraries",
    date: "2025-06-22",
    author: "Kabir Malik",
    summary: "URLSearchParams and custom logic powered my blog navigation.",
    content: `
      <p>Instead of using React Router, I built my own simple route system using query strings and dynamic DOM injection. Great learning experience!</p>
    `
  },
  {
    id: 10,
    title: "From Zero to Blog: What I Learned in One Weekend",
    date: "2025-06-21",
    author: "Neha Singh",
    summary: "Built a static blog site in 48 hours and here’s what surprised me.",
    content: `
      <p>The speed, simplicity, and satisfaction of seeing results fast made me fall in love with raw HTML, CSS, and JS again.</p>
    `
  }
];



const postContainer = document.getElementById('post');
const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get('id'));

const post = posts.find(p => p.id === postId);

if (post) {
  postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <p><small>${post.date} by ${post.author}</small></p>
    <div>${post.content}</div>
  `;
} else {
  postContainer.innerHTML = '<p>Post not found.</p>';
}
