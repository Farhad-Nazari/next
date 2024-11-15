

const singlePostPage = ({post}) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export async function getServerSideProps (context) {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.query.id}`);
        const data=await response .json();
        return {
            props:{
                post:data
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}
 
export default singlePostPage;