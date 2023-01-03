import "./comments.scss";

const Comments = () => {
    //TEMPORARY

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatibus.",
            name: "dimple darji",
            userId: 1,
            profilePicture: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatibus.",
            name: "dimple darji",
            userId: 2,
            profilePicture: "https://images.app.goo.gl/bHQE7TrAuGanqN9Q6"
        },
    ];
    return (
        <div className="comments">
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePicture} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments