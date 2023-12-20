import axios from 'axios';
import { useState } from 'react';
function VinDecoder() {

    const [vinNumber, setVinNumber] = useState('');
    const [response, setResponse] = useState(null);






    // Declare decodeVin in the outer scope
    const decodeVin = async (vin) => {
        const requestOptions = {
            headers: {
                'X-RapidAPI-Key': '3c8f6ec58amsh29c21ed13e0f1e0p1dca98jsn6fe4d39b0681',
                'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.get(`https://car-api2.p.rapidapi.com/api/vin/${vin}`, requestOptions);
            setResponse(response);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    const onClick = async (e) => {
        e.preventDefault()
        decodeVin(vinNumber)
    }
    return (
        <div>
            <div>
                <h1 className='text-3xl'>VIN Decoder</h1>
                <input
                    type="text"
                    id='vinNumber'
                    name='vinNumber'
                    value={vinNumber}
                    placeholder='Enter Vin Number'
                    className='border-2 border-gray-300 p-2 rounded-lg mt-4 w-48'
                    onChange={(e) => setVinNumber(e.target.value)}
                />
                <br />
                <button className='btn btn-ghost w-48' onClick={onClick}>Decode VIN</button>
            </div>

            {response && (
                <div className='flex justify-center'>

                    <button className="btn w-48" onClick={() => document.getElementById('my_modal_1').showModal()}>{`${response.data.make} ${response.data.model}`}</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h2 className="font-bold text-xl">{`${response.data.year} ${response.data.make} ${response.data.model}`}</h2>
                            <h3 className="font-bold text-lg mb-4">VIN: {vinNumber}</h3>
                            {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}

                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>Spec</th>
                                            <th>Description</th>
                                        </tr>
                                        {/* row 2 */}

                                        <tr>
                                            <td>Year</td>
                                            <td>{response.data.year}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Make</td>
                                            <td>{response.data.make}</td>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>{response.data.model}</td>
                                        </tr>
                                        <tr>
                                            <td>Trim</td>
                                            <td>{response.data.specs.series}</td>
                                        </tr>
                                        <tr>
                                            <td>Vehicle Type</td>
                                            <td>{response.data.specs.ncsa_body_type}</td>
                                        </tr>
                                        <tr>
                                            <td>Doors</td>
                                            <td>{response.data.specs.doors} Door</td>
                                        </tr>
                                        <tr>
                                            <td>Seats</td>
                                            <td>Seats {response.data.specs.number_of_seats} Passengers</td>
                                        </tr>
                                        <tr>
                                            <td>Fuel Type</td>
                                            <td>{response.data.specs.fuel_type_primary}</td>
                                        </tr>
                                        <tr>
                                            <td>Engine</td>
                                            <td>{response.data.specs.engine_configuration === "V-Shaped" ? `V${response.data.specs.engine_number_of_cylinders}` : `${response.data.specs.engine_number_of_cylinders} Cylinder`}</td>
                                        </tr>
                                        <tr>
                                            <td>Transmission</td>
                                            <td>{response.data.specs.transmission_speeds} Speed {response.data.specs.transmission_style}</td>
                                        </tr>
                                        <tr>
                                            <td>Drive Type</td>
                                            <td>{response.data.specs.drive_type}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            )}

        </div>
    )
}
export default VinDecoder