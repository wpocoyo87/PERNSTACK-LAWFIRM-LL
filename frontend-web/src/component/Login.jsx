import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-2">Welcome to CLMS</h1>
                <p className="text-sm text-gray-500 mb-6">
                    Manage your tasks effectively with this management system
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="loginId">
                            Login ID
                        </label>
                        <input
                            type="text"
                            id="loginId"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <Link to="/register-admin" className="text-blue-500 hover:underline text-sm">
                    New to the system? Register Admin here
                </Link>
            </div>
        </div>
    );
}

export default Login;
