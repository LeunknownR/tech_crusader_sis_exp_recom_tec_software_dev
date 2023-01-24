const teamIcon = document.querySelector("#team-icon");
const membersList = document.querySelector("#members-list");
const memberCard = document.querySelectorAll(".member-card");

export function memberAnimationEnter() {
    teamIcon.addEventListener("mouseenter", () => {
        membersList.classList.toggle("active");
        memberCard.forEach((e) => {
            e.classList.toggle("active");
        });
    });
}
export function memberAnimationLeave() {
    teamIcon.addEventListener("mouseleave", () => {
        membersList.classList.toggle("active");
        memberCard.forEach((e) => {
            e.classList.toggle("active");
        });
    });
}
