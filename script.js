const translateButton = document.getElementById('translate');
const translateButtonText = document.querySelector('.translate .text-element');
const welcomeText = document.getElementById('welcome');
const aboutMe = document.querySelector('.about-me .text-element');
const myProjects = document.querySelector('.projects .text-element');
const welcomeText2 = document.getElementById('welcome2');
const myName = document.getElementById('myName');
const pFirst = document.getElementById('pFirst');
const pSecond = document.getElementById('pSecond');
const slidesIntro = document.getElementById('slidesIntro');

function changeText(element, newText) {
    element.classList.remove('fade-in');
    setTimeout(() => {
        element.textContent = newText;
        element.classList.add('fade-in');
    }, 500); // Match the duration of the CSS transition
}

translateButton.addEventListener('click', function() {
    if (translateButton.textContent == 'Leia em Português') {
        translateButton.textContent = 'Read in English';
        changeText(welcomeText, 'Bem-vindo');
        changeText(aboutMe, 'Sobre Mim');
        changeText(myProjects, 'Meus Projetos');
        changeText(welcomeText2, 'Bem-vindo');
        changeText(myName, 'Olá, eu sou o Trevor.');
        changeText(pFirst, 'Sou um web designer com uma paixão pela perfeição. Com experiência em todos os aspectos do desenvolvimento web, posso acompanhar um projeto do início ao fim. Com formação universitária em matemática e experiência prática em desenvolvimento web, trago uma combinação de habilidades lógicas de resolução de problemas e conhecimento prático. Sou extremamente proficiente em HTML, CSS, JavaScript e Python. Também estou familiarizado com bibliotecas populares de JavaScript como React e jQuery, bem como tecnologias de backend como PHP, node.js e Flask.');
        changeText(slidesIntro, 'Confira meus projetos mais recentes');
        changeText(pSecond, 'Sou fluente em inglês e português. Adoro viajar e passei um tempo significativo na América do Sul. Minhas experiências de viagem me deram uma habilidade para comunicação e trabalho em equipe intercultural, além da capacidade de me adaptar a novas e desconhecidas circunstâncias. Atualmente resido no Brasil com minha linda esposa. No meu tempo livre, adoro ler, fazer trilhas, andar de caiaque e passar tempo com minha família.');
    } else if (translateButton.textContent == 'Read in English') {
        translateButton.textContent = 'Leia em Português';
        changeText(welcomeText, 'Welcome');
        changeText(aboutMe, 'About Me');
        changeText(myProjects, 'My Projects');
        changeText(welcomeText2, 'Welcome');
        changeText(myName, "Hey there, I'm Trevor.");
        changeText(slidesIntro, 'Check out my latest projects');
        changeText(pFirst, "I'm a web designer with a passion for perfection. With experience in all aspects of web development, I can follow a project from start to finish. With university education in mathematics, and hands-on experience in web development, I bring a combination of logical problem-solving skills and real-world know-how to the table. I am extremely proficient in HTML, CSS, JavaScript, and Python. I am also familiar with popular JavaScript libraries like React and jQuery, as well as backend technologies like PHP, node.js, and Flask.");
        changeText(pSecond, "I am fluent in both English and Português. I love to travel, and I have spent a significant amount of time in South America. My travel experiences have endowed me with a knack for cross-cultural communication and teamwork, as well as the ability to adapt to new and unfamiliar circumstances. I currently reside in Brazil with my beautiful wife. In my spare time I love reading, hiking, kayaking, and spending time with my family.");
    }
});

// Initial fade-in for the text elements
document.querySelectorAll('.text-element').forEach(element => element.classList.add('fade-in'));
