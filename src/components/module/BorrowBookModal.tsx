import { useState } from "react";
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
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import type { IBorrowBook } from "@/types/types";

// interface BorrowBookModalProps {
//   bookData: Book;
// }

const BorrowBookModal = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const form = useForm();

  // const onSubmit = (data: IBorrowBook) => {
  //   console.log("borrow book modal", data, date);
  // };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => setOpen(true)}
        >
          Borrow
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25 lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Borrow Book Information</DialogTitle>
          <DialogDescription>
            How many copies you want to borrow. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <form>
          <FieldGroup>
            <div className="flex gap-6">
              <Controller
                name="quantity"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Book Quantity</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Please enter the title of the book"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="dueDate"
                control={form.control}
                render={({ fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Due Date</FieldLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date-picker-simple"
                          className="justify-start font-normal"
                        >
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          // onSelect={setDate}
                          defaultMonth={date}
                        />
                      </PopoverContent>
                    </Popover>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button
                onClick={() => setOpen(false)}
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBookModal;
