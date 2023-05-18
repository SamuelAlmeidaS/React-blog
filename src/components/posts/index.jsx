import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import style from './Post.module.css';


export const Post = (prop) => {

    useEffect(()=>{
        AOS.init({duration: 1000});
    },[]);


    return (
        <div className={style.msg} data-aos="fade-up" data-aos-delay="100">
            <span>{prop.date}</span>
            <h1>{prop.title}</h1>
            <p>{prop.body}</p>
        </div>
    );
}