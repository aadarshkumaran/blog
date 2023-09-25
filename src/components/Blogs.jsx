import { Link } from "react-router-dom";

const Blogs = ({blogs}) => {
    // console.log("blog component");
    // console.log(blogs);
    const blogs1 = [
        {
            "id": 1,
            "title": "Blog 1",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
            "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
            "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
                "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
                " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
                "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
                " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

            "authorName": "John Moris",
            "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
            "authorDesc": "Editor, Developer",
        },
        {
            "id": 2,
            "title": "Blog 2",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
            "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
            "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
                "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
                " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
                "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
                " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

            "authorName": "John Moris",
            "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
            "authorDesc": "Editor, Developer",
        },
        {
            "id": 3,
            "title": "Blog 3",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
            "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
            "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
                "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
                " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
                "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
                " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

            "authorName": "John Moris",
            "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
            "authorDesc": "Editor, Developer",
        },
        {
            "id": 4,
            "title": "Blog 4",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
            "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
            "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
                "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
                " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
                "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
                "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
                "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
                "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
                " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

            "authorName": "John Moris",
            "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
            "authorDesc": "Editor, Developer",
        },
    ]
    return (<>
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid gap-8 px-4 text-black lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2">
                    {blogs.data.map(blog =>
                        <Link to={`/blog/${blog.id}`}>
                            <div className="bg-white rounded-x1 overflow-hidden drop-shadow-md">
                                <img src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} className="h-[8rem] w-full object-cover" />
                                <div className="p-8"><h3 className="font-bold text-2xl my-1">{blog.attributes.blogTitle}</h3>
                                    <p className="text-gray-600 text-xl">{blog.attributes.blogDesc}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                    {/* {blogs1.map(blog =>
                        <Link to={`/blog/${blog.id}`}>
                            <div className="bg-white rounded-x1 overflow-hidden drop-shadow-md">
                                <img src={blog.coverImg} className="h-[8rem] w-full object-cover" />
                                <div className="p-8"><h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                                    <p className="text-gray-600 text-xl">{blog.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )} */}
                </div>
            </div>

        </div>
    </>);
}

export default Blogs;