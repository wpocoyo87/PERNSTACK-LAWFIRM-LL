import { useState } from 'react';
import API from '../services/api'; // API service for backend calls

function RegisterAdmin() {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [email, setEmail] = useState('');
    const [admin1Id, setAdmin1Id] = useState('');
    const [admin1Password, setAdmin1Password] = useState('');
    const [admin2Id, setAdmin2Id] = useState('');
    const [admin2Password, setAdmin2Password] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await API.post('/auth/register-admin', {
                companyName,
                companyAddress,
                email,
                admins: [
                    { adminId: admin1Id, password: admin1Password },
                    { adminId: admin2Id, password: admin2Password },
                ],
            });

            if (response.data.success) {
                setSuccess('Company and Admins registered successfully!');
            } else {
                setError(response.data.message || 'Failed to register');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Register Company and Admins</h2>
                <form onSubmit={handleSubmit}>
                    {/* Company Information */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Company Address</label>
                        <textarea
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            rows="3"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Admin 1 Information */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Admin 1 ID</label>
                        <input
                            type="text"
                            value={admin1Id}
                            onChange={(e) => setAdmin1Id(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Admin 1 Password</label>
                        <input
                            type="password"
                            value={admin1Password}
                            onChange={(e) => setAdmin1Password(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Admin 2 Information */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Admin 2 ID</label>
                        <input
                            type="text"
                            value={admin2Id}
                            onChange={(e) => setAdmin2Id(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Admin 2 Password</label>
                        <input
                            type="password"
                            value={admin2Password}
                            onChange={(e) => setAdmin2Password(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Error and Success Messages */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterAdmin;
