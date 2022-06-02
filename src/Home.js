
const Home = () => {

    const handleClick = (e) => {
        console.log("Hello", e);
    }


    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }



    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ (e) => handleClickAgain("Juan", e)}>Click me Again</button>
        </div>
    );
}

export default Home;