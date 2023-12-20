import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Profile() {
    // Get user from redux store
    const { user } = useSelector((state) => state.auth)
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
export default Profile