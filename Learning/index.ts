import axios,{AxiosResponse} from "axios";

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchDatas = async () => {
    try {
    const res: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(res.data);      
} catch (error: any) {
    if(axios.isAxiosError(error)){
        console.error(error.message);
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
        }
    }else{
        console.error(error.message);
    }
        
    }
}

fetchDatas();