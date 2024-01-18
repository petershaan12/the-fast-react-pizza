import { useSelector } from "react-redux"

function Username() {

    const username = useSelector(state=>state.user.username)

    if(!username) return null;
    return (
        <div className="text-sm font-semibold hidden md:block">
            {username}
        </div>
    )
}

export default Username
