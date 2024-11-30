import React, { useEffect, useState } from 'react';
import blogimg from '../assets/image/blog-image.svg';
import { Link } from 'react-router-dom';

export default function Ourblog() {
    const [data, setData] = useState([]); // Initialize with empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.bthawk.com/api/blog_api", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ type: 'blogFetch' }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log(result); // Log the result to the console
                setData(result.data); // Set the fetched data
            } catch (error) {
                console.error('Error fetching data:', error); // Log errors to the console
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className='w-11/12 mx-auto mt-14'>
                <div className='flex justify-between py-3 ourblog-heading'>
                    <h1 className='text-2xl'>Our Blogs</h1>
                    <Link className='text-2xl text-[#22249B]' to='/Blogs'>View All</Link>
                </div>
                <div className='grid py-8 md:py-14 md:grid-cols-2 grid-cols-1'>
                    {data.slice(0, 8).map((item, index) => (
                        <div key={index} className='grid grid-cols-4 gap-4 mb-5 review w-full'>
                            <img className='border-2 rounded-xl blog-img col-span-1' width={170} src={item.image ? `https://www.bthawk.com/panel/img/${item.image}` : blogimg} alt={item.title} />
                            <div className='col-span-3'>
                                <b className='mb-2 blog-detail text-wrap text-xl'>{item.blog_title}</b>
                                <p className='mt-2 blog-detail' dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
