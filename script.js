ocument.getElementById('project-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('project-name').value;
    const description = document.getElementById('project-description').value;
    const link = document.getElementById('project-link').value;
  
    // Create project element
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = 
      <h3>${name}</h3>,
      <p>${description}</p>,
      <a href="${link}" target="_blank">View Project</a>
    ;
  
    // Add to project list
    document.getElementById('project-list').appendChild(projectDiv);
  
    // Clear form
    document.getElementById('project-form').reset();
  });