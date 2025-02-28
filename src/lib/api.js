import axiosPublic from "@/hooks/useAxios/useAxiosPublic"


export const createNewUserDB = async(newUser) => {
    console.log('Api te ki new User ashche?', newUser)
    const response = await axiosPublic.post('/api/users', newUser)
    console.log(response?.data)
    return response?.data
}