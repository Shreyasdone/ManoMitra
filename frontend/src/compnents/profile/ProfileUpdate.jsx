import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PhotoIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const ProfileUpdate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { username } = useParams();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/${username}/getuserdetails`);
                if (response.status === 200) {
                    const data = await response.json();
                    const { name, email, gender, age, bio, profilePicture } = data;
                    setName(name);
                    setEmail(email);
                    setGender(gender);
                    setAge(age);
                    setBio(bio);
                    setProfilePicture(profilePicture);
                } else {
                    setError('Failed to fetch user details');
                }
            } catch (error) {
                setError('Failed to fetch user details');
            }
        };

        fetchUserDetails();
    }, [username]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log (name, value);
        switch (name) {
            case 'newPassword':
                setNewPassword(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'bio':
                setBio(value);
                break;
            default:
                break;
        }
    };

    const handleFileChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (newPassword) {
                formData.append('password', newPassword);
            }
            formData.append('name', name);
            formData.append('email', email);
            formData.append('gender', gender);
            formData.append('age', age);
            formData.append('bio', bio);
            if (profilePicture) {
                formData.append('profilePicture', profilePicture);
            }
    
            const response = await axios.patch(`http://localhost:8000/${username}/update-user`, formData);
            console.log(response);
            if (response.status === 200) {
                navigate(`/${username}/profile`);
            } else {
                setError('Failed to update profile');
            }
        } catch (error) {
            setError('Failed to update profile');
        }
    };

    const handleCancel = () => {
        navigate(`/${username}/profile`);
    };

    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-r from-zinc-50 to-red-100">
                <form onSubmit={handleSubmit} className='max-w-3xl mx-auto'>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 text-center mb-8">Update Profile</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 col-span-full">
                                <div className="col-span-full">
                                    <label htmlFor="profilePicture" className="block text-sm font-medium leading-6 text-gray-900">Profile Picture</label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="profilePicture" type="file" className="sr-only" onChange={handleFileChange} />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={username}
                                            disabled
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="newPassword"
                                            value={newPassword}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="age"
                                            id="age"
                                            value={age}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                                    <div className="mt-2">
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={gender}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Non Binary">Non Binary</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">Bio</label>
                                    <div className="mt-2">
                                        <textarea
                                            id="bio"
                                            name="bio"
                                            rows={3}
                                            value={bio}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                        {error && (
                            <p className="mt-4 text-sm text-red-600">{error}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
