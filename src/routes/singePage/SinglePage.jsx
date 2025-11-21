import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
            {/* <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div> */}
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {/* {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )} */}
                {singlePostData.address === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {/* {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )} */}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                {/* <p>{post.postDetail.income}</p> */}
                <p>{singlePostData.latitude}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              {/* <span>{post.postDetail.size} sqft</span> */}
              <span>{singlePostData.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              {/* <span>{post.bedroom} beds</span> */}
              <span>{singlePostData.bedRooms} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              {/* <span>{post.bathroom} bathroom</span> */}
              <span>{singlePostData.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                {/* <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                  
                </p> */}

                {
                  <p>
                    {singlePostData.school > 999
                      ? singlePostData.school / 1000 + "km"
                      : singlePostData.school + "m"}{" "}
                    away
                  </p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                {/* <p>{post.postDetail.bus}m away</p> */}
                <p>{singlePostData.bus}m away </p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                {/* <p>{post.postDetail.restaurant}m away</p> */}
                <p>{singlePostData.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
            >
              <img src="/save.png" alt="" />
              {/* {saved ? "Place Saved" : "Save the Place"} */}
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
