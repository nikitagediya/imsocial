import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";
// import photo from 'https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/'

export const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: "Nikita Gediya",
            img: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/"
        },
        {
            id: 2,
            name: "Nikita Gediya",
            img: "https://www.pexels.com/photo/silhouette-photography-of-group-of-people-jumping-during-golden-time-1000445/"
        },
        {
            id: 3,
            name: "Nikita Gediya",
            img: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
        },
        {
            id: 4,
            name: "Nikita Gediya",
            img: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
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