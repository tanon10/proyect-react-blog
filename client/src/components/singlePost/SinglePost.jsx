import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={require("../img/post2.jpg")}
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="siglePostAuthor">
            Author: <b> Antonio</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          molestias quod atque fuga magni ipsa necessitatibus natus veritatis
          repellat sed, eaque nam quas eos nihil eius! Laboriosam rerum odit
          nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente molestias quod atque fuga magni ipsa necessitatibus natus
          veritatis repellat sed, eaque nam quas eos nihil eius! Laboriosam
          rerum odit nobis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente molestias quod atque fuga magni ipsa necessitatibus
          natus veritatis repellat sed, eaque nam quas eos nihil eius!
          Laboriosam rerum odit nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente molestias quod atque fuga magni ipsa
          necessitatibus natus veritatis repellat sed, eaque nam quas eos nihil
          eius! Laboriosam rerum odit nobis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente molestias quod atque fuga magni
          ipsa necessitatibus natus veritatis repellat sed, eaque nam quas eos
          nihil eius! Laboriosam rerum odit nobis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente molestias quod atque fuga magni
          ipsa necessitatibus natus veritatis repellat sed, eaque nam quas eos
          nihil eius! Laboriosam rerum odit nobis!
        </p>
      </div>
    </div>
  );
}
