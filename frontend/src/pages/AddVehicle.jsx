import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddVehicle() {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        trim: '',
        year: '',
        color: '',
        engine: '',
        fuel: '',
        transmission: '',
        transmissionSpeeds: '',
        driveType: '',
        milesOrHours: '',
        mileage: '',
        vinSerial: '',
        vinSerialNumber: '',
        licensePlate: '',
    })


    return (
        <div>
            <h1 className="text-3xl font-semibold">Add A Vehicle</h1>
            <div className="flex flex-wrap justify-around mt-16">
                {/* first column */}
                <section className="form-control w-96">
                    <div className="join join-vertical">
                        {/* make input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Make</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Make"
                                id="make"
                                name="make"
                                value={formData.make}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                        {/* model input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Model</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Model"
                                id="model"
                                name="model"
                                value={formData.model}
                                className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* year input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Year</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Year"
                                id="year"
                                name="year"
                                value={formData.year}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                        {/* trim input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Trim</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Trim"
                                id="trim"
                                name="trim"
                                value={formData.trim}
                                className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* color input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Color</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Color"
                                id="color"
                                name="color"
                                value={formData.color}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                        {/* select component for engine*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Engine</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <select
                                id="engine"
                                name="engine"
                                value={formData.engine}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="I4">I4</option>
                                <option value="V6">V6</option>
                                <option value="V8">V8</option>
                                <option value="V10">V10</option>
                                <option value="Electric Motors">Electric Motor/s</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                    </div>
                </section>
                {/* second column */}
                <section className="form-control w-96">
                    <div className="join join-vertical">

                        {/* select component for fuel type*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Fuel Type</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <select
                                id="fuel"
                                name="fuel"
                                value={formData.fuel}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="Gas">Gas</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </label>

                        {/* select component for transmission*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Transmission Type</span>
                            </div>
                            <select
                                id="transmission"
                                name="transmission"
                                value={formData.transmission}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        {/* input component for transmission speeds*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Transmission Speeds</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Transmission Speeds"
                                id="transmissionSpeeds"
                                name="transmissionSpeeds"
                                value={formData.transmissionSpeeds}
                                className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* select component for drive type*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Drive Type</span>
                            </div>
                            <select
                                id="driveType"
                                name="driveType"
                                value={formData.driveType}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="4x4">4x4</option>
                                <option value="4x2">4x2</option>
                                <option value="AWD">AWD</option>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                            </select>
                        </label>

                        {/* select component for miles or hours*/}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Odometer: Miles, Hours</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <select
                                id="milesOrHours"
                                name="milesOrHours"
                                value={formData.milesOrHours}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="Miles">Miles</option>
                                <option value="Hours">Hours</option>
                            </select>
                        </label>

                        {/* miles/hours input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-1">
                                <span className="label-text">Odometer Reading</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Odometer Reading"
                                id="mileage"
                                name="mileage"
                                value={formData.mileage}
                                className="input input-bordered w-full max-w-xs" />
                        </label>

                    </div>
                </section>
                {/* third column */}
                <section className="form-control w-96">
                    <div className="join join-vertical">

                        {/* vin selection */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">VIN or Serial Number</span>
                            </div>
                            <select
                                id="vinSerial"
                                name="vinSerial"
                                value={formData.vinSerial}
                                className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option value="VIN">VIN</option>
                                <option value="Serial">Serial Number</option>
                            </select>
                        </label>

                        {/* vin input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">VIN or Serial Number</span>
                            </div>
                            <input
                                type="text"
                                placeholder="VIN or Serial Number"
                                id="vinSerialNumber"
                                name="vinSerialNumber"
                                value={formData.vinSerialNumber}
                                className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* license plate input */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">License Plate</span>
                            </div>
                            <input
                                type="text"
                                placeholder="License Plate"
                                id="licensePlate"
                                name="licensePlate"
                                value={formData.licensePlate}
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                        {/* submit button */}
                        <div >
                            <button className="btn btn-primary btn-wide mt-24 text-xl">Add Vehicle</button>
                            <button className="btn btn-primary btn-wide mt-2 text-xl">Clear All Fields</button>
                            <Link to='/dashboard' className="btn btn-primary btn-wide mt-2 text-xl">Return to Dashboard</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AddVehicle