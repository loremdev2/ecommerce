"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// schema for the form
const formSchema = z.object({
    name: z.string().min(1),
})

export const StoreModal = () => {
    const storeModal = useStoreModal();

    // form hook
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // handle form submission : CREATE STORE
        console.log(values);

    };

    return (
        <Modal
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
            title="Create Store"
            description="Add a new store to manage products and categories"
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-Commerce" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 items-center justify-end w-full">
                                <Button
                                    variant="outline"
                                    onClick={storeModal.onClose}
                                >
                                    Cancel
                                </Button>
                                <Button >Continue</Button>
                            </div>
                        </form>
                    </Form>

                </div>
            </div>
        </Modal>
    );
}