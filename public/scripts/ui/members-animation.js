const teamIcon = document.querySelector("#team-icon");
const membersList = document.querySelector("#members-list");
const memberCard = document.querySelectorAll(".member-card");

const memberAnimationEnter = () => {
    teamIcon.addEventListener("mouseenter", () => {
        membersList.classList.toggle("active");
        memberCard.forEach((e) => {
            e.classList.toggle("active");
        });
    });
}
const memberAnimationLeave = () => {
    teamIcon.addEventListener("mouseleave", () => {
        membersList.classList.toggle("active");
        memberCard.forEach((e) => {
            e.classList.toggle("active");
        });
    });
}
export const initMembers = () => {
    memberAnimationEnter();
    memberAnimationLeave();
}