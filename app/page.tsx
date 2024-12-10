"use client";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
        <Card>
          <CardHeader>
            <CardTitle>AES在线加密解密工具</CardTitle>
            <CardDescription>AES是密码学中的高级加密标准，又称Rijndael加密法，是一种常用对称密钥加密算法。可以根据不同的填充padding(PKCS5/PKCS7/ISO10126/NO)、位数digit(128b/192b/256b)、模式mode(ECB/CBC/CFB/OFB/CTR)、密钥key(16B/24B/32B)、偏移量iv来控制加密行为</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
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
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <FormLabel>Code</FormLabel>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>加密时该配置为输出结果的编码格式 解密时该配置为待解密数据的编码格式</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
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
                          <FormLabel>Key</FormLabel>
                          <div className="flex flex-row">
                            <Select>
                              <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select a code" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hex">Hex</SelectItem>
                                <SelectItem value="base64">Base64</SelectItem>
                                <SelectItem value="utf8">UTF8</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input placeholder="key" {...field} />
                          </div>
                          <FormLabel>Mode</FormLabel>
                          <Select>
                            <SelectTrigger className="w-[280px]">
                              <SelectValue placeholder="Select a mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ecb">ECB</SelectItem>
                              <SelectItem value="cbc">CBC</SelectItem>
                              <SelectItem value="cfb">CFB</SelectItem>
                              <SelectItem value="ofb">OFB</SelectItem>
                              <SelectItem value="ctr">CTR</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormLabel>IV</FormLabel>
                          <div className="flex flex-row">
                            <Select>
                              <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select a code" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hex">Hex</SelectItem>
                                <SelectItem value="base64">Base64</SelectItem>
                                <SelectItem value="utf8">UTF8</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input placeholder="IV" {...field} />
                          </div>
                          <FormDescription>AES.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
              <div className="w-full">
                <Textarea placeholder="Result." />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
