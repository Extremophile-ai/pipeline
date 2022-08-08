export default {
  validateDob(dob: string) {
    try {
      const validDateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dob.match(validDateFormatRegex) === null) {
        throw new Error("valid dob format is: YYYY-MM-DD")
      }

      const isValiddate = new Date(dob);
      const timestamp = isValiddate.getTime();
    
      if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        throw new Error("please enter a valid date")
      }

      return true
    } catch (error) {
      throw error
    }

  }
}