import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

//HOOKS
// - useState() = Re-renders the server every time the state changes
// - useEffect() = Call a function from the server every time that happens a re-rendering
//   ir runs when the state changes and when the component starts
//   it could be used to fetch data or run an auth service

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // the empty [] dependency array marks that it won't run if the state changes
    useEffect( () => {
        async function fetchData(){
            try{
                const res = await fetch('http://localhost:8000/blogs');
                if (!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                const data = await res.json();
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            }catch (e) {
                setIsPending(false);
                setError(e.message);
            }
        }
        fetchData();
        console.log("Use Effect");
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
        </div>
    );

    // If I want to display a blog written by an specified user
    //<BlogList blogs={blogs.filter((blog) => blog.author==='Juan' )} title="Juan's blogs!"/>
}

export default Home;