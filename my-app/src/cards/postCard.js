export const PostCard = (post)=>{

const {
_id ,
content ,
likes ,  
username,
createdAt,
updatedAt,
comments}=post



    return(<div>
        <p>{username}</p>
    </div>)


}