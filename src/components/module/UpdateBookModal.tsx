import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useUpdateBookMutation } from "@/redux/api/baseApi";

const UpdateBookModal = ({ bookData }) => {
  const form = useForm();
  const [updateBook, {isLoading}] = useUpdateBookMutation()
  // const [loadedData, setLoadedData] = useState(undefined);

  // const handleUpdateBook = (data) => {
  //   setLoadedData(data);
  // };

  const onSubmit = async (data) => {
    const dirtyFields = form.formState.dirtyFields;
    const updatedData = Object.keys(dirtyFields).reduce((acc,key) => {
      acc[key] = data[key];
      return acc;
    }, {})
    
    await updateBook({
      id: bookData?._id,
      ...updatedData
    }).unwrap()
  };

  return (
    <Dialog onOpenChange={(open) =>{
      if(open){
        form.reset(bookData)
      }
    }}>
      <DialogTrigger asChild>
        {/* <Button onClick={() => handleUpdateBook(bookData)}>Edit</Button> */}
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25 lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Edit Book Information</DialogTitle>
          <DialogDescription>
            Make changes to Book here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          // id="form-add-book"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex gap-6">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Title</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter the title of the book"
                      autoComplete="on"
                      // defaultValue={loadedData?.title}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="author"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Author</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter the author of the book"
                      autoComplete="off"
                      // defaultValue={loadedData?.author}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className="flex gap-6">
              <Controller
                name="genre"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Genre</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter the genre of the book"
                      autoComplete="off"
                      // defaultValue={loadedData?.genre}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="isbn"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book ISBN</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter the ISBN of the book"
                      autoComplete="off"
                      // defaultValue={loadedData?.isbn}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className="flex gap-6">
              <Controller
                name="copies"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Quantity</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter quantity of the book"
                      autoComplete="off"
                      // defaultValue={loadedData?.copies}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="availability"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Availability</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      // defaultValue={
                      //   loadedData?.available === true ? "true" : "false"
                      // }
                    >
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Please select the availability of the book" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">Unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Book Description</FieldLabel>
                  <Textarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter the description of the book"
                    autoComplete="off"
                    // defaultValue={loadedData?.description}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookModal;
