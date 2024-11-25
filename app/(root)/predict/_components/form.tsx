import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {FlaskConical, SquarePen} from "lucide-react";
import {Dispatch, SetStateAction} from "react";

const formSchema = z.object({
  text: z.string().min(2, {
    message: "input must be at least 2 characters.",
  }),
})

export const InputForm = ({ setResult, loading, setLoading }: { setResult: Dispatch<SetStateAction<number | undefined>>; loading: boolean; setLoading: Dispatch<SetStateAction<boolean>> }) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/predict`, { method: "POST", body: JSON.stringify(values), headers: {"Content-Type": "application/json"}})
      .then((res) => res.json())
      .then((data) => {
        const result = data.prediction.toFixed(2) * 100
        setResult(result)
        setLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-2 justify-center items-start w-full">
        <div className="flex border rounded-full h-16 px-6 flex-1 justify-center items-center">
          <SquarePen />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    disabled={loading}
                    required
                    minLength={4}
                    className="rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
                    placeholder="News Headline Here..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

        </div>
        <Button className="rounded-full h-16 px-8" type="submit"><FlaskConical /> Check</Button>
      </form>
    </Form>
  )
}