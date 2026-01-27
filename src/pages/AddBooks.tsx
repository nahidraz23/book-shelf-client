import { useForm } from 'react-hook-form'

const AddBooks = () => {

    const form = useForm()

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="container mx-auto">
         <form onSubmit={form.handleSubmit(onSubmit)}>

         </form>
        </div>
    );
};

export default AddBooks;