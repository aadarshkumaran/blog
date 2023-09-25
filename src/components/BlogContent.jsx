import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const BlogContent = ({blogs}) => {  
    const {id} = useParams()

    let blog = {}
    if (blog){
        let arr = blogs.data.filter(blog => blog.id == id)
        blog = arr[0]
    }
    else{
        blog={}
    }

    console.log("blog object");
    console.log(blog);

    // const blogs = [
    //     {
    //         "id": 1,
    //         "title": "Blog 1",
    //         "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
    //         "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
    //         "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
    //             "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
    //             " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
    //             "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
    //             " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

    //         "authorName": "John Moris",
    //         "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
    //         "authorDesc": "Editor, Developer",
    //     },
    //     {
    //         "id": 2,
    //         "title": "Blog 2",
    //         "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
    //         "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
    //         "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
    //             "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
    //             " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
    //             "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
    //             " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

    //         "authorName": "John Moris",
    //         "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
    //         "authorDesc": "Editor, Developer",
    //     },
    //     {
    //         "id": 3,
    //         "title": "Blog 3",
    //         "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
    //         "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
    //         "content": " The version history of the Android mobile operating system began with the public release of its first beta on November 5, 2007. The first commercial version, Android 1.0, was released on September 23, 2008. The operating system is developed by Google on a yearly cycle since at least 2011.[1] New major releases are announced at Google I/O along with its first public beta to supported Google Pixel devices. The stable version is then released later in the year. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

    //         "authorName": "John Moris",
    //         "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
    //         "authorDesc": "Editor, Developer",
    //     },
    //     {
    //         "id": 4,
    //         "title": "Blog 4",
    //         "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
    //         "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
    //         "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " + "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit," +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur " +
    //             "adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur" +
    //             " adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore " +
    //             "ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. " +
    //             "Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, " +
    //             "nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, " +
    //             "facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
    //             " Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates." +
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

    //         "authorName": "John Moris",
    //         "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
    //         "authorDesc": "Editor, Developer",
    //     },
    //     {
    //         "id": 5,
    //         "title": "Blog 5",
    //         "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum porro doloribus rem animi.",
    //         "coverImg": "https://miro.medium.com/v2/1*L0jtcMWvl4YtFV7KB5-xlg.jpeg",
    //         "content": " The version history of the Android mobile operating system began with the public release of its first beta on November 5, 2007. The first commercial version, Android 1.0, was released on September 23, 2008. The operating system is developed by Google on a yearly cycle since at least 2011.[1] New major releases are announced at Google I/O along with its first public beta to supported Google Pixel devices. The stable version is then released later in the year. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio, a, facilis harum maxime aliquid non velit, nemo suscipit impedit culpa tempore ipsum delectus amet repellendus adipisci sunt voluptates.",

    //         "authorName": "John Moris",
    //         "authorImg": "http://127.0.0.1:5173/src/assets/react.svg",
    //         "authorDesc": "Editor, Developer",
    //     },
    // ]

    // let blog = blogs.filter(blog => blog.id == id)
    // blog = blog[0]

    return ( <>
    <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 xs:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
                <div className="col-span-2 gap-x-8 gap-y-8">
                    <img src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt="cover" className="h-56 w-full object-cover" />
                    <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
                    <div className="pt-5"><ReactMarkdown className="line-break">{`${blog.attributes.blogContent}`}</ReactMarkdown></div>
                </div>
                <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                    <div>
                        <img className="p-2 w-32 h-32 rounded-full mx-auto object-cover" src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}/>
                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.attributes.authorName}</h1>
                        <p className="text-center text-gray-900 font-medium">{blog.attributes.authorDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default BlogContent;