import "./leftBar.scss"
import userlogo from "../images/user.jpg";
import Friends from "../../assets/2.png";
import Groups from "../../assets/3.png";
import Market from "../../assets/4.png";
import Watch from "../../assets/5.png";
import Memories from "../../assets/6.png";
import Events from "../../assets/7.png";
import Gaming from "../../assets/8.png";
import Gallery from "../../assets/9.png";
import Videos from "../../assets/10.png";
import Message from "../../assets/11.png";
import Fund from "../../assets/12.png";
import Tutorials from "../../assets/13.png";
import Courses from "../../assets/14.png";
 
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={userlogo} alt="" />
              <span>Nikita Gediya</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""/>
            <span>Friend</span>
          </div>
          <div className="item">
            <img src={Groups} alt=""/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt=""/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""/>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""/>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts </span>
          <div className="item">
            <img src={Events} alt=""/>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt=""/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt=""/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt=""/>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Message} alt=""/>
            <span>Message</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt=""/>
            <span>Message</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt=""/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt=""/>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar