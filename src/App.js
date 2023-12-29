import { useState, useEffect } from "react";
import './App.css';
import db from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    //データを取得する
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map(doc => ({ ...doc.data() })));
      setPosts(snapShot.docs.map(doc => ( { ...doc.data() } )));
    })

    /**リアルタイムデータ取得 */
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) =>( { ...doc.data() } )));
    })
  },[])

  return (
    <div className="App">
      <div class="contents">
      {posts.map((post) =>(
        // 本来keyはこの書き方ではいけない。※練習の為以下でwarning解消
        <div key={post.title}>
          <div>{post.title}</div>
          {/* <div>{post.timestamp}</div> */}
          <div>{post.text}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
