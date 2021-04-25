export const changeExercise = (newData: string) => {
   return {
      type: "CHANGE_EXERCISE",
      payload: newData
   }
}