import React from 'react'
import blogimg from '../assets/image/blog-image.svg'
export default function Ourblog() {
    const blogs = [
        {
            id: 1,
            blog_img: blogimg,
            blog_heading: "1What Is Indirect Tax",
            blog_des: "Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis, earum distinctio sunt minima dolorum doloribus voluptatem at soluta cum totam quasi necessitatibus exercitationem amet dicta quod quidem, animi ratione! sit amet consectetur adipisicing elit. Esse, incidunt qui! Neque molestias tempora quibusdam. Modi corporis rerum incidunt facere deleniti? Neque, vero autem magni voluptas quae incidunt illo porro?"
        },
        {
            id: 2,
            blog_img: blogimg,
            blog_heading: "2What Is Indirect Tax",
            blog_des: "Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis, earum distinctio sunt minima dolorum doloribus voluptatem at soluta cum totam quasi necessitatibus exercitationem amet dicta quod quidem, animi ratione! sit amet consectetur adipisicing elit. Esse, incidunt qui! Neque molestias tempora quibusdam. Modi corporis rerum incidunt facere deleniti? Neque, vero autem magni voluptas quae incidunt illo porro?"
        },
        {
            id: 3,
            blog_img: blogimg,
            blog_heading: "3What Is Indirect Tax",
            blog_des: "Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis, earum distinctio sunt minima dolorum doloribus voluptatem at soluta cum totam quasi necessitatibus exercitationem amet dicta quod quidem, animi ratione! sit amet consectetur adipisicing elit. Esse, incidunt qui! Neque molestias tempora quibusdam. Modi corporis rerum incidunt facere deleniti? Neque, vero autem magni voluptas quae incidunt illo porro?"
        },
        {
            id: 4,
            blog_img: blogimg,
            blog_heading: "4What Is Indirect Tax",
            blog_des: "Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis, earum distinctio sunt minima dolorum doloribus voluptatem at soluta cum totam quasi necessitatibus exercitationem amet dicta quod quidem, animi ratione! sit amet consectetur adipisicing elit. Esse, incidunt qui! Neque molestias tempora quibusdam. Modi corporis rerum incidunt facere deleniti? Neque, vero autem magni voluptas quae incidunt illo porro?"
        },
        {
            id: 5,
            blog_img: blogimg,
            blog_heading: "5What Is Indirect Tax",
            blog_des: "Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis, earum distinctio sunt minima dolorum doloribus voluptatem at soluta cum totam quasi necessitatibus exercitationem amet dicta quod quidem, animi ratione! sit amet consectetur adipisicing elit. Esse, incidunt qui! Neque molestias tempora quibusdam. Modi corporis rerum incidunt facere deleniti? Neque, vero autem magni voluptas quae incidunt illo porro?"
        },

    ]
    return (
        <>
            <div className='w-11/12 mx-auto mt-14'>
                <div className='ourblog-heading py-3 flex justify-between'>
                    <h1 className='text-2xl'>Our Blogs</h1>
                    <p className='text-2xl text-[#22249B]'>View All</p>
                </div>
                <div className='md:py-14 py-8 grid md:grid-cols-2'>
                    {
                        blogs.slice(0, 4).map((item, index) =>
                            <div key={index} className='review flex flex-row gap-4 md:w-11/12 mb-5'>
                                <img className='rounded-xl border-2 blog-img' width={170} src={item.blog_img} alt="review" />
                                <div>
                                    <b className='text-xl mb-2'>{item.blog_heading}</b>
                                    <p className='blog-detail mt-2'>{item.blog_des}</p>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </>
    )
}
