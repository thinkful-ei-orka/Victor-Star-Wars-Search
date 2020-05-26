export const findResultsForList = (results= [], listId) => (
     (!listId) ? results : results.filter(result => result.listId === listId)
   )
