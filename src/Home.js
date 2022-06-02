import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

//HOOKS
// - useState() = Re-renders the server every time the state changes
// - useEffect() = Call a function from the server every time that happens a re-rendering
//   ir runs when the state changes and when the component starts
//   it could be used to fetch data or run an auth service

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body : 'lorem ipsum...', author:'Juan', id:1},
        {title: 'Welcome Party', body : 'lorem ipsum...', author:'Sebastian', id:2},
        {title: 'Web dev top tips', body : 'lorem ipsum...', author:'Juan', id:3}
    ]);

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id); // To look for the blogs that I want to keep
        setBlogs(newBlogs);
    };

    // the empty [] dependency array marks that it won't run if the state changes
    useEffect(() => {
        console.log('use Effect ran');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}> Change name</button>
            <p>{name}</p>
        </div>
    );

    // If I want to display a blog written by an specified user
    //<BlogList blogs={blogs.filter((blog) => blog.author==='Juan' )} title="Juan's blogs!"/>
}

export default Home;