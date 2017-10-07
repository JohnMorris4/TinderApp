//STATE ARGUMENT IS NOT APPLICATION STATE, ONLY
//THE STATE THE REDUCER IS RESPONSIBLE FOR

export default function (state = null, action){
   switch(action.type){
       case 'BOOK_SELECTED':
       return action.payload;
   }
   
    return state;
}