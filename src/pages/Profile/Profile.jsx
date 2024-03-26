import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../Context/UserContext";
import { 
  ProfileActions,
  ProfileAvatar, 
  ProfileBackground, 
  ProfileContainer, 
  ProfileHeader, 
  ProfileIconAdd, 
  ProfileIconEdit, 
  ProfilePosts, 
  ProfileUser,
 } from "./ProfileSytyled";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../../components/Card/Card";


export function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState ([]);

  async function findAllPostsByUser(){
    const postsResponse = await getAllPostsByUser();
    setPosts(postsResponse.data.postsByUser);

  }

  useEffect(() => {
    findAllPostsByUser();
  }, []);

  return (
    <ProfileContainer>
       <ProfileHeader>

       <ProfileIconEdit>
        <i className="bi bi-pencil-square"></i>
       </ProfileIconEdit>

       <ProfileBackground src={user.ProfileBackground} alt="" />
      
       <ProfileUser>
        <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
        <h2>{user.name}</h2>
        <h3>@{user.username}</h3> 
       </ProfileUser>  

       <ProfileActions>
         <ProfileIconAdd>
          <i className="bi bi-plus-circle"></i>
         </ProfileIconAdd>
       </ProfileActions>

       </ProfileHeader> 

       <ProfilePosts>
        {posts.length === 0 && <h3>Você ainda não criou nenhuma notícia...</h3>}
        {posts.map((item) => {
          return (
            <Card
               key={item.id}
               title={item.text}
               text={item.text}
               banner={item.banner}
               likes={item.likes}
               coments={item.coments}
               />      
         );
        })} 
        
       </ProfilePosts> 

   

    </ProfileContainer>
  );

}
