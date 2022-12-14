import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./styles/Home.css";

type Doc = {
  author?: { username: string; id: string };
  id?: string;
  postText?: string;
  title?: string;
};

export const Home = () => {
  const [postList, setPostList] = useState<Doc[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // type Docのプロパティに?をつけないと下記がerrorに。typescriptムズイ。
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author?.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
