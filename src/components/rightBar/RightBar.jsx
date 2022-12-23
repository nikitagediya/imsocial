import "./rightBar.scss"
import userlogo from '../images/user.jpg';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <span>Nikita Gediya</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <span>Nikita Gediya</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <p>
                <span>Nikita Gediya</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <p>
                <span>Nikita Gediya</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <p>
                <span>Nikita Gediya</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <p>
                <span>Nikita Gediya</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userlogo} alt="" />
              <div className="online" />
              <span>Nikita Gediya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar