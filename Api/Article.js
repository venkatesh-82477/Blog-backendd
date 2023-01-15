const get = (request,response)=>{
    response.send([
      {
         id : 1,
         image :"https://img.veenaworld.com/wp-content/uploads/2019/07/Cover-4.jpg?imwidth=1080",
         img:"https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man-400x400.png",
         title:"Joshua Tree Overnight Adventure",
         text1:"Dmitry Nozhenko",
         text2:"Jan 28, 2019 · 10 min read",
         type:"mask"
      },
      {
        id : 2,
        image :"https://img.veenaworld.com/wp-content/uploads/2019/07/Cover-4.jpg?imwidth=1080",
        img:"https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man-400x400.png",
        title:"Joshua Tree Overnight Adventure",
        text1:"Dmitry Nozhenko",
        text2:"Jan 28, 2019 · 10 min read",
        type:"mask"
     },
     {
        id : 3,
        image :"https://img.veenaworld.com/wp-content/uploads/2019/07/Cover-4.jpg?imwidth=1080",
        img:"https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man-400x400.png",
        title:"Joshua Tree Overnight Adventure",
        text1:"Dmitry Nozhenko",
        text2:"Jan 28, 2019 · 10 min read",
        type:"mask"
     }
    ])
 }

 module.exports.apiController = get;