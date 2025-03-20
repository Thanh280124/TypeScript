import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLocation: string;
}

const AdvanceForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };
    
    return (
        <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg h-auto m-20">
            <h2 className="text-lg font-bold mb-3 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('firstName', { required: "First Name is required" })} />
                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('lastName', { required: "Last Name is required" })} />
                    {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })} />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="city">City</label>
                    <input type="text" id="city" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('city', { required: "City is required" })} />
                    {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="state">State</label>
                    <input type="text" id="state" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('state', { required: "State is required" })} />
                    {errors.state && <span className="text-red-500 text-xs">{errors.state.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="zip">ZIP</label>
                    <input type="text" id="zip" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('zip', { required: "ZIP is required" })} />
                    {errors.zip && <span className="text-red-500 text-xs">{errors.zip.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="country">Country</label>
                    <input type="text" id="country" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('country', { required: "Country is required" })} />
                    {errors.country && <span className="text-red-500 text-xs">{errors.country.message}</span>}
                </div>
                <div className="mb-1">
                    <label className="block mb-1 font-bold text-sm" htmlFor="completeLocation">Complete Location</label>
                    <textarea id="completeLocation" className="w-full p-1 border border-gray-300 rounded-md text-sm" {...register('completeLocation', { required: "Complete Location is required" })} />
                    {errors.completeLocation && <span className="text-red-500 text-xs">{errors.completeLocation.message}</span>}
                </div>
                <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 text-sm">Submit</button>
            </form>
        </div>
    );
};

export default AdvanceForm;
