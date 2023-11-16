let players=[{name:"test1",
              team:"A"},
              {
                name:"test2",
                team:"A"
              },
            {
                name:"test3",
                team:"B"
            },
            {
                name:"test4",
                team:"A" 
             },
            {
                name:"test5",
                team:"B" 
            },
            {
               name:"test6",
               team:"A" 
            },]
          let filterElement=players.filter(function(currElement,index,arr){
            return currElement.team === "A"
          })
          console.log(filterElement)

          let newfilter=players.filter(function(currElement,index,arr){
            return currElement.team === "B"
          })
          console.log(newfilter)

         