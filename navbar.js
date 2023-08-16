let navBarLinks = [
    {
        name: "Home",
        link: "index.html",
    },
    {
        name: "Page 1",
        link: "page1.html",
    },
    {
        name: "Page 2",
        link: "page2.html",
    },
    {
        name: "Page 3",
        link: "page3.html",
    },
];

navBarLinks.forEach((e) => {
    document.getElementById(
        "navBar"
    ).innerHTML += `<li><a href=${e.link}>${e.name}</a></li>`;
});
