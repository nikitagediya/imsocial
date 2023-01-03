import Post from "../post/Post";
import "./posts.scss"

export const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Nikita Gediya",
      userId: 1,
      profilePic: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/"
    },
    {
      id: 2,
      name: "Nikita Gediya",
      userId: 2,
      profilePic: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/"
    },
    {
      id: 3,
      name: "Nikita Gediya",
      userId: 3,
      profilePic: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
    },
    {
      id: 4,
      name: "Nikita Gediya",
      userId: 4,
      profilePic: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
    }

  ];
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts;