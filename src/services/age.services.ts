export default {
  async getPersonAge(dob: Date) {
    let dateOfBirth = new Date(dob);
    let currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    return age;
  },
}