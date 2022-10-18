// HTML template

const navbar = document.querySelector('.navbar')
const ul = document.createElement('ul')
navbar.appendChild(ul)

// [href, topic]
const topics = [
    ['./intro.html', 'Intro'],
    ['./get-started.html', 'Get Started'],
    ['./comments.html', 'Comments'],
    ['./variables.html', 'Variables'],
    ['./numbers.html', 'Numbers'],
    ['./strings.html', 'Strings'],
    ['./casting.html', 'Casting'],
    ['./booleans.html', 'Booleans'],
    ['./operators.html', 'Operators'],
    ['./if-else.html', 'If-Else'],
    ['./while-loops.html', 'While loops'],
    ['./for-loops.html', 'For loops'],
    ['./function.html', 'Function']
]

// Add li element to ul
// <li><a href="href" >(Python + text)</li>
let addListItem = (href, text) => {
    const li = document.createElement('li')
    ul.appendChild(li)
    const a = document.createElement('a')
    li.appendChild(a)
    a.setAttribute('href', href)
    a.innerHTML = 'Python ' + text

    // Change bg-color on active topic
    let currentTopic = './' + window.location.href.split('/').at(-1)
    if (href == currentTopic) {
        a.setAttribute('id', 'active-topic')
    }
}

// main-toic
// <li class="main-topic">Python Tutorial</li>
const mainTopic = document.createElement('li')
mainTopic.setAttribute('class', 'main-topic')
mainTopic.innerHTML = 'Python Tutorial'
ul.appendChild(mainTopic)

mainTopic.addEventListener('click', () => {
    window.open('./index.html', '_self')
})

// topics
topics.forEach(index => {
    // <li><a href="href">Python {text}</a></li>
    addListItem(index[0], index[1])
})

// Python-logo
const logo = document.createElement('li')
logo.innerHTML = '<img class="python-logo" src="./Python-logo.png" width="70%" alt="Python-logo">'
ul.appendChild(logo)
