/* friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]) */

function friend(friends){
    return friends.filter((word) => word.length === 4)
      
    }