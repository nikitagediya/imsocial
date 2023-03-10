import { useContext } from "react";
import {AuthContext} from "../../context/authContext"
import "./comments.scss";

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //TEMPORARY

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatibus.",
            name: "dimple darji",
            userId: 1,
            profilePicture: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatibus.",
            name: "dimple darji",
            userId: 2,
            profilePicture: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
        },
    ];
    return (
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>send</button>
            </div>
            {comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePicture} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
            ))}
        </div>
    )
}

export default Comments