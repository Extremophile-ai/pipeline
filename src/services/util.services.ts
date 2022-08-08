export default {
  validateDob(dob: string) {
    try {
      const validDateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dob.match(validDateFormatRegex) === null) {
        throw new Error("valid dob format is: YYYY-MM-DD")
      }
      return true
    } catch (error) {
      throw error
    }

  }
}