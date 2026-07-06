function getReputation(likes, dislikes, editMessages, allMessages) {
  
  if(allMessages === 0) {
    return 0; 
  } 
  
  if(dislikes > likes) {
   return likes - dislikes;
  } 

  let coefficient = (allMessages - editMessages) / allMessages;
  return (likes - dislikes) * coefficient;
  
}

console.log(getReputation(10, 10, 4, 200));