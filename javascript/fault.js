function showDetails(service) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.textContent = service;
    modalDescription.textContent = `Details about ${service}.`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
