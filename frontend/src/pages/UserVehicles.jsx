function UserVehicles() {

    return (
        <div>
            <h1 className="text-5xl mt-8">My Vehicles</h1>
            <section className="flex flex-wrap justify-between">
                <div className="card w-96 bg-base-100 shadow-xl mt-8">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Vehicle Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vehicle Year, Make, and Model</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserVehicles