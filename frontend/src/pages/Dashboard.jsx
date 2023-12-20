import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCarSide, FaFolderPlus, FaFolderOpen, FaUserCircle } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import VinDecoder from '../components/VinDecoder';


function Dashboard() {
    // Get user from redux store
    const { user } = useSelector((state) => state.auth)

    return (
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="text-5xl">Dashboard</h1>
                <br />
                <p className="text-3xl">Welcome Back {user.firstName}</p>
            </div>
            <div className='flex flex-wrap space-between justify-around mt-12'>

                <section className=''>

                    <ul className="menu bg-base-200 w-96 h-fit mt-6 text-3xl rounded-box">
                        <li className="p-4">
                            <Link to='/vehicles'>
                                <FaCarSide />
                                {user.firstName}'s Vehicles
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link to='/addvehicle'>
                                <FaTruckArrowRight />
                                Add Vehicle
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link to='/addrecord'>
                                <FaFolderPlus />
                                Add Service Record
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link to='/records'>
                                <FaFolderOpen />
                                All Records
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link to='/profile'>
                                <FaUserCircle />
                                {user.firstName}'s Profile
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className='justify-center'>
                    <VinDecoder />
                </section>
            </div>
        </div>
    )
}
export default Dashboard