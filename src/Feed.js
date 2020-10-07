import React,{useState,useEffect} from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import db from "./firebase"

function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        );
    }, []);    
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        {/*
        <Post
          profilePic="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/72627285_2354387831557241_3949742394592722944_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=1xY5MqeSFfQAX_mClQ1&_nc_ht=scontent.fdel8-1.fna&oh=739ebec98608dfcffd002248aa28ce7a&oe=5F9F186A"
          message="Wow this Works"
          timestamp="this is a timestamp"
          image="https://scontent.fixc5-1.fna.fbcdn.net/v/t1.0-9/p843x403/120844977_3696068423785250_2883206299206757292_o.jpg?_nc_cat=1&_nc_sid=8bfeb9&_nc_ohc=gT0cdTb1CCAAX9rWVx_&_nc_ht=scontent.fixc5-1.fna&tp=6&oh=85f18cbba96a8fec3895be01a38ada5c&oe=5F9F5B49"
        />
        <Post
          profilePic="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/72627285_2354387831557241_3949742394592722944_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=1xY5MqeSFfQAX_mClQ1&_nc_ht=scontent.fdel8-1.fna&oh=739ebec98608dfcffd002248aa28ce7a&oe=5F9F186A"
          message="Wow this Works"
          timestamp="this is a timestamp"
          image="https://scontent.fixc5-1.fna.fbcdn.net/v/t1.0-9/120601948_659603834687725_1745919710710532411_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=EGU651DjRgEAX8mNtiO&_nc_ht=scontent.fixc5-1.fna&oh=60aa236fc0e6c1cef88f0754dcf86d81&oe=5FA05913"
        />
        {/*
        <Post
          profilePic="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/72627285_2354387831557241_3949742394592722944_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=1xY5MqeSFfQAX_mClQ1&_nc_ht=scontent.fdel8-1.fna&oh=739ebec98608dfcffd002248aa28ce7a&oe=5F9F186A"
          message="Wow this Works"
          timestamp="this is a timestamp"
          image="https://scontent.fixc5-1.fna.fbcdn.net/v/t1.0-9/s960x960/118761765_743448472884762_5807556106679067447_o.jpg?_nc_cat=111&_nc_sid=a26aad&_nc_ohc=HYuv2klRgDwAX80hIMo&_nc_ht=scontent.fixc5-1.fna&tp=7&oh=4f7c52603e712862fbf20f0b2515c4bf&oe=5FA0A169"
        />
        <Post
          profilePic="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/72627285_2354387831557241_3949742394592722944_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=1xY5MqeSFfQAX_mClQ1&_nc_ht=scontent.fdel8-1.fna&oh=739ebec98608dfcffd002248aa28ce7a&oe=5F9F186A"
          message="Wow this Works"
          timestamp="this is a timestamp"
          image="https://scontent.fixc5-1.fna.fbcdn.net/v/t1.0-9/117994221_738674926695450_6187465324459100050_n.jpg?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=q4OKNZaSCTMAX8zzF5x&_nc_ht=scontent.fixc5-1.fna&oh=6331ef9100f3af9e30aaf6ddf1c280ad&oe=5F9F7A6A"
        />  
         */}
        {posts.map((post)=>(
            <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
        ))}       
      </div>
    );
}

export default Feed
