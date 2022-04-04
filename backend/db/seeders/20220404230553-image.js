'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Images', [
       { userId: 1, albumId: 1, 
        imageUrl: "https://images.unsplash.com/photo-1572975165674-2f8b8d9e2786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80", 
        content: "Los Angeles, USA" },
       { userId: 1, albumId: 1, imageUrl: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "New York, USA"},
       { userId: 1, albumId: 1, imageUrl: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "Chicago, USA"},
       { userId: 1, albumId: 2, imageUrl: "https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", content: "San Francisco, USA"},
       { userId: 2, albumId: 3, imageUrl: "https://images.unsplash.com/photo-1552993873-0dd1110e025f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=800", content: "Taipei, Taiwan"},
       { userId: 2, albumId: 3, imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "Kyoto, Japan"},
       { userId: 2, albumId: 4, imageUrl: "https://images.unsplash.com/photo-1548701214-948e2c384afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", content: "Seoul, Korea"},
       { userId: 2, albumId: 4, imageUrl: "https://images.unsplash.com/photo-1526893381913-e311045b8064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", content: "Paris, France" }, 
       { userId: 3, albumId: 5, imageUrl: "https://images.unsplash.com/photo-1603787935137-58167f55336f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80", content: "Berlin, Germany"},
       { userId: 3, albumId: 5, imageUrl: "https://images.unsplash.com/photo-1584772121849-56c717d6c542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80", content: "Sydney, Austraila"},
       { userId: 3, albumId: 6, imageUrl: "https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "Venice, Italy"},
       { userId: 3, albumId: 6, imageUrl: "https://images.unsplash.com/photo-1540125895252-edefe1c0132e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", content: "Chengdu, China"},
       { userId: 4, albumId: 7, imageUrl: "https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80", content: "Warsaw, Poland"},
       { userId: 4, albumId: 7, imageUrl: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "Cairo, Egypt"},
       { userId: 4, albumId: 8, imageUrl: "https://images.unsplash.com/photo-1600664356348-10686526af4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80", content: "Singapore, Singapore"},
       { userId: 4, albumId: 8, imageUrl: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", content: "London, England"},
          ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
  
      
      return queryInterface.bulkDelete('Images', null, {});
    
  }
};