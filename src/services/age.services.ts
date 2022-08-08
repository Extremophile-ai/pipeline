export default {
  async getPersonAge(dob: string) {
    let dobSuffix = "T00:00:00Z"
    const formatDob = `${dob}${dobSuffix}`
    let dateOfBirth = new Date(formatDob)
    let currentDate = new Date()
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear()
    return age
  }
}