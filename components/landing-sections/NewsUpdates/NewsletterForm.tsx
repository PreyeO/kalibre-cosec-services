"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, NewsletterFormValues } from "@/schemas/newsletter";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const NewsletterForm = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    console.log("Submitted", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full">
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email address"
                    className="border border-[#A8A9AD] rounded-[30px] pr-12 py-5" // add right padding for button
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black w-[35px] h-[35px] rounded-full shadow"
                  >
                    <MoveRight size={20} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default NewsletterForm;
