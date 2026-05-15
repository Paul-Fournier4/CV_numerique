const projet = [
    {
        nom: "QCM",
        code: ["python"],
        image: "Image/Projet_QCM.png",
        link: "https://github.com/Paul-Fournier4/QCM"
    },
    {
        nom: "Blog pour le lycée Jean XXIII",
        code: ["html", "css"],
        image: "Image/Blog_Jean23.png",
        link: "https://github.com/Paul-Fournier4/Blog_Jean_XXIII"
    },
    {
        nom: "Scrabble",
        code: ["python"],
        image: "Image/Projet_Scrabble.png",
        link: "https://github.com/Paul-Fournier4/Jeu_de_scrabble"
    },
    {
        nom: "CV en ligne",
        code: ["html", "css", "javascript"],
        image: "Image/CV_numerique.png",
        link: "https://github.com/Paul-Fournier4/CV_numerique"
    }
];

const projets = document.getElementById("projets-container");
const filterSelect = document.getElementById("CodesFilter");
const onlyAndSelect = document.getElementById("only-and");

const allcode = [...new Set(projet.flatMap(p => p.code))];
allcode.forEach(code => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;
    filterSelect.appendChild(option);
});

function displayProjects(filteredProjects) {
      projets.innerHTML = "";

      filteredProjects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("article");

        div.innerHTML = `
          <a href="${project.link}" target="_blank">
            <h3>${project.nom}</h3>
          
          <div class="codes">
            ${project.code.map(code => `
              <p class="code">${code}</p>
            `).join("")}
          </div>
          <img src="${project.image}" alt="${project.nom}" class="imgprojet"></a>
        `;

        projets.appendChild(div);
      });
    }

    // Filtrage
    function updateProjectDisplay() {
      const selectedCode = filterSelect.value;
      const onlyAnd = onlyAndSelect.value;
      if (selectedCode === "all") {
        displayProjects(projet);
        return;
      }

      const filtered = projet.filter(project => {
        if (onlyAnd === "only") {
          return project.code.length === 1 && project.code.includes(selectedCode);
        } else {
          return project.code.includes(selectedCode);
        }
      });

      displayProjects(filtered);
    }

    filterSelect.addEventListener("change", updateProjectDisplay);
    onlyAndSelect.addEventListener("change", updateProjectDisplay);

    // Affichage initial
    displayProjects(projet);
