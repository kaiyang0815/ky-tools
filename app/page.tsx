"use client";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full">
          <Textarea placeholder="Type your message here." />
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hex">Hex</SelectItem>
                        <SelectItem value="base64">Base64</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormLabel>Padding</FormLabel>
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a padding" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pkcs7">PKCS7</SelectItem>
                        <SelectItem value="none">No Padding</SelectItem>
                        <SelectItem value="iso10126">ISO0126 Padding</SelectItem>
                        <SelectItem value="zero">Zero Padding</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormLabel>Bit</FormLabel>
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a padding" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="128">128 Bytes</SelectItem>
                        <SelectItem value="192">192 Bytes</SelectItem>
                        <SelectItem value="256">256 Bytes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
