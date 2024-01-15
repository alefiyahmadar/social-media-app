import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:"https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    followers:[],
    following:[],
    status:"HalalAsHell"
  },
   {
      _id: uuid(),
      firstName: "Shubham",
      lastName: "Soni",
      username: "shubhamsoni",
      password: "shubhamsoni890",

      createdAt: formatDate(),
      updatedAt: formatDate(),
      profileImg:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      followers:[],
      following:[],
      status:"LiviinnTruee"
    },
    
   {
      _id: uuid(),
      firstName: "Soham",
      lastName: "Shah",
      username: "sohamshah",
      password: "sohamshah567",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profileImg:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      followers:[],
      following:[],
      status:"Sohaammm Heree"
    },
    {
      _id: uuid(),
      firstName: "Mary",
      lastName: "Jane",
      username: "maryy",
      password: "maryjane990",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      profileImg:"https://wallpapers.com/images/hd/aesthetic-profile-picture-1rgefsojys253ard.jpg",
      followers:[],
      following:[],
      status:"MaryGoAround"
    },
  
];
