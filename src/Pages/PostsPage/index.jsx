import './PostsPage.css'
import { useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function PostsPage() {

    const params = useParams();
    const thisPost = posts.find((thisPost) => {
        return thisPost.id === Number(params.id);
    })

    console.log(thisPost);

    return (
        <main className='post-main-image'>
            <div className='post'>
                <section className='section'>
                    <h1 className='post-title'>
                        {thisPost.title}
                    </h1>
                    <p className='post-date'>
                        {`(${thisPost.date})`}
                    </p>
                </section>
                <ReactMarkdown className="post-text">
                    {thisPost.texto}
                </ReactMarkdown>
            </div>
        </main>

    )
}
