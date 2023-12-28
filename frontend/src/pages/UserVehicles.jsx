import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVehicles, reset } from '../features/vehicles/vehicleSlice'
// import { getImages } from '../features/images/imageSlice'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'

function UserVehicles() {
    const { vehicles, isLoading, isError, isSuccess, message } = useSelector((state) => state.vehicles)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
            if (isError) {
                toast.error(message)
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getVehicles())
        console.log(vehicles)
    }, [dispatch])


    if (isLoading) {
        return <Spinner />
    }


    return (
        <div>
            <h1 className="text-5xl mt-8">My Vehicles</h1>
            <section className='flex justify-around mt-8'>

                {vehicles.map((vehicle) => (
                    <div key={vehicle._id} vehicle={vehicle}>

                        <section className="flex flex-wrap justify-between">
                            <div className="card w-96 bg-base-100 shadow-xl mt-8">
                                {/* <figure><img src={vehicle.images[0]} alt='Vehicle Photo' /></figure> */}
                                <div className="card-body">
                                    <h2 className=" font-semibold text-xl text-center">{vehicle.year} {vehicle.make} {vehicle.model} </h2>
                                    <p></p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/records/${vehicle._id}`} className="btn btn-primary">Vehicle Records</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default UserVehicles