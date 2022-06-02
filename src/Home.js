import BlogList from "./BlogList";
import useFetch from "./useFetch";

//HOOKS
// - useState() = Re-renders the server every time the state changes
// - useEffect() = Call a function from the server every time that happens a re-rendering
//   ir runs when the state changes and when the component starts
//   it could be used to fetch data or run an auth service

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All blogs!"/>}
        </div>
    );

    // If I want to display a blog written by an specified user
    //<BlogList blogs={blogs.filter((blog) => blog.author==='Juan' )} title="Juan's blogs!"/>
}

export default Home;