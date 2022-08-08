export default {
  validateDob(dob: string) {
    try {
      const parseDob = parseInt(dob)
      const isValidDate = new Date(parseDob);
      const currentDate = new Date()
      const timestamp = isValidDate.getTime();
      if (typeof timestamp !== 'number' || Number.isNaN(timestamp) || isValidDate > currentDate) {
        throw new Error("please enter a valid date")
      } 
      return isValidDate
    } catch (error) {
      throw error
    }

  }
}