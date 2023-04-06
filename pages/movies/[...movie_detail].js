import {useRouter} from "next/router";

export default function Detail({data}) {

    const router = useRouter();

    // console.log('router', router.query.id);
    // console.log('router', router.query.title);

    // 페이지명으로 접근
    // const [title, id] = router.query.movie_detail || [];
    // console.log(router.query.movie_detail);

    console.log(data);

    return (
        <div>
            <h3>{data.original_title}</h3>
            <h2>{data.id}</h2>
        </div>
    );


};


export async function getServerSideProps(ctx){

    const [title, id] = ctx.params.movie_detail;

    const idx = ctx.req.rawHeaders.findIndex(req => req === 'Host');
    const host = ctx.req.rawHeaders[idx + 1];


    console.log(`http://${host}/api/movies/${id}`);
    const data = await (await fetch(`http://${host}/api/movies/${id}`)).json();

    // console.log(id.constructor);
    // console.log(id, pid);

    // redirect 하는법.
    if(id!==String(data.id)){
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props:{
            data,
        }
    }
}
