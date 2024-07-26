import React, { useEffect, useState } from 'react';

const AddUserModal = ({ editFlag, handleClose }) => {
    const initialFormData = {
        username: '',
        personInCharge: '',
        email: '',
        department: '',
        role: '',
        isActive: true,
        phoneNumber: '',
        notes: '',
    };

    const updatedFore = {
        username: 'AAAAAクリニック',
        personInCharge: '田中一郎',
        email: 'aaaaa@example.com',
        department: '内科',
        role: '利用者',
        isActive: true,
        phoneNumber: '111-1111-1111',
        notes: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        console.log(URL.createObjectURL(file));
      };

    useEffect(() => {
        console.log("edit:", editFlag);
        if (editFlag === true) {
            setFormData(updatedFore);
            console.log("Edit User Info:", formData)

        }
        else {
            setFormData(initialFormData);
            console.log("New UsrInfo:", formData);
        }

    }, [editFlag]);
    return (
        <>
            <button onClick={handleClose} className="absolute top-1 right-4 text-gray-600 text-3xl">
                &times;
            </button>
            <h2 className="text-xl font-bold mb-4">利用者情報編集</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <div className="relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {image ? (
                            <img
                                src={image}
                                alt="User"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
                                <span className=' text-center'>Add image</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-md text-blue-700 font-semibold">利用者名</label>
                        <input
                            type="text"
                            name="username"
                            placeholder='XXX'
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-2 p-2 block w-full shadow-sm md:text-[18px] sm:text-sm border-[1px] border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-md text-blue-700 font-semibold">担当者名</label>
                        <input
                            type="text"
                            name="personInCharge"
                            placeholder='XXXX'
                            value={formData.personInCharge}
                            onChange={handleChange}
                            className="mt-2 p-2 block w-full shadow-sm md:text-[18px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-md text-blue-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='XXXXX@XXXX.XX.XX'
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 p-2 block w-full shadow-sm md:text-[18px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-md text-blue-700 font-semibold">種別</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="mt-2 p-2 block w-full shadow-sm md:text-[16px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                        >
                            <option value="内科">内科</option>
                            <option value="外科">外科</option>
                            <option value="耳鼻科">耳鼻科</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">

                    <div className="mb-4">
                        <label className="block text-md text-blue-700 font-semibold">権限</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-2 p-2 block w-full shadow-sm md:text-[16px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                        >
                            <option value="利用者">利用者</option>
                            <option value="管理者">管理者</option>
                        </select>
                    </div>
                    <div className="flex items-center mb-4">
                        <label className="block text-md text-blue-700 font-semibold mr-4">有効</label>
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-md text-blue-700 font-semibold">AICall Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-2 p-2 block w-full shadow-sm md:text-[18px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-md text-blue-700 font-semibold">備考</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="mt-2 p-2 block w-full shadow-sm md:text-[18px] sm:text-sm border-[1px]  border-gray-300 hover:border-blue-500 active:border-blue-500 focus:border-blue-500 rounded-md"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={handleClose}>
                        キャンセル
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ">保存</button>

                </div>
            </form>
        </>

    );
};

export default AddUserModal;