import { useGetBooksQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
    const {data, isLoading} = useGetBooksQuery(undefined);

    console.log(data, isLoading);
    return (
        <div>
            
        </div>
    );
};

export default AllBooks;