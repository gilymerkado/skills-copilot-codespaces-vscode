function skillsMember() {
  const skills = document.querySelector('.skills');
  const skillsTop = skills.offsetTop;
  const skillsHeight = skills.offsetHeight;
  const skillsBottom = skillsTop + skillsHeight;

  const member = document.querySelector('.member');
  const memberTop = member.offsetTop;
  const memberHeight = member.offsetHeight;
  const memberBottom = memberTop + memberHeight;

  if (skillsBottom > memberTop && skillsTop < memberBottom) {
    member.classList.add('active');
  } else {
    member.classList.remove('active');
  }
}