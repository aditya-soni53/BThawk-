import React, { useEffect, useState } from 'react';
import profileimg from '../assets/image/favicon.svg';
import Blogbanner from '../assets/image/blog-banner.jpg';

export default function Bloglist() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.bthawk.com/api/blog_api");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
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
            <div className="w-11/12 mx-auto mt-12">
                <h1 className='text-2xl'>Latest Blog</h1>
            </div>
            <div className='w-11/12 mx-auto my-10 grid lg:grid-cols-3 gap-4'>
                {
                    data.map((item, index) =>
                        <div key={index} className="blog-card">
                            <img src={item.image} className='rounded-xl' alt="" />
                            <div className="blog-card-content pt-3">
                                <h2 className='text-lg'>{item.blog_title}</h2>
                                <div className="blog-card-footer grid grid-cols-2">
                                    <div className='flex p-2'>
                                        <img src={profileimg} alt="" className='w-6 mr-1' />
                                        <span> BTHAWK</span>
                                    </div>
                                    <div className='flex p-2'>
                                        <img src={profileimg} alt="" className='w-6 mr-1' />
                                        <span> BTHAWK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
