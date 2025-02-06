function skillsMember() {
  var member = this;
  member.skills = [];
  member.addSkill = function(skill) {
    member.skills.push(skill);
    return member;
  };
  member.removeSkill = function(skill) {
    member.skills = member.skills.filter(function(s) {
      return s !== skill;
    });
    return member;
  };
  return member;
}