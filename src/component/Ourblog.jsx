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
                <div className='flex justify-between py-3 ourblog-heading'>
                    <h1 className='text-2xl'>Our Blogs</h1>
                    <p className='text-2xl text-[#22249B]'>View All</p>
                </div>
                <div className='grid py-8 md:py-14 md:grid-cols-2'>
                    {
                        blogs.slice(0, 4).map((item, index) =>
                            <div key={index} className='flex flex-row gap-4 mb-5 review md:w-11/12'>
                                <img className='border-2 rounded-xl blog-img' width={170} src={item.blog_img} alt="review" />
                                <div>
                                    <b className='mb-2 text-xl'>{item.blog_heading}</b>
                                    <p className='mt-2 blog-detail'>{item.blog_des}</p>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </>
    )
}
