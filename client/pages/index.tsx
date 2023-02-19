import Link from 'next/link';

const Home = () => {
    return (
        <>
            <title>Home Page</title>
            <Link href="/user-list">Fetch Users List</Link>
        </>
    );
};

export default Home;
