


export const orderAlfab = (data, sortBy) => {
    const order =data.sort(function(a,b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      } else if (a.name == b.name) { 
        return 0
      } else { 
        return -1
      }
    })
    if (sortBy === 'desc'){
      order.reverse()
    }
    return order
  };

  
  
  
 

  