const getDOM = selector => () => {
  return document.querySelector(selector);
};

document.title = `${main.name}`

// Values DOM nodes
const dom = {
  main: {
    name: getDOM('#main #name'),
    mail: getDOM('#main #mail'),
    img: getDOM('#main #img'),
    role: getDOM('#main #role'),
    role2: getDOM('#main #role2'),
    connects: getDOM('#main #connects'),
    links: getDOM('#main #links')
  },
  projects: getDOM('#projects'),
  logo: getDOM('#projects-page #logo')
};

function assignDOM(dom, value, options) {
  console.log('dom, value, img:', dom, value, img);

  if (options && options.isImg) {
    dom.src = value;
    return;
  }

  if (options && options.isAdjacent) {
    dom.insertAdjacentHTML('afterbegin', value);
  }

  dom.innerHTML = value;
}

// Assigning

// MAIN

assignDOM(dom.main.name(), main.name);
assignDOM(dom.main.mail(), main.mail);
dom.main.mail().href = `mailto:${main.mail}?Subject=Hello%20again`;
assignDOM(dom.main.img(), main.img, { isImg: true });
assignDOM(dom.main.role(), main.role);
assignDOM(dom.main.role2(), main.role2);
// assignDOM(dom.main.links(), main.links)

// External Links (ICONS)
const connectsDOM = main.connects
  .map(
    ({ name, iconName, link }) =>
      `<a href=${link} target="_blank"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
  )
  .join('\n');
assignDOM(dom.main.connects(), connectsDOM);

// Internal Links
const getLinks = links =>
  links
    .map(({ name, link }) => `<a href="${link}" class="text-blue-500" >${name}</a>`)
    .map((link, index, links) => index === links.length - 1 ? link: `${link} - `)
    .join('\n');
assignDOM(dom.main.links(), getLinks(main.links));

