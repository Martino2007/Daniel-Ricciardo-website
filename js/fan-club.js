document.addEventListener("DOMContentLoaded", function() {
  const fanClubForm = document.getElementById("fan-club-form");

  if (fanClubForm) {
      fanClubForm.addEventListener("submit", function(event) {
          event.preventDefault();
          alert(`Thank you for joining the fan club, ${fanClubForm.elements["name"].value}!`);
          fanClubForm.reset();
      });
  }
});
