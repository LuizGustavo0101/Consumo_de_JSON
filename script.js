async function fetchData() {
    try {
        const response = await fetch('data.json'); // Fetch the JSON file, make sure it's in the same directory

        const data = await response.json(); // Parse the JSON data
        
        const jobsList = document.getElementById('container'); // Get the container element from the HTML

        data.alunos.forEach(job => { // Loop through each student in the data
            const jobCard = document.createElement('div'); // Create a new <div> element
            jobCard.classList.add('card'); // Add a CSS class for styling (optional)

            jobCard.innerHTML = `
                <p><strong> Nome: </strong> <span>${job.nome}</span></p>
                <p><strong> Idade: </strong> <span>${job.idade}</span></p>
                <p><strong> Nota: </strong> <span>${job.nota}</span></p>  
                <p><strong> Disciplinas: </strong> <span>${job.disciplinas.join(', ')}</span></p>
            `;
            jobsList.appendChild(jobCard); // Append the <div> element to the container
        });

    } catch (error) {
        console.error('Erro ao buscar dados:', error); // Handle errors
    }
}

// Call the function to fetch and consume the data
fetchData();
