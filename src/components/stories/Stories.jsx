import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

export const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: "Nikita Gediya",
            img: "https://th.bing.com/th/id/R.f02fb5e8b529c2f67bcdd20ba40898a2?rik=RVzh29ShilBGHA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-viyfcEd7r_k%2fUiP0B9XwkwI%2fAAAAAAAAAmI%2f6dO1RpKfZJs%2fs1600%2f2011-friendship-day-collection%2b2.jpg&ehk=rGxVx5XnlJlC6MoK49fGg1c%2bobIPHqz9hvGx%2bq9vObY%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id: 2,
            name: "Nikita Gediya",
            img: "https://th.bing.com/th/id/R.f02fb5e8b529c2f67bcdd20ba40898a2?rik=RVzh29ShilBGHA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-viyfcEd7r_k%2fUiP0B9XwkwI%2fAAAAAAAAAmI%2f6dO1RpKfZJs%2fs1600%2f2011-friendship-day-collection%2b2.jpg&ehk=rGxVx5XnlJlC6MoK49fGg1c%2bobIPHqz9hvGx%2bq9vObY%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id: 3,
            name: "Nikita Gediya",
            img: "https://th.bing.com/th/id/R.f02fb5e8b529c2f67bcdd20ba40898a2?rik=RVzh29ShilBGHA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-viyfcEd7r_k%2fUiP0B9XwkwI%2fAAAAAAAAAmI%2f6dO1RpKfZJs%2fs1600%2f2011-friendship-day-collection%2b2.jpg&ehk=rGxVx5XnlJlC6MoK49fGg1c%2bobIPHqz9hvGx%2bq9vObY%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id: 4,
            name: "Nikita Gediya",
            img: "https://th.bing.com/th/id/R.f02fb5e8b529c2f67bcdd20ba40898a2?rik=RVzh29ShilBGHA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-viyfcEd7r_k%2fUiP0B9XwkwI%2fAAAAAAAAAmI%2f6dO1RpKfZJs%2fs1600%2f2011-friendship-day-collection%2b2.jpg&ehk=rGxVx5XnlJlC6MoK49fGg1c%2bobIPHqz9hvGx%2bq9vObY%3d&risl=&pid=ImgRaw&r=0"
        },
    ]
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}


export default Stories