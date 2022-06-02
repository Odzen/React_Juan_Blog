import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

//HOOKS
// - useState() = Re-renders the server every time the state changes
// - useEffect() = Call a function from the server every time that happens a re-rendering
//   ir runs when the state changes and when the component starts
//   it could be used to fetch data or run an auth service

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // the empty [] dependency array marks that it won't run if the state changes
    useEffect( () => {
        async function fetchData(){
            try{
                const res = await fetch('http://localhost:8000/blogs');
                const data = await res.json();
                console.log(data);
                setBlogs(data);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
        console.log("Use Effect");
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
        </div>
    );

    // If I want to display a blog written by an specified user
    //<BlogList blogs={blogs.filter((blog) => blog.author==='Juan' )} title="Juan's blogs!"/>
}

export default Home;