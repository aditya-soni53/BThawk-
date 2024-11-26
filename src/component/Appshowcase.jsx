import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function Appshowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

  const apps = [
    { name: "ADMIN APP", icon: faUserTie },
    { name: "FSE APP", icon: faUserTie },
    { name: "RETAILER APP", icon: faUserTie },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
    return (
        <>
            <div className="md:w-8/12 mx-auto text-center p-10">
                <h1 className='text-3xl pb-3'><span className='text-[#22249B]'>BT</span><span className='text-[#E45325]'>HAWK</span> App Showcase</h1>
                <p className=''>In order to make the business less complicated, BTHAWK has introduced 3 applications </p>
            </div>
            <div className='w-11/12 mx-auto grid md:grid-cols-3 mt-4'>
                <div className='grid md:grid-cols-2 apps gap-4'>
                {apps.map((app, index) => (
        <div
          key={index}
          className={`app-1 ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <div className="app-icon m-auto">
            <FontAwesomeIcon icon={app.icon} />
          </div>
          <b>{app.name}</b>
        </div>
      ))}

                </div>
                <div>sd</div>
                <div>sd</div>
            </div>

        </>
    )
}
