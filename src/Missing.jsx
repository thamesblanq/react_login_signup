import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="m-4">
        <h1 className="text-red-700 font-bold text-2xl"> Page Not Found</h1>
        <p className="text-white">The page you are searching for does not exist. Please <Link to='/' className="underline font-semibold text-purple-600">here</Link> to visit our homepage. </p>
    </div>
  )
}

export default Missing